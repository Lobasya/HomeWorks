# Home work 3 (Object, Array, For lopos)

## Основные задания

Все данные с пиццами содержатся в [pizzaList.js](https://github.com/Lobasya/HomeWorks/blob/master/HW3/pizzaList.js)

### 1

Создать функцию, которая вернет массив с названиями пицц.

```js
const getPizzasNames = () => {
       ... Your code
};
getPizzasNames() /// ['Супер гриль', 'Маргарита' и т.д.]

etc.
```

### 2
Создать функцию, которая вернет обьект с пиццей по id.

```js
const getPizzaById = id => {
       ... Your code
};

getPizzaById(2) /// {id: 2, img: "2.jpg", name: "Маргарита"};

```

### 3
Создать функцию, которая вернет массив с пиццами 
в которых содержится ингридиент указанный в параметре функции.

```js
let getPizzasByComposition = (number) => {
    .... Your code
};

getPizzasByComposition('моцарелла') /// [{id: 2, img: "2.jpg", name: "Маргарита", composition:['моцарелла', ...]}, ...];

```

### 4
Создать функцию, которая вернет массив с пиццами 
в которых каллории больше чем maxCaloricity.

```js
const maxCaloricity = 1100;

const getPizzasByCalloricity = caloricity => {
    .... Your code
};

getPizzasByCalloricity(maxCaloricity) /// [{id: 2,name: "Маргарита", caloricity: 1200, ...]}, ...];

```

### 5
Создать функцию, которая вернет массив со всеми пиццами, кроме пиццы с указанным id.

```js

const getAllWithoutPizzaById = id => {
    .... Your code
};

getAllWithoutPizzaById(2) /// [{id: 3,name: "Маргарита", caloricity: 1200, ...]}, ...];

```

### 6
Создать функцию, которая вернет массив со всеми пиццами,
у которых кол-во ингридиентов (compositions) больше чем maxCompositions.

```js
const maxCompositions = 6;

const sortByMaxCompositions = compositions => {
    .... Your code
};

sortByMaxCompositions(maxCompositions) /// [{id: 2,name: "Маргарита", caloricity: 1200, ...]}, ...];

```

Все задания выполняем только с использованием цикла for.

## Доп. задания

### 4

Все задания выполнить с помощью методов находящихся в [Array methods](https://learn.javascript.ru/array-methods).

# Литература
* [Объекты Learn JavaScript](https://learn.javascript.ru/object)

* [Массивы Learn JavaScript](https://learn.javascript.ru/array)

* [for Learn JavaScript](https://learn.javascript.ru/while-for#tsikl-for)

* [for MDN Mozilla](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for)

* [for ...in MDN Mozilla](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in)

* [for ...of MDN Mozilla](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

