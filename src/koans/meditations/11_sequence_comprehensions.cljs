(ns koans.meditations.sequence-comprehensions)

(def koans '(
             "Выражение последовательности присваивает новое значение локальному симлову на каждой итерации"
             (= :__
                (for [index (range 6)]
                  index))

             "С помощью таких выражений можно выразить отображение"
             (= '(0 1 4 9 16 25)
                (map (fn [index] (* index index))
                     (range 6))
                (for [index (range 6)]
                  :__))

             "И фильтрацию"
             (= '(1 3 5 7 9)
                (filter odd? (range 10))
                (for [index :__ :when (odd? index)]
                  index))

             "Эти трансформации легко комбинируются"
             (= '(1 9 25 49 81)
                (map (fn [index] (* index index))
                     (filter odd? (range 10)))
                (for [index (range 10) :when :__]
                  :__))

             "Более сложные трансформации имеют больше локальных символов"
             (= [[:top :left] [:top :middle] [:top :right]
                 [:middle :left] [:middle :middle] [:middle :right]
                 [:bottom :left] [:bottom :middle] [:bottom :right]]
                (for [row [:top :middle :bottom]
                      column [:left :middle :right]]
                  :__))))
