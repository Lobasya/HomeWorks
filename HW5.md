# Home work 5 (Constructors, OOP)

## Основные задания

### 1

Задача - создать функцию-конструктор CreateStudent. Создаем функцию которая будет пушить в новый массив экземпляры созданные через CreateStudent.
У экземпляра CreateStudent должны быть поля:
* id - уникальный идентификатор студента (генериться при создании экземпляра);
* name - имя студента (берем из обьекта в массиве [studentsArr](https://github.com/Lobasya/HomeWorks/blob/master/HW5/studentsArr.js));
* surname - фамилия студента (берем из обьекта в массиве [studentsArr](https://github.com/Lobasya/HomeWorks/blob/master/HW5/studentsArr.js));
* ratingPoint - рейтинг студента по результатам вступительных экзаменов (берем из обьекта в массиве [studentsArr](https://github.com/Lobasya/HomeWorks/blob/master/HW5/studentsArr.js));
* schoolPoint - рейтинг студента по результатам ЗНО (берем из обьекта в массиве [studentsArr](https://github.com/Lobasya/HomeWorks/blob/master/HW5/studentsArr.js));
* isSelfPayment - если true, то студент на контракте, если false, то на бютжете (генерируется по логике указанной ниже).

Id генерируется автоматически при создании экземпляра CreateStudent. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, 
то студент может быть на бютжете, но бютжет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бютжете 
не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бютжетников то мы присваиваем isSelfPayment = false.
И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бютжетников, с нашим включительно, то ему 
делаем isSelfPayment = true, то есть переводим этого неудачника на контракт.
Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борятся за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бютжете. 

```js

const studentsArr = [... массив лежащий в папке HW5].

function CreateStudent(student) {
    ... Your code
}; 

const sudentObj = new CreateStudent(studentsArr[0]) /// 

const setAllCreatedStudentsByConstructor = arrOfStudents => {
    ... Your code
}

const newStudentsArr = setAllCreatedStudentsByConstructor(studentsArr) /// [{ id: 0,  name: 'Valeriy', surname: 'Zhmishenko', ratingPoint: 1500, schoolPoint: 1200, isSelfPayment: false, } ...]

etc.
```

## Дополнительные задания

### 2

Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

``` js
const myString = new CustomString();

myString.reverse('qwerty'); //выведет 'ytrewq'
myString.ucFirst('qwerty'); //выведет 'Qwerty'
myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty

```
### 3

Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод checkIsEmail параметром принимает строку и проверяет, является ли она емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод checkIsDomain для проверки домена, метод checkIsDate для проверки даты и метод checkIsPhone для проверки телефона:

``` js
var validator = new Validator();

validator.checkIsEmail('vasya.pupkin@gmail.com'); // true
validator.checkIsDomain('google.com'); // true
validator.checkIsDate('30.11.2019'); // true
validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false

```


# Литература

* [Конструкторы и создание объектов Learn JavaScript](https://learn.javascript.ru/constructor-new)

* [Методы объектов и this Learn JavaScript](https://learn.javascript.ru/object-methods)


