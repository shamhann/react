import React, {useEffect} from 'react';
import ReactLoading from "react-loading";
import {useDispatch, useSelector} from "react-redux";
import {LoadTodos, loadUsers,} from "../redux/actions";
import Todo from "./Todo";

function Todos(props) {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const users = useSelector(state => state.users);
    const usersLoading = useSelector(state => state.usersLoading);
    const deleted = useSelector(state => state.deleted)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoadTodos());
        dispatch((loadUsers()))
    },[])


    return (
     (loading || usersLoading) ? <div className='load'>
            <div className='load-text'>
                идет загрузка
            </div>
            <ReactLoading
                color='red'
                type='spin'
                width={20}
                height={20}/>
        </div>
        :
    todos.map(todo => {
        return(<Todo key={todo.id} todo={todo} users={users}/>)
    })
    );
}

export default Todos;