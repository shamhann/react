
export const LoadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'todo/load/start'})
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'todo/load/success',
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return(dispatch) => {
        dispatch({type: 'todo/deleting/start',payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'todo/deleting/success',
                    payload: id
                })
            })
    }
}

export const checkTodo = (id,deleted) => {
    return(dispatch) => {
        dispatch({type: 'todo/checking/start',payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({deleted: !deleted}),
            headers:{
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'todo/checking/success',
                    payload: id
                })
            })
    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: "users/load/start"})

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'users/load/success',
                    payload: json
                })
            })
    }
}