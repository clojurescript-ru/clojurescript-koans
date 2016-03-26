(ns koans.meditations
  (:require
    [clojure.string]
    [koans.utils :as utils]
    [koans.meditations.equality :as equality]
    [koans.meditations.lists :as lists]
    [koans.meditations.vectors :as vectors]
    [koans.meditations.sets :as sets]
    [koans.meditations.maps :as maps]
    [koans.meditations.functions :as functions]
    [koans.meditations.conditionals :as conditionals]
    [koans.meditations.higher-order-functions :as higher-order-functions]
    [koans.meditations.runtime-polymorphism :as runtime-polymorphism]
    [koans.meditations.lazy-sequences :as lazy-sequences]
    [koans.meditations.sequence-comprehensions :as sequence-comprehensions]
    [koans.meditations.creating-functions :as creating-functions]
    ;[koans.meditations.recursion :as recursion]
    [koans.meditations.destructuring :as destructuring]
    [koans.meditations.atoms :as atoms]
    [koans.meditations.datatypes :as datatypes]
    [koans.meditations.partition :as partition]))

(defrecord Koan [name description code-strings fn-strings])
(defrecord KoanIndex [category index])
(defrecord Category [name link koans fns])

(def categories [
                 (Category. "равенство" "equality" equality/koans)
                 (Category. "списки" "lists" lists/koans)
                 (Category. "векторы" "vectors" vectors/koans)
                 (Category. "множества" "sets" sets/koans)
                 (Category. "словари" "maps" maps/koans)
                 (Category. "функции" "functions" functions/koans functions/fns)
                 (Category. "условия" "conditionals" conditionals/koans conditionals/fns)
                 (Category. "функции высшего порядка" "higher-order-functions" higher-order-functions/koans)
                 (Category. "полиморфизм" "runtime-polymorphism" runtime-polymorphism/koans runtime-polymorphism/fns)
                 (Category. "ленивые последовательности" "lazy-sequences" lazy-sequences/koans)
                 (Category. "выражения последовательностей" "sequence-comprehensions" sequence-comprehensions/koans)
                 (Category. "создание функций" "creating-functions" creating-functions/koans creating-functions/fns)
                 (Category. "деструктуризация" "destructuring" destructuring/koans destructuring/fns)
                 (Category. "атомы" "atoms" atoms/koans atoms/fns)
                ;(Category. "дататипы" "datatypes" datatypes/koans datatypes/fns)
                 (Category. "разделение" "partition" partition/koans)
                 (Category. "готово" "complete" '(:the :end))])


(defn category-from-koan-index [koan-index]
  (first (filter #(= (:link %) (:category koan-index)) categories)))

(defn koan-exists? [koan-index]
  (< (:index koan-index) (count (partition 2 (:koans (category-from-koan-index koan-index))))))

(defn next-category [koan-index]
  (let [index (inc (utils/index-of (category-from-koan-index koan-index) categories))]
    (:link (nth categories index))))

(defn expr-to-string [expr]
  (if (string? expr)
    expr
    (clojure.string/replace (pr-str expr) #"\(quote (.*?)\)" #(str "'" (%1 1)))))

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (cond
      (koan-exists? next-in-category)
      next-in-category
      (nil? (category-from-koan-index koan))
      (KoanIndex. "equality" 0)
      (js/isNaN (:index next-in-category))
      (KoanIndex. (:category koan) 0)
      :else
        (KoanIndex. (next-category koan) 0))))

(defn expr-to-array [expr]
  (let [full-text (expr-to-string expr)
        splitted (clojure.string/split full-text #":__")]
    (apply concat (map (fn [text]
                        (if (= text (last splitted))
                          [text]
                          [text :input]))
                   splitted))))

(defn koan-for-index [koan-index]
  (let [category (category-from-koan-index koan-index)
        category-list (partition 2 (:koans category))
        item (try
              (nth category-list (:index koan-index))
              (catch js/Object _ (first category-list)))
        description (first item)
        code-strings (expr-to-array (last item))
        fn-strings (map #(expr-to-array %) (:fns category))]
    (Koan. (:name category) description code-strings fn-strings)))
