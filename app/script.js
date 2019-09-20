const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

const match = 'Apple';
const newItem = 'Only'.concat(' ', match);
const index = fruits.findIndex(item => item === match);

fruits.splice(index, 1, newItem);

const list = document.createElement('ol');

fruits.forEach(function(fruit){
    const li = document.createElement('li');
    li.textContent = fruit;
    list.appendChild(li);
});

const app = document.querySelector('#app');
app.appendChild(list);