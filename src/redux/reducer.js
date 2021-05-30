const initialState = {
        todos: [],
        loading: false,

        users: [],
        usersLoading: false,
        deleted: false
    }
;
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'todo/load/start':
            return {
                ...state,
                loading: true
            }
        case 'todo/load/success':
            return{
                ...state,
                todos: action.payload,
                loading: false
            };
        case 'todo/deleting/start':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }
                    return todo
                })
            }
        case  'todo/deleting/success':
            return {
                ...state,
                todos: state.todos.filter((todo) =>  todo.id !== action.payload)
            }
        case 'todo/checking/start':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo
                })
            }
        case 'todo/checking/success':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleted: !todo.deleted,
                            checking: false
                        }
                    }
                    return todo;
                })
            }
        case '"users/load/start"':
            return {
                ...state,
                usersLoading: true
            }
        case 'users/load/success':
            return {
                ...state,
                usersLoading: false,
                users: action.payload
            }
        default:
            return state;
    }
}
export default reducer;