
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './Component/ShoppingCart';
import { useState } from 'react';
import AddNewItem from './Component/Add_New_Item/AddNewItem'

const shoppingitems = [
  {
    id: 1,
    item_name: 'Shoe',
    style: 0
  },
  {
    id: 2,
    item_name: 'Shirt',
    style: 0
  },
  {
    id: 3,
    item_name: 'Jeans',
    style: 0
  },
  {
    id: 4,
    item_name: 'Belt',
    style: 0
  }
];

function App() {
  const [item, newItem] = useState(shoppingitems);

  const addItemHandler = (item) => {
    // console.log(item);
    item.id = shoppingitems.length + 1
    // item.style = 0;
    // console.log(item, shoppingitems)
    newItem((prevItem) => {
      return [{...item, style:0}, ...prevItem]
    });
  }
  const onDeleteHandler = (event) => { 

    newItem(item.filter(item => item.id !== event))

  }
  const onStyleChangeHandler = (event) => {
    console.log(event)
    var index = shoppingitems.findIndex(item => item.id === event);
    shoppingitems[index].style = 1;
    newItem(shoppingitems);
  }
  return (
    <div>
      <AddNewItem onAddItem={addItemHandler} />
      <ShoppingCart key={item.id} items={item} onDelete={onDeleteHandler} onStyleChange={onStyleChangeHandler}/>
    </div>
  );
}

export default App;
