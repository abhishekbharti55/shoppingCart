import React from "react";

import './MarkedItemDropDown.css';


const MarkedItemDropDown = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
     
      };

    return(
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
      
          <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Pending' style={{ backgroundColor: 'red', color: 'blue' }}  >Pending</option>
            <option value='Marked Done'>Marked Done</option>
            <option value='Delete'>Delete</option>
            
          </select>
        </div>
      </div>
    );
}


export default MarkedItemDropDown;