(ns koans.meditations.creating-functions)

(def koans '(
             "Создание противоположной предикаты с помощью отрицания"
             (= [:__] (let [not-a-symbol? (complement symbol?)]
                           (map not-a-symbol? [:a 'b "c"])))

             "Создайте предикату с помощью функции отрицания"
             (= [:wheat "wheat" 'wheat]
                (let [not-nil? :__]
                  (filter not-nil? [nil :wheat nil "wheat" nil 'wheat nil])))

             "Частичное применение создает функцию с частью переданынх в нее аргументов"
             (= 20 (let [multiply-by-5 (partial * 5)]
                     (:__)))

             "Используйте частично примененную функцию конкатенации векторов"
             (= [:__]
                (let [ab-adder (partial concat [:a :b])]
                  (ab-adder [:__])))

             "Несколько функций могут быть выражены одной функцией через их композицию"
             (= 25 (let [inc-and-square (comp square inc)]
                     (inc-and-square :__)))

             "Каков правильный ответ?"
             (= :__ (let [double-dec (comp dec dec)]
                     (double-dec 10)))

             "В композиции важен порядок функций"
             (= 99 (let [square-and-dec :__]
                     (square-and-dec 10)))))


(def fns [
          '(defn square [x] (* x x))])
