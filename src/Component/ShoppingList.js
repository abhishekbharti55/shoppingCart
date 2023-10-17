import React, {useState} from "react";
import './ShoppingList.css'
import MarkedItemDropDown from "./MarkedItemDropDown";



const ShoppingList = (props) => {
    // console.log(props)
    const [option, setOption] = useState('Pending');
    // const [style , setStyle] = useState('expense-item');
    const backgroundchange = false;
    const filterChangeHandler = (selectedOption) => {
      setOption(selectedOption);
      if(selectedOption === 'Delete'){
        props.onDelete(props.item.id);
        alert(`${props.item.item_name} Removed successfully`)
       
      }

      if(selectedOption === 'Marked Done'){
    //    setStyle('expense-item_new')
    props.onStyleChange(props.item.id)
    }
    // else{
    //     setStyle('expense-item')
    // }

     
    };

    return (
    <div className={props.item.style==0 ? 'expense-item'  : 'expense-item_new'}>
    <div className='expense-item__description'>
    <h2>{props.item.item_name}</h2>
    <MarkedItemDropDown selected = {option} onChangeFilter = {filterChangeHandler} />
  </div>
  </div>
    );
}

export default ShoppingList;