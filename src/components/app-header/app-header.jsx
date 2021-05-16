import React from 'react';
import './app-header-style.scss';

const AppHeader = ({headerText, done=0, countTodo=0}) =>{
    return (
        <div className='d-flex  justify-content-between mb mt'>            
            <h1 className='app-header'>{headerText}</h1>
            <span className='align-self-end text-muted'>{countTodo} more to do, {done} done</span>
        </div>
    );
}

export default AppHeader;