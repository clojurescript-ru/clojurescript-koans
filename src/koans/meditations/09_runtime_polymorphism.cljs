(ns koans.meditations.runtime-polymorphism)

(def koans '(
             "Некоторые функции могут быть вызваны без аргументов"
             (= :__ (hello))

             "С одним аргументом"
             (= :__ (hello "world"))

             "Или с несколькими аргументами"
             (= :__
                (hello "Peter" "Paul" "Mary"))

             "Мультиметоды дают более сложный механизм диспетчеризации"
             (= "Bambi eats veggies."
                (diet {:species "deer" :name "Bambi" :age 1 :eater :herbivore}))

             "Функция-диспетчер возвращает значение по которому определяется необходимый метод"
             (= "Simba eats animals."
                (diet {:species "lion" :name "Simba" :age 1 :eater :carnivore}))

             "Если метод не найден, то будет вызван метод определенный как метод по умолачнию"
             (= "I don't know what Rich Hickey eats."
                (diet {:name "Rich Hickey"}))))


(def fns [
          "(defn hello
  ([] \"Hello World!\")
  ([a] (str \"Hello, you silly \" a \".\"))
  ([a & more] (str \"Hello to this group: \"
                   (apply str
                          (interpose \", \" (concat (list a) more)))
                   \"!\")))"
          "(defmulti diet (fn [x] (:eater x)))"
          "(defmethod diet :herbivore [a] :__)"
          "(defmethod diet :carnivore [a] :__)"
          "(defmethod diet :default [a] :__)"])
