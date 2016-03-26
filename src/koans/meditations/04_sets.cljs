(ns koans.meditations.sets)

(def koans '(
             "Создать множество можно из другой коллекции"
             (= #{3} (set :__))

             "Вычисление количества элементов работает так же, как и в других коллекциях"
             (= :__ (count #{1 2 3}))

             "Помните о том, что множество является *математическим* множеством"
             (= :__ (set '(1 1 2 2 3 3 4 4 5 5)))

             #_(
                "You can ask clojure for the union of two sets"
                (= :__ (clojoure.set/union #{1 2 3 4} #{2 3 5}))

                "And also the intersection"
                (= :__ (clojure.set/intersection #{1 2 3 4} #{2 3 5}))

                "But don't forget about the difference"
                (= :__ (clojure.set/difference #{1 2 3 4 5} #{2 3 5})))))
