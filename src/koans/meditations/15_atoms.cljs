(ns koans.meditations.atoms)

(def koans '(
             "Атом — это ссылка на значения"
             "(= :__ (deref atomic-clock))"

             "Более удобный способ получения значения из атома"
             "(= :__ @atomic-clock)"

             "Значение можно изменить с помощью функции"
             "(= :__ (do
          (swap! atomic-clock inc)
          @atomic-clock))"

             "Попробуйте изменить значение"
             "(= 5 (do
         :__
         @atomic-clock))"

             "Для изменяющей функции можно задать дополнительные аргументы"
             "(= :__ (do
          (swap! atomic-clock + 1 2 3 4 5)
          @atomic-clock))"

             "Можно установить проверку текущего значения для изменения с условием"
             "(= :__ (do
          (compare-and-set! atomic-clock 100 :fin)
          @atomic-clock))"

             "Попробуйте установить правильную проверку"
             "(= :fin (do
            (compare-and-set! :__)
            @atomic-clock))"))


(def fns [
          '(def atomic-clock (atom 0))])
