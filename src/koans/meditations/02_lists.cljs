(ns koans.meditations.lists)

(def koans '(
             "Списки могут быть выражены функцией или кавычкой"
             (= '(:__) (list 1 2 3 4 5))

             "Списки — это последовательности, у них можно взять первый элемент"
             (= :__ (first '(1 2 3 4 5)))

             "И все остальные тоже"
             (= :__ (rest '(1 2 3 4 5)))

             "Посчитайте количество элементов в списке"
             (= :__ (count '(dracula dooku chocula)))

             "Перед тем, как они исчезнут"
             (= :__ (count '()))

             "Когда ничего нету, остаток пуст"
             (= :__ (rest '(100)))

             "Сущности можно добавлять в начало списка"
             (= :__ (cons :a '(:b :c :d :e)))

             "Эта операция работает точно так же"
             (= :__ (conj '(:b :c :d :e) :a))

             "Список можно использовать как стопку, забирая первый элемент"
             (= :__ (peek '(:a :b :c :d :e)))

             "Или все остальные"
             (= :__ (pop '(:a :b :c :d :e)))))

  ;; ---
  ;"But watch out if you try to pop nothing"
  ;(= :__ (try
  ;        (pop '())
  ;        (catch IllegalStateException e
  ;          "No dice!")))

  ;"The rest of nothing isn't so strict"
  ;(= :__ (try
  ;        (rest '())
  ;        (catch IllegalStateException e
  ;          "No dice!")))
  ;))
