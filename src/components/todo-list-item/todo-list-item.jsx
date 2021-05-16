import React from 'react';
import './todo-list-item.scss';


const TodoListItem = ({todo,important,done,handleDone,handleImportant,handleDelete})=>{  
      
    let classes = 'todo-text';
   
    if(important)
        classes+= ' important';
    if(done){
        classes+=' done';
    }
    // else{
    //     classes.replace('done','');
    // }    
    return (
       <>
        <span className={classes} onClick={handleDone}>{todo}</span>
            <span className='btn-group'>
                <button type='button' className='btn btn-outline-danger' onClick={handleDelete}>
                Delete
                </button>
                <button type='button' className='btn btn-outline-success' onClick={handleImportant}>
                Important
                </button>
            </span>
            
        </>
        )
    } 

;

export default TodoListItem;