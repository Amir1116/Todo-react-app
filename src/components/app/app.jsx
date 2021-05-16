import React,{Component} from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchGroup from '../search-group';
import TodoAddPanel from '../todo-add-panel/'


class App extends Component{
    constructor(){
        super();
        this.maxId = 100;
        this.state = {
            todoData:[
                this.createTodoItem('drink coffee'),
                this.createTodoItem('learn react'),
                this.createTodoItem('build awesome react app'),          
            ],
            searchText:'',
            filter:'all'
        }}
    createTodoItem=(todo)=>{
        return {
            todo,
            important:false,
            done:false,
            id:this.maxId++,
        }
    }
    filter = (arr,flt) =>{
        switch(flt){
            case 'all':
                return arr;
            case 'active':
                return arr.filter(item => item.done===false);
            case 'done':
                return arr.filter(item => item.done=== true);        
            default:
                return arr;
        }
    }
    
    handleDelete = (id) =>{        
        this.setState(({todoData})=>{
            const idx = todoData.findIndex(item=>item.id === id);
            return {todoData: [...todoData.slice(0,idx),...todoData.slice(idx+1)]}
        })
    }   
    
  
    handleAddTodo = (todo)=>{     
        this.setState(({todoData})=>{
            const newTodoData = [...todoData,this.createTodoItem(todo)];
            return {
                todoData:newTodoData,
            }
        })
    }

    findIndexTodo = (arr,id) =>{
        return arr.findIndex(item => item.id === id);
    }

    handleDone = (id) =>{                
        this.setState(({todoData})=>{            
            const idx = this.findIndexTodo(todoData,id)           
            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx+1);       
            const newDone = {...todoData[idx],done:!todoData[idx].done};
            const newData = [...before,newDone,...after];                  
            return{
                todoData:newData,               
            }           
        })   
    }

    handleImportant = (id) =>{
        this.setState(({todoData})=>{            
            const idx = this.findIndexTodo(todoData,id)            
            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx+1);            
            const newDone = {...todoData[idx],important:!todoData[idx].important};
            const newData = [...before,newDone,...after];           
            return{
                todoData:newData,
            }
           
        })
    }    

    searchTodo =(arr,str)=>{        
        if(str.length===0){            
            return arr;         
        }else{
            return arr.filter(item=> item.todo.indexOf(str)>-1); 
        }
    }
    
    handleSearchText=(str)=>{
        this.setState({searchText:str,})
    }   
    handleFilterSwitch=(filter)=>{
        this.setState({
            filter
        })
    }
    render(){
        const {todoData,searchText} = this.state;
        let countDoneTodo = todoData.reduce((cnt,todo)=>{
            if(todo.done===true){
                cnt+=1;
            }
            return cnt
        },0); 
        
        const filteredTodo = this.filter(this.searchTodo(todoData,searchText),this.state.filter);

        let countTodo = todoData.length-Number(countDoneTodo);

        return (
            <div className='container-sm'>
                <AppHeader 
                headerText='Todo List'
                done={countDoneTodo} 
                countTodo={countTodo}
                />

                <TodoAddPanel 
                handleAddTodo={this.handleAddTodo}
                filter={this.state.filter}
                />

                <SearchGroup 
                handleSearchText={this.handleSearchText}                
                filter = {this.state.filter}
                handleFilterSwitch= {this.handleFilterSwitch}
                />  

                <TodoList 
                todos = {filteredTodo} 
                handleDelete = {this.handleDelete} 
                handleDone = {this.handleDone} 
                handleImportant = {this.handleImportant}
                />

            </div>
        );
    }
}

export default App;