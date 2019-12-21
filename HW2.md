# Home work 2 (Operators, Comparison, If else)

## Основные задания

### 1

Cоздать функцию, которая выведет в консоль приветствие.
В приветствии Используем свое имя (вводим через [prompt](https://learn.javascript.ru/uibasic#prompt))
Преветствие будет отличаться в зависимости от времени суток.
Например: "Доброе утро, Вася", "Добрый день, Вася", "Дорый вечер, Вася",
"Доброй ночи, Вася".
Утро начинается в 6 часов и заканчивается в 12, День начинается после 12 и заканчивается в 18, вечер начинается после 18 и заканчивается в 24 и 
ночь соответственно после 0 и до 6.
Время указываем как число не включая минуты (23:00 пишем как 23).
Если время указанно числом большим чам 24, то в консоль пишем ошибку, что время 
некорректно. 

```js
const sayHi = (time) => {
       ... Your code
};
sayHi(6) /// Доброе утро, Вася
sayHi(11) /// Доброе утро, Вася
sayHi(13) /// Добрый день, Вася
sayHi(22) /// Добрый вечер, Вася

etc.
```

### 2
Создать функцию, которая будет принимать параметрами email и password.
Если Они будут совпадать с теми, что у вас в переменных, то выводить в консоль
"Access successful", иначе "Access denied". 

```js
let email = 'Qwerty@gmail.com'
let password = 'Qwe123'

checkIsUserValid('qwerty@mail.com', 'Qwe123') // "Access denied"
checkIsUserValid('Qwerty@gmail.com', 'Qwe123') // "Access successful"

```

### 3
Создать функцию, которая выведет в консоль четное ли число или нет.
Используем [остаток от деления](https://learn.javascript.ru/operators#ostatok-ot-deleniya)

```js
let checkEvenOrOdd = (number) => {
    .... Your code
};
checkEvenOrOdd(6) // Number 6 is Even
checkEvenOrOdd(15) // Number 15 is Odd

```

## Доп. задания

### 4

Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры. Этажей у нас 9, квартир на этаже по 3.
Подсказка: [остаток от деления](https://learn.javascript.ru/operators#ostatok-ot-deleniya)

``` js
       const getPorchAndFloor = (number) => {
              ... Your code
       }
       
       getPorchAndFloor(312) // Этаж: 5, подъезд: 12
```

# Литература

* [Операторы Learn JavaScript](https://learn.javascript.ru/operators)

* [Операторы сравнения Learn JavaScript](https://learn.javascript.ru/comparison)

* [Оператор if,else Learn JavaScript](https://learn.javascript.ru/ifelse)
