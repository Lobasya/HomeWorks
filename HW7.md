# Home work 7 (Classes, OOP)

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
* course - курс на котором я учусь

Id генерируется автоматически при создании экземпляра CreateStudent. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, 
то студент может быть на бютжете, но бютжет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бютжете 
не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бютжетников то мы присваиваем isSelfPayment = false.
И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бютжетников, с нашим включительно, то ему 
делаем isSelfPayment = true, то есть переводим этого неудачника на контракт.
Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борятся за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бютжете. 

```js

const studentsArr = [... массив лежащий в папке HW5].

class CreateStudent{
    ... Your code
}; 

const sudentObj = new CreateStudent(studentsArr[0]) /// { id: 0,  name: 'Valeriy', surname: 'Zhmishenko', ratingPoint: 1500, schoolPoint: 1200, isSelfPayment: false, course: 2}

const setAllCreatedStudentsByConstructor = arrOfStudents => {
    ... Your code
}

const newStudentsArr = setAllCreatedStudentsByConstructor(studentsArr) /// [{ id: 0,  name: 'Valeriy', surname: 'Zhmishenko', ratingPoint: 1500, schoolPoint: 1200, isSelfPayment: false, course: 2} ...]

etc.
```

### 2

Добавить в класс Student метод, который выдаст информацию о студенте.
Структура строки с информацией должна выглядь как в примере ниже.

``` js

student.getFullInfo() /// 'Я - Valeriy Zmishenko,  рейтинговый балл - 1500, форма обучения - бютжет'.

```

### 3
Создать метод который выдаст вам место в рейтинге студентов согласно успеваемости. Расчет ведем по свойству ratingPoint.
То есть сортируете studentsArr по убыванию ratingPoint (от большего к меньшему). И ищете свой index + 1 (отсчет индексов с нуля потому что) в полученном массиве.

```js
student.getRankedPlace() /// 3
```

### 4
Создать новый класс Intern который будет населдовать Student (помним про super(params)).
У класса Intern должно быть свойство companyName, значение которого вы передадите параметром и все свойства Student.

```js
const intern = new Intern(student, 'Google').
```

### 5
5.Добавить классу Intern метод getFullInternInfo(), который выдаст полную инфу о студенте, как например ( ВО-ВТОРОМ ЗАДАНИИ ) и
добавит к этой информации название компании.

```js
intern.getFullInternInfo() /// Я - Valeriy Zmishenko,  рейтинговый балл - 1500, форма обучения - бютжет, интрен в компании Google.
```

## Доп. Ззадания

### 6
Создать в Intern геттер и сеттер с именем currentCourse (get currentCourse, set currentCourse). Когда вы используете геттер, то вы должны получить курс на котором вы учитесь в данный момент ( пробуем new Date().getYear() и смотрим на свойство course ). Когда вы используете сеттер, вы передаете число - курс который вы хотите перезаписать. Логика должна принять это число и сравнить с настоящим годом ( пробуем new Date().getYear() ). 
Потом данный сеттер должен записать startYear и endYear, а если их нет, то создать их согласно вашим вычислениям в сетере.
Минимальный курс - 1, максимальный курс - 4

```js
intern.currentCourse /// 1
intern.currentCourse = 3 
```