# Pizza on React

![Пример макета](https://github.com/Lobasya/HomeWorks/blob/master/Final/f.png)

### Создать SPA Pizza Store. Стараемся использовать компоненты переиспользуемыми.

У вас должно быть 3 роута:
* / - контейнер с пиццами (screen 1)
* /cart - контейнер с корзиной (screen 2)
* /create - контейнер с возможностью создать пиццу.

Про роутинг и React Router читаем ниже:
* [Метанит](https://metanit.com/web/react/4.1.php)
* [Статья с Хабра про React router](https://habr.com/ru/post/329996/)

### Context и useDispatch

Ваше приложение должно использовать контекст и состояние. Каждый раз когда вы через dispatch добавляете новую пиццу, 
я бы вам советовал перед ретерном стейта в редьюсере записывать в localStorage стейт обновленный. А при инициализации useReducer,а точнее его initialState брать данные из localStorage. Так же советовал бы вам использовать сервис - создание пиццы. Это класс в который мы отправляем имя и id пицц, а потом он экземпляром возвращает собранную пиццу. Используем этот сервис в createPizzaAction (например).

Example

```js
//When create initial state
const initialState = {
    pizzas: JSON.parse(localStorage('pizzas')),
    ... some other state properties,
}

//When dispatch new pizza
const createPizzaAction = (pizzaName, arrOfComposIds) => {
    const pizza = new Pizza(pizzaName, arrOfComposIds);
    return {type: 'ADD_PIZZA', payload: pizza};
}

dispatch(createPizzaAction('Тоскана', [1,2,4,6]));

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_PIZZA':
            const newPizzaArr = [...state.pizzas, action.payload];
            localStorage.setItem(JSON.stringify(newPizzaArr))
            return {
                ...state,
                pizzas: newPizzaArr
            }
    }
}
```

Старайтесь не юзать часто диспач стейта. Так же продолжаем юзать useState, useEffect. Например для сортировок и фильтраций.
Помните про разбитие кода на сервисы. Используйте сохранение в localStorage и взятие оттуда данных в сервисе. Сделайте максимальное количство выполнения этого дз, так как я вам с ним помогу в сб.

P.S. GLGF


