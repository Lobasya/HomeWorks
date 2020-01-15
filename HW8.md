# Home work 8 (Clousers, Lexical Environment, getters and setters)

## Основные задания

### 1

Напиши функцию, которая принимает 1 параметр.
При первом вызове, она его запоминает, при втором,-  суммирует переданый параметр с тем, что передали первый раз и тд

```js
counter(3) // 3
counter(5) // 8
counter(228) // 236
etc.
```

### 2

Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию.
Но если мы ничего не передадим в параметрах, то массив очистится.

```js

getUpdatedArr(3) // [3]
getUpdatedArr(5) // [3, 5]
getUpdatedArr({name: 'Vasya'}) // [3, 5, {}]
getUpdatedArr() // []
getUpdatedArr(4) // [4]

etc.

etc.
```

### 3

Создать класс Room. В нем есть свойство, это kidsArr - массив с объектами типа Kid.
* Создать новый массив в котором будут находится все экземпляры Kid созданные с помощью обьекта в [kidsArr](https://github.com/Lobasya/HomeWorks/blob/master/HW8/kidsArr.js).

Вся логика в Room.
* Создать геттер - kidsCount, который получит количество детей в комнате.
* Создать геттер - femaleCount, который получит количество детей женского пола.
* Создать геттер - maleCount, который получит количество детей мужского пола.
* Создать геттер - lastKid, вернет последнего ребенка в свойстве - массиве kidsArr
* Создать сеттер - lastKid, который добавит новый экземпляр Kid в свойство класса Room - kidsArr созданыый с помощью класса Kid.



```js

class Kid{
    constructor({name, age, gender}){
        this.id = // генерируем id
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Room{
    constructor(kidsArr, roomNumber){
        this.kidsArr = kidsArr;
        this.roomNumber = roomNumber;
    }
}

const room = new Room(kidArr[1], 101)
room.kidsCount // 4
room.femaleCount // 1
room.maleCount // 3
room.lastKid  // Kid { id: 4, name: 'Mitya', age: 8, gender: 'male' }
room.lastKid = { name: 'Kolya', age: 9, gender: 'male' } // Kid { id: 5, name: 'Kolya', age: 9, gender: 'male' }
room.lastKid  // Kid { id: 5, name: 'Kolya', age: 9, gender: 'male' }
room.kidsCount // 5

etc.
```


## Дополнительные задания

### 4

Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним.
Вызываем первый раз, то ретерним строку 'Enabled'

``` js
// Запускаем первый раз
getTime() // 'Enabled'
// Запускаем через 2 сек
getTime() // 2
// Запускаем через 3 сек
getTime() // 3
// Запускаем через 7 сек
getTime() // 7
// Запускаем через 60 сек
getTime() // 60
// Запускаем через 1 сек
getTime() // 1


```




### Литература

* [Замыкания](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)



