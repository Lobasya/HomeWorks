# Home work 5 (Constructors, OOP)

## Основные задания

### 1

Cоздать функцию-конструктор Customer. Создаем функцию которая будет пушить в новый массив cutomerInstancessArr экземпляры созданные через new Customer(customer). Данные лежат в массиве [arrOfUsers]((https://github.com/Lobasya/HomeWorks/blob/master/HW6/index.js)). У каждого созданного экзепляра должен быть уникальный id (cсоздаем в функции конструкторе)

```js

customer = {
    id: 342243,
    name: "Jaeden Hilll", // имя
    username: "Jocelyn.Strosin23", // login
    email: "Romaine.Mante@yahoo.com", 
    address: {streetA: "Herzog Glens", ... ,city: "South Emilio", …}, // аддрес проживания (может быть несколько)
    phone: "514-491-2099 x60392", // телефон
    website: "hoyt.info", // личный веб-сайт
    company: {
        name: "Kirlin Group", // имя компании в которой работает customer
        catchPhrase: "Virtual content-based complexity", // слоган компании
        bs: "customized iterate architectures" // каки услугу предоставляет комнапиня
    }, 
    posts: [
                {
                    words: "dignissimos sunt nemo", /// Заголовок
                    sentence: "Aliquam aspernatur consequatur voluptate voluptas a nemo occaecati." // краткое описание поста
                    sentences: "Consequatur corporis occaecati et id necessitatibus ea cupiditate. Quidem qui facere a inventore quaerat. Soluta dolor inventore fugiat facilis.", // полное описание поста
                    paragraph: "Provident ut ad et reiciendis eum. Voluptatem aliquam ea eaque repellat reiciendis minima. Et incidunt consequatur perferendis animi architecto harum. Quia enim velit aut. Quos veniam maiores odit blanditiis. Dolores amet et aliquid reprehenderit perspiciatis.", // полный текст поста
                }    
                {
                    words: "at porro sint", 
                    sentence: "Eos ...", 
                    ...
                }
    ],
    accountHistory: [±
        {
            amount: "354.15", /// цена платежа
            date: 'Thu Feb 02 2012 00:00:00 GMT+0200 (Восточная Европа, стандартное время)', // время платежа
            business: "Altenwerth, Prohaska and Shields", // организация снявшая деньги
            name: "Auto Loan Account 6717", // с какой карты сняли
            type: "invoice", // тип платежа
            account: "54015854", // id аккаунта который снял деньги
        }
    ], /// история платежей customer-а
}.

arrOfCustomers = [customer, customer ... ]

etc.
```

### 2

Создать функцию getAllNameSAndEmails который вернет массив с обьектами в которых должны находится имя и email кастомера.

```js

getAllNameSAndEmails() /// [{name: 'John', email: 'example@gmail.com'}, ...]

etc.
```

### 3

Создать функцию getAllCustomersIdsWithComDomain которая вернет массив с id кастомеров, у которых свойство
website имеет доменное имя первого уровня .com (site.com, james-site.com, harvik.com etc.)

```js

getAllCustomersWithComDomain() /// [3, 5, 12, 35 ...]

etc.
```

### 4

Создать функцию getAllGmailCustomers которая вернет массив с id кастомеров, у которых свойство
email имеет почтовый сервер gmail.com (alex@gmail.com, someHuman@gmail.com, etc.)

```js

getAllCustomersWithComDomain() /// [3, 5, 12, 35 ...]

etc.
```

### 5

Создать функцию sortByCompanyType которая вернет объект, в котором будут свойства, ключами которых будут типы компаний, а значением этих ключей id кастомеров в которых они работают 

```js

sortByCompanyType() // {
                    //     LLC: [1,4,5,6 ...],
                    //     GROUP: [3,4,7,12 ...]
                    //     Inc: [2,8,10 ...]
                    // }

etc.
```

## Дополнительные задания

### 6

Содать функцию которая вернет отсартированный массив кастомеров по их общим тратам (свойство accountHistory смотрим на amount). Сортировка по возрастанию.

### 7

Содать функцию которая вернет отсартированный массив кастомеров по их общим тратам (свойство accountHistory смотрим на amount). Сортировка по параметру функции. Параметров может быть 3 вида ('asc', 'desc').


``` js
sortByAcountHistory('asc') // отсортируем по возрастанию
sortByAcountHistory('desc') // отсортируем по убыванию

```



