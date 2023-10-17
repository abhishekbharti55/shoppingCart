import React, { useState } from "react";
import './AddNewItemForm.css';

const AddNewItemForm = (props) => {
   const [EnteredItemName , NewItemName] = useState('');
   const AddItemHandler =(event)=>{
    NewItemName(event.target.value);
   };

   const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      item_name: EnteredItemName
    };

    props.onSaveExpenseData(expenseData);
    NewItemName('');

  };

    return (
   <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Enter Item Name ::</label>
          <input
            type='text'
            value={EnteredItemName}
            onChange={AddItemHandler}
          />
          </div>
          </div>

          <div className='new-expense__actions'>
        <button type='submit'>Add Item</button>
      </div>
   </form>
    );

}


export default AddNewItemForm;