(ns koans.core
  (:use [jayq.core :only [$]]
        [jayq.util :only [wait]])
  (:require
    [cljs.js :as cljs]
    [clojure.set]
    [clojure.string]
    [koans.meditations :as meditations]
    [jayq.core :as $]
    [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [deftemplate]]))

(enable-console-print!)

(defn hash-objects [] (clojure.string/split (.-hash js/location) "/"))

(defn current-koan-index [] (meditations/KoanIndex.
                             (subs (first (hash-objects)) 1)
                             (dec (last (hash-objects)))))

(defn update-location-hash []
  (let [koan (meditations/next-koan-index (current-koan-index))]
    (set! (.-hash js/location) (str (:category koan) "/" (inc (:index koan))))))

(def fadeout-time 600)
(def char-width 14)
(def enter-key 13)

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" (:index (current-koan-index)))}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code-box"}
      (for [text (:code-strings koan)]
        (if (= text :input)
          [:span {:class "code"}
            [:span {:class "shadow"}]
            [:input {:name "code"}]]
          [:span {:class "text"} text]))]
    (if-not (nil? (:fn-strings koan))
      [:div {:class "functions"}
        (for [function (:fn-strings koan)]
          [:div {:class "function"}
            (for [text function]
              (if (= text :input)
                [:span {:class "code"}
                  [:span {:class "shadow"}]
                  [:input {:name "code"}]]
                [:pre {:class "text"} text]))])])])

(deftemplate error-message []
  [:div {:class "error"} "Свет впереди, но все еще далеко."])

(defn input-string []
  (letfn [(input-is-empty? [el] (clojure.string/blank? (.-value el)))
          (get-input-string [el]
            (cond (= "text" (.-className el)) ($/text ($ el))
                  (= "INPUT" (.-tagName el)) (.-value el)))]
    (if (some input-is-empty? ($ ".code-box input"))
      ""
      (->> (concat ($ ".functions .text, .functions input")
                   ($ ".code-box .text, .code-box input"))
           (map get-input-string)
           (clojure.string/join " ")))))

(defn load-next-koan []
  (update-location-hash))

(defn remove-active-koan []
  (let [$el ($ :.koan)]
    ($/fade-out $el
      #($/remove $el))))

(defn remove-static-pages []
  ($/fade-out ($ :.static)))

(defn category-name [koan-index]
  (let [category (:category koan-index)]
    (clojure.string/replace category "-" " ")))

(defn render-koan [koan]
  (remove-active-koan)
  (remove-static-pages)
  (let [$elem ($ (input-with-code koan))
        $category ($ :.category)
        current-category (category-name (current-koan-index))]
    (when-not (empty? (:fn-strings koan))
      ($/add-class $elem "has-functions"))
    (when (not (= ($/text $category) current-category))
      ($/fade-out $category))
    (wait fadeout-time (fn []
                        ($/text $category (:name koan))
                        ($/prepend ($ :body) $elem)
                        ($/fade-in $elem)
                        ($/fade-in $category)
                        (.focus (first ($/find $elem :input)))))))

(defn render-static-page [selector]
  (remove-active-koan)
  (let [$el ($ selector)
        $other ($ (first (clojure.set/difference #{"#welcome" "#the-end"} #{selector})))]
    ($/fade-out $other)
    (wait fadeout-time (fn []
                        ($/fade-out ($ :.category))
                        ($/fade-in $el)))))

(defn render-current-koan []
  (cond
    (clojure.string/blank? (.-hash js/location))
    (render-static-page "#welcome")
    (= (:category (current-koan-index)) "complete")
    (render-static-page "#the-end")
    (meditations/koan-exists? (current-koan-index))
    (let [current-koan (meditations/koan-for-index (current-koan-index))]
      (render-koan current-koan))
    :else
      (update-location-hash)))

(defn resize-input [input]
  (let [$input ($ input)
        remove-spaces (fn [text] (clojure.string/replace text " " "_"))
        $parent ($/parent $input)
        $shadow ($/find $parent :.shadow)]
    ($/text $shadow (remove-spaces ($/val $input)))
    (let [shadow-width ($/width $shadow)
          input-width ($/width $input)]
      (cond
        (>= shadow-width input-width)
        ($/width $input (+ shadow-width (* 4 char-width)))
        (>= (- input-width (* 4 char-width)) shadow-width)
        ($/width $input (+ shadow-width (* 4 char-width)))))))

(defn show-error-message []
  (let [$code-box ($ :.code-box)]
    (if ($/has-class $code-box "incorrect")
      (let [$error ($ :.error)]
        ($/remove-class $code-box "incorrect")
        ($/fade-out $error)
        (wait 300 #(
                    ($/add-class $code-box "incorrect")
                    ($/fade-in $error))))
      (let [$error ($ (error-message))]
        ($/add-class $code-box "incorrect")
        ($/after ($ :.code-box) $error)
        ($/fade-in $error)))))

(defonce compiler-state
  (cljs/empty-state))

(defn evaluate-koan []
  (let [input (input-string)]
    (cljs/eval-str compiler-state input nil
      {:eval cljs/js-eval}
      (fn [result]
        (if (or (:error result) (not= (:value result) true))
          (show-error-message)
          (load-next-koan))))))

(defn handle-document-ready []
  (let [$doc ($ js/document)]
    ($/on $doc :click :.text #(.focus (first ($ :input))))
    ($/on $doc :keypress :input #(when (= (.-which %) enter-key) (evaluate-koan)))
    ($/on $doc :input :input #(resize-input (.-target %))))
  (render-current-koan))

(defn init []
  ($/document-ready handle-document-ready)
  (set! (.-onhashchange js/window) render-current-koan)
  ;; initialize the cljs.user namespace so that def will actually work
  (cljs/eval compiler-state '(ns cljs.user) {:eval cljs/js-eval} identity))

(init)
