import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkTodo, LoadTodos, removeTodo,} from "./actions";
import Header from "./Header";

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const deleted = useSelector(state => state.deleted)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoadTodos());
    },[])

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const handleCheck = (id,deleted) => {
        dispatch((checkTodo(id,deleted)))
    }
    return (
        <div className='basis'>
            <Header/>
            <h1 className='img'>Картинки</h1>
            {loading ? 'идет загрузка' : ''}
            {todos.map(todo => {
                return(
                    <div className='todo'>
                        <div>
                            <input  type="checkbox"
                                    checked={todo.deleted}
                                    onChange={() => handleCheck(todo.id, todo.deleted)}/>
                        </div>
                        <div className='post'>
                            <img src={todo.url} alt=""/>
                        </div>
                        <div className= 'actions'>
                            <button className='button' onClick={() => handleDelete(todo.id)}>
                                <b> Delete </b>
                            </button>
                        </div>
                    </div>

                )
            })}

        </div>
    );
}

export default App;