import React,{Component} from 'react';
import FilterButtonsGroup from '../filter-buttons-group/';


class SearchGroup extends Component{
    constructor(){
        super()
        this.state={
            search: '',
        }
    }

    onChangeSearch = (e) =>{
        let search = e.target.value;
        this.setState({search});
        this.props.handleSearchText(search);
    }

    render(){ 
        const {filter,handleFilterSwitch}= this.props  
        return(
            <div className="input-group mb-3">                      
                <input 
                className='form-control'
                 type="text" 
                 onChange={this.onChangeSearch} 
                 placeholder='Search...' 
                 value={this.state.search} />  

                <div className='btn-group'>  
                    <FilterButtonsGroup filter={filter} handleFilterSwitch={handleFilterSwitch}/>
                </div>                     
            </div>
        )
    }
} 


export default SearchGroup;