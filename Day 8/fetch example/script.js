const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodos(){
    //do the fetch --fetch is a built in library
    const response = await fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
    }
    })
    // console.log(response.json)
    if(response.status >= 200 && response.status < 300){
        const json = await response.json()
        return json;
    }else{
        throw new Error('something went wrong')
    }
}
// fetchTodos()

// function renderTodos(todos){
//     let output = '<ol>'
//     todos.forEach((todo)=>{
//         output += `<li>
//         id: ${todo.title} - completed: ${todo.completed} - userId: ${todo.userId}
//         <li>`
//     });

//     output += '</ol>';
//     document.body.innerHTML= output
// }

// const todo = 
//     {title : 'Wash the dishes', completed : 'yes', userId : '1234'}

function renderTodos(todos){
    let output = '<ol>'
    todos.forEach((todo)=>{
        output += `<li>
        title: ${todo.title} - completed: ${todo.completed} - userId: ${todo.userId}
        <li>`
    })
    output += '</ol>';
    document.body.innerHTML= output
}
// renderTodo(todo)

async function saveTodo(todo){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch (url,{
        method: 'POST',
        body: JSON.stringify(todo),
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    if(response.status >= 200 && response.status < 300){
        const json = await response.json()
        return json;
    }else{
        throw new Error('something went wrong')
    }
}

async function start(){
    try{
        // const todos = await fetchTodos();
        // renderTodos(todos)
        // renderTodo(todo);
        const response = await saveTodo([{
            title: 'Teach the class',
            completed: false,
            userId: 2
        },
        {
            title: 'mop the floor',
            completed: false,
            userId: 3
        }])
        // console.log(todos)
        console.log(response)
    } catch(err){
        console.log(err)
    }

}
start()
;