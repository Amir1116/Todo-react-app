import React,{Component} from 'react';



class TodoAddPanel extends Component{
    constructor(){
        super()
        this.state ={
            todo:''
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleAddTodo(this.state.todo);
        this.setState({
            todo:'',
        })
    }

    handleChange = (e) =>{
        this.setState({
            todo: e.target.value,
        })

    }

    render(){      
       let todoText = this.state.todo;
            return (
                <form className='input-group mb' onSubmit={this.handleSubmit}>                  
                    <input className="form-control" type='text' placeholder='What do you need to do...' onChange={this.handleChange} value={todoText}/>
                    <button className='btn btn-outline-secondary'>Add todo</button>
                </form>
            )
        }
    }

export default TodoAddPanel;