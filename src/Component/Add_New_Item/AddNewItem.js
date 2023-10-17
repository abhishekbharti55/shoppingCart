import React from "react";
import AddNewItemForm from "./AddNewItemForm";
import './AddNewItem.css';

const AddNewItem = (props) => {
    const saveItemDataHandler = (enteredItemData) => {
        const itemData = {
          ...enteredItemData,
          id: Math.random().toString()
        };
        props.onAddItem(itemData);
      };
   return (
    <div className='new-expense'>
    <AddNewItemForm onSaveExpenseData={saveItemDataHandler} />
    
    </div>
   );

}

export default AddNewItem;