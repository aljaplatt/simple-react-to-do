import { useState } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";

function App() {
  // 2 -define state
  // take out a todo, and setTodo from useState - initial state is an empty list. - setTodo will change todo.
  const [todo, setTodo] = useState([]);

  // 3- functionality
  function addItem(item) {
    // take in an item, spread old array and add the new item.
    setTodo([...todo, item]);
  }

  // This will remove an item if given an index
  function removeItem(idx) {
    // take in the index of the item we want to remove.
    // slice/copy everything from 0 up to the index of item to be deleted - takes everything in before the idx.
    // Then grab everything after the idx.
    // eg idx = 2 - grab items 0,1, then from 3 onwards.
    setTodo([...todo.slice(0, idx), ...todo.slice(idx + 1)]);
  }

  return (
    // render an input and list - these don't exist yet, make component folders, then files for each
    // onDelete being handed down as a prop - passed removeItem function
    // List handed in todo state from above & removeItem fn
    // Input - onSubmit - run addItem fn.
    <div className="App">
      <Input onSubmit={addItem} />
      <List todo={todo} onDelete={removeItem} />
    </div>
  );
}

export default App;

// plan
/*
1- import useState 
2- define state
3- behaviour (functions) - add and remove item from list 
*/
