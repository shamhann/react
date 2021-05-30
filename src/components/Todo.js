import React from 'react';
import ReactLoading from "react-loading";
import {useDispatch} from "react-redux";
import {checkTodo, removeTodo} from "../redux/actions";

function Todo(props) {
    const dispatch = useDispatch();
    const user = props.users.find(item => item.id === props.todo.userId)


    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const handleCheck = (id,deleted) => {
        dispatch((checkTodo(id,deleted)))
    }

    return (
        <div className='todo'>
            <div>
                {props.todo.checking ? (
                    <div className='spinner'>
                        <ReactLoading
                            color='#0033ff'
                            type='spin'
                            width={16}
                            height={16}/>
                    </div>
                ) : (
                    <input
                        type="checkbox"
                        checked={props.todo.deleted}
                        onChange={() => handleCheck(props.todo.id,props.todo.deleted)}
                    />
                )}
            </div>
            <div className='post'>
                <div>
                   {props.todo.title} ( {user.email})
            </div>
            </div>
            <div className= 'actions'>
                <button className='button'
                        onClick={() => handleDelete(props.todo.id)}
                        disabled={props.todo.deleting}
                >
                    <b> Delete </b>
                </button>
            </div>
        </div>
    );
}

export default Todo;