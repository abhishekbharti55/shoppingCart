import React  from "react";
import './ShoppingCart.css';
import ShoppingList from "./ShoppingList";

const ShoppingCart = (props) => {
   const onDeleteHandler = (event) => {
    console.log('event' , event);
    props.onDelete(event);
   }
   const onStyleChangeHandler = (event) => {
    console.log('event' , event);
    props.onStyleChange(event);
   }
   
    return <div className="shoppingWindow">
        <div className="shoppingwindow__inner"> 
        <h1>Shopping Tracker</h1>
         {props.items.map((item , index) => (
          <ShoppingList 
          key={index}
           item = {item} 
           onDelete = {onDeleteHandler} 
           onStyleChange = {onStyleChangeHandler}
          
           />

         ))}
        </div>

    </div>
}

export default ShoppingCart;