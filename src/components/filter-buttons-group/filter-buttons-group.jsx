import React,{Component} from 'react';

class FilterButtonsGroup extends Component {
    
    buttons = [
        {name:'all', label:'All'},
        {name:'active', label:'Active'},
        {name:'done', label:'Done'},
    ];
    render(){

        const renderButtons = this.buttons.map(({name, label}) =>{
            const {filter, handleFilterSwitch} = this.props
            const isActive =  filter===name;
            const classNames = isActive?'btn-info':'btn-outline-secondary';

            return(
            <button
            className={'btn '+ classNames}  
            key={name} 
            onClick ={()=>{handleFilterSwitch(name)}}
            >{label}</button>
            );
        })

        return (
            <div className='btn-group'>
                {renderButtons}
            </div>
        )
    }
    }

export default FilterButtonsGroup;