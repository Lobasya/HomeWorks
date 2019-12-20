# Home work 1 (Data types)

## Основные задания

### 1

Cоздать переменные со всеми возможными типами данных.


```js
let count = 10;
const catName = 'Murzik';
let isMyCat = false;
etc.
```

### 2
Создать обьект который будет описывать любой предмет или сущность.
    Указать минимум 10 свойств описуемого обьекта.
    Свойства должны охватывать все типы данных.
    Если это авто, то обьект может содержать свойста: name, price, manufacture and etc.

```js
let vehicle = {
       name: 'Q6',
       price: 10000,
       manufacture: 'Audi',
       wheelsCount: 4,
       isNew: true,
}
```

### 3
Создать функцию, которая выведет все свойства созданного обьекта в консоль. (Не забываем, что функции надо вызывать)

```js
let getVehcleAttributes = () => {
    .... Your code
};
getVehcleAttributes()
```

## Доп. задания

### 4

Добавить к созданному обьекту (см. задание 1) новые свойства, которые будут являться функцией.
Данная функция будет возвращать строку со всеми свойствами и значениями обьекта.

``` js
vehicle.getVehcleAttributes()   //  'Name: Q6, price: 10000, manufacture: Audi, wheels count: 4 .....'
```

### 5

Создать массив в котором будут находиться обьекты похожие на ваш. 
То есть свойства будут одинаковыми, но значения разными.
Обьектов должно быть минимум 5.
Создать функцию которая будет возвращать обьект по индуксу переданному параметром функции.

``` js
const arr = [
       {
        name: 'Q6',
        price: 10000,
        manufacture: 'Audi',
        wheelsCount: 4,
        isNew: true,
       },
       {
        name: 'Vesta',
        price: 50000,
        manufacture: 'Lada',
        wheelsCount: 4,
        isNew: false,
       },
]

const getCarByIndex = (index) => {
       ... Your code
      }

getCarByIndex(1) ////  { name: 'Vesta', price: 50000, manufacture: 'Lada', wheelsCount: 4,  isNew: false, }

```

# Литература

* [Типы данных Mozila MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
* [Типы данных Learn JavaScript](https://learn.javascript.ru/data-types)

* [Функции Learn JavaScript](https://learn.javascript.ru/function-basics)