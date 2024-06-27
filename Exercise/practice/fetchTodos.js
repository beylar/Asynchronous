async function fetchTodos() {
    try {
        const fetchTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
        const responseTodos = await fetchTodos.json()
        // console.log(responseTodos)
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        const responseUsers = await fetchUsers.json()
        // console.log(responseUsers)

        const data = await Promise.all(responseTodos, responseUsers)
        // for(let user in responseUsers){
        //     for(let todo in responseTodos){
        // responseUsers[0].todo = responseTodos[0]
        responseUsers.map((user) => {
            responseTodos.map((todo) => {
                if ("todo" in user && user.id === todo.userId) {
                    user.todo.push(todo)
                }
                else if (user.id === todo.userId) {
                    user.todo = [todo]
                }
            })
        })
        //     }
        // }
        console.log(responseUsers)


    }
    catch (error) {
        console.log(`Your error is ${error}`)
    }
}
fetchTodos();