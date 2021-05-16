import React from 'react';
import './todo-list-style.scss';
import TodoListItem from '../todo-list-item';


const TodoList = ({todos,handleDelete, handleDone ,handleImportant}) =>{ 
    
    const items =  todos.map(itemData => {
        const {id,...data} = itemData;        
        return (
        <li key={id} className='list-group-item d-flex justify-content-between '>
            <TodoListItem {...data} handleDelete={()=>handleDelete(id)} handleDone={()=>handleDone(id)} handleImportant={()=>handleImportant(id)}/>
        </li>
        )
    });

    return(
        <ul className='list-group todo-list'>
            {
               items
            }            
         </ul>
    );
}

export default TodoList;