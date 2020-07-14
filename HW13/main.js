const renderCard = item => {
    const card = document.createElement('div');
    card.className = 'card'
    const button = document.createElement('button');
    button.innerText = 'Купить';
    button.onclick = function() {
        console.log(item)
    }
    card.innerHTML = `
        <img src="${item.img}s" alt="">
        <h1>Название: ${item.name}</h1>
        <p>Цена: ${item.price}</p>
        <p>Каллории: ${item.caloricity}</p>
    `;
    card.appendChild(button)
    return card;
}


const renderCards = data => {
    document.querySelector('.container').innerHTML = '';
    data.forEach(item => {
        const card = renderCard(item);
        document.querySelector('.container').appendChild(card)
    })
}

renderCards(pizzaList)

const serachPizzas = () => {
    const value = document.getElementById('search').value;
    const result = pizzaList.filter(pizza => {
        return pizza.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    renderCards(result)
}

document.getElementById('search').oninput = serachPizzas;