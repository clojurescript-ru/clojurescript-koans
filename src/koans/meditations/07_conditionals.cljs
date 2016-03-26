(ns koans.meditations.conditionals)

(def koans '(
             "Вам предстоит принимать решения"
             (= :__ (if (false? (= 4 5))
                     :a
                     :b))

             "У некоторых из них нет альтернатив"
             (= :__ (if (> 4 3)
                     []))

             "В таких ситуациях вы получите ничего"
             (= :__ (if (nil? 0)
                     [:a :b :c]))

             "В других альтернатива возможна"
             (= :glory (if (not (empty? ()))
                         :doom
                         :__))

             "Вы можете иметь множество возможных путей"
             (let [x 5]
               (= :your-road (cond (= x :__) :road-not-taken
                                   (= x :__) :another-road-not-taken
                                   :else :__)))

             "Путей может быть много, но источник условия только один"
             (= :sirens
                (explain-defcon-level :__))

             "В таких случаях альтернатива есть всегда"
             (= :__
                (explain-defcon-level :yo-mama))))


(def fns [
          "(defn explain-defcon-level [exercise-term]
     (case exercise-term
           :fade-out          :you-and-what-army
           :double-take       :call-me-when-its-important
           :round-house       :o-rly
           :fast-pace         :thats-pretty-bad
           :cocked-pistol     :sirens
           :say-what?))"])
