# Home work 9 (Objects and Arrays methods)

## Основные задания

### 1

Создайте класс Condidate который будет принимать параметром объект из массива [condidateArr](https://github.com/Lobasya/HomeWorks/blob/master/HW9/condidateArr.js). Добавить геттер state который вернет шатат в котором живает наш кондидат. Информация о штате находится в свойстве address и это 
третья запись после запятой. свойства передаем с помощью Object.assign

```js
const condidate = new Condidate(condidateArr[0])
condidate.state /// Colorado
etc.
```

### 2

Форматировать у каждого экзепляра Condidate registered, так что бы оно было представленно в виде js данных [Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date). Что бы это получилось нам первоначально нужно отформатировать строку так, что бы удалитm из строки 
правую часть после пробела. Было "registered": "2017-04-08T05:13:17 -03:00" стало "registered": "2017-04-08T05:13:17".
Подсказка [split](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split).
[new Date(condidate.registered)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js

const condidate = new Condidate(condidateArr[0])
condidate.registered /// Sun Oct 08 2017 11:36:03 GMT+0300 (Eastern European Summer Time)
etc.

etc.
```

### 3

Создать функцию которая будет удалять людей из массива [condidateArr](https://github.com/Lobasya/HomeWorks/blob/master/HW9/condidateArr.js) 
по индексу, который мы передадим параметром. [split](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(1)
console.log(arr) /// ['Vasya', 'Alexey']

etc.
```

### 4

Создать геттер allFriends, котрый вернет строкой имена всех друзей, но без фамилии. Используем [join](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [split](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
const condidate = new Condidate(condidateArr[0])
condidate.allFriends /// 'Vasya, Petya ...'

etc.
```

### 5

Создать функцию которая вернет все ключи обьекта переданного параметром

```js
const obj = { name: 'Vasya', age: 1}
getAllKeys(condidateArr[0]) /// ["_id", "index", "guid", "isActive", "balance", "picture", "age", "eyeColor", "name", "gender", "company", "email", "phone", "address", "about", "registered", "latitude", "longitude", "tags", "friends", "greeting", "favoriteFruit"]

etc.
```

### 6

Создать функцию которая вернет все значения обьекта переданного параметром

```js

getAllValues(condidateArr[0]) /// ["5e216bc9a6059760578aefa4", 0, "e325a387-e1f4-4c1a-8df8-f188b06e3a2a", true, "$3,365.14", "http://placehold.it/32x32", 34, "brown", "Bernice Walton", "female", "EZENT", "bernicewalton@ezent.com", ... ]
etc.
```

### 5

Создать геттер addressInfo, котрый вернет объектом информацию об адресе кондидата.

```js
const condidate = new Condidate(condidateArr[0])
condidate.addressInfo /// {
                        //  street: 229 Granite Street,
                        //  city: Durham,
                        //  state: Colorado,
                        //  postalCode: 6084,
                        // }

etc.
```

## Дополнительные задания

### 8

Содать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата созданного через конструктор Condidate на основе данных из первого параметра в массив перед кондидатом у которого id равно тому что передали в параметре


``` js
const obj = {
    id: 3,
    name: 'Vasya'
}
const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];
insertIntoarr(obj, 2)
console.log(arr) /// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]


```


### Литература

* [Objects меттоды](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [Arrays меттоды](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)



