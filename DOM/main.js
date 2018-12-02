const button = document.getElementById('addTodo');
const input = document.getElementById('todoInput');
const ul = document.querySelector('ul');
const allLi = document.querySelectorAll('li');

button.addEventListener('click', () => {
  addTodo();
});

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
});

function addTodo() {
  if (input.value) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    addDone(li);
    addDelete(li);

    ul.appendChild(li);
    input.value = '';
  }
}

allLi.forEach(li => {
  addDone(li)
  addDelete(li);
});


function addDelete(li) {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode('delete'));
  li.appendChild(btn);
  btn.addEventListener('click', () => {
    li.remove();
  });
}

function addDone(li) {
  li.addEventListener('click', function () {
    this.classList.toggle('done');
  });
}