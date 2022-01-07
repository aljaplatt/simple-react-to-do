import React from "react";
import ListItem from "../ListItem";

// map over each to do, return a list item
const List = ({ todo, onDelete }) => {
  return 
  <ul>
{todo.map((item)=> {
    return <ListItem text={todo} onDelete={}/>;
})}
  </ul>
};

export default List;
