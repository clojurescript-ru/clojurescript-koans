(ns koans.meditations.destructuring)

(def koans '(
             "Деструктуризация похожа на арбитра: она разбивает аргументы"
             (= :__ ((fn [[a b]] (str b a))
                     [:foo :bar]))

             "Будь то аргументы функции"
             (= (str "First comes love, "
                     "then comes marriage, "
                     "then comes Clojure with the baby carriage")
                ((fn [[a b c]] :__)
                 ["love" "marriage" "Clojure"]))

             "Или в выражениях let"
             (= "Rich Hickey aka The Clojurer aka Go Time aka Macro Killah"
                (let [[first-name last-name & aliases]
                      (list "Rich" "Hickey" "The Clojurer" "Go Time" "Macro Killah")]
                  :__))

             "При деструктуризации возможно сохранить аргумент целиком"
             (= {:original-parts ["Stephen" "Hawking"] :named-parts {:first "Stephen" :last "Hawking"}}
                (let [[first-name last-name :as full-name] ["Stephen" "Hawking"]]
                  :__))

             "Словари деструктурируются по ключам"
             (= "123 Test Lane, Testerville, TX"
                (let [{street-address :street-address, city :city, state :state} test-address]
                  :__))

             "Более кратко"
             (= "123 Test Lane, Testerville, TX"
              (let [{:keys [street-address :__]} test-address]
                :__))

             "Повторим все вместе!"
             (= "Test Testerson, 123 Test Lane, Testerville, TX"
                (:__ ["Test" "Testerson"] test-address))))

(def fns [
          "(def test-address
  {:street-address \"123 Test Lane\"
   :city \"Testerville\"
   :state \"TX\"})"])
