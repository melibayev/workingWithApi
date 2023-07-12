const todoRow = document.querySelector('.todo')
let todoTitle = document.querySelector('.todo__title')
function getTodo({title, completed}){
    return `
    <div class="todo__card">
        <h3>${title}</h3>
        <p>${completed ? '<i class="fa-solid fa-check green"></i>' : '<i class="fa-sharp fa-solid fa-xmark red"></i>'}</p>
    </div>
    `
}

getDatas(userid).then(() => {
    console.log(todos);
    todos.map((el) => {
        let card = getTodo(el);
        todoRow.innerHTML += card;
    });
    todoTitle.style.display = 'block'
    loader.style = `opacity: 0;
    z-index: -1;
    display: none`
    document.body.style = `display: block;`
})