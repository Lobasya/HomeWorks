# Home work 4 (Function Constructors, OOP)

## Основные задания

### 1

Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee 
из массива emplyeeArr в [employees.js](https://github.com/Lobasya/HomeWorks/blob/master/HW4/employees.js);

```js

const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
//   {
//     id: 0,
//     name: 'Valeriy',
//     surname: 'Zhmishenko',
//     salary: 1000, 
//     workExperience: 10, 
//     isPrivileges: true, 
//     gender: 'male',
//     }

etc.
```

### 2
Добавить функции - конструктору метод (помним про [prototype](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)):
getFullName который вернет полное имя начиная с фамилии в виде строки

```js

employeeObj.getFullName() // 'Zhmishenko Valeriy';

```

### 3
Создать новый массив emplyeeArr в котором будут содержаться те же обьекты, 
но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.

```js
let createEmployesFromArr = (arr) => {
    .... Your code
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]

```

### 4
Создать функцию которая вернет массив со всеми полными именами каждого employee,
содержащегося в emplyeeConstructArr;

``` js
       const getFullNamesFromArr = (arr) => {
              ... Your code
       }
       
       getFullNamesFromArr(emplyeeConstructArr) /// ['Денис Хрущ', 'Сергей Войлов', ... ]
```

### 5

Создать функцию которая вернет среднее значение зарплаты всех employee

``` js
       const getMiddleSalary = (arr) => {
              ... Your code
       }
       
       getMiddleSalary(emplyeeConstructArr) /// 1560

```

## Доп. задания

### 6

Создать функцию которая выберет рандомного работника из массива emplyeeConstructArr. Вы должны учитывать в функции
длинну массива, так как если работников 7, а рандомное число будет равно больше 7, 
то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. 
Подсказка [Math.random](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random);

``` js
       const getRandomNumber = (maxRandom) => {
        const randomNumber = получаем рандомное число с помощью Math.random()
        if (randomNumber > maxRandom) {
            getRandomNumber(maxRandom);
        } else {
            return randomNumber;
        }

        const getRandomEmployee = (arr) => {
            ... Your code
        }

        getRandomEmployee(emplyeeConstructArr) /// {id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }

}
```

# Литература

* [Конструкторы и создание объектов Learn JavaScript](https://learn.javascript.ru/constructor-new)

* [Методы объектов и this Learn JavaScript](https://learn.javascript.ru/object-methods)


