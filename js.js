let $ = document
let inputElem = $.querySelector('input')
let addTodoForm = $.querySelector('.add')
let ulElem = $.querySelector('.todos')

function addNewTodo(newTodoValue){
    let newTodoLi = $.createElement('li')
    newTodoLi.className = "list-item"

    let newTodoTitleSpan = $.createElement('span')
    newTodoTitleSpan.innerHTML = newTodoValue
    
    let newTodoTrash = $.createElement('i')
    newTodoTrash.className = 'fa fa-trash-o delete'
    newTodoTrash.addEventListener('click',function(event){
        event.target.parentElement.remove()
    })
    
    ulElem.append(newTodoLi)
    newTodoLi.append(newTodoTitleSpan,newTodoTrash)
    console.log(newTodoLi)
}


addTodoForm.addEventListener('submit', function(event){
    event.preventDefault()
})

inputElem.addEventListener('keydown',function(event){
    let newTodoValue = event.target.value.trim();
    // console.log(newTodoValue)
    if (event.keyCode === 13){
        if (newTodoValue){
            inputElem.value = ''
            addNewTodo(newTodoValue) 
        }
    }
})