import React from "react";
import ListItem from "../ListItem";

// map over each to do, return a list item
// ListItem takes in text and onDelete fn - will be hooked up to removeItem fn in App
// Track the index using map - 2nd param
// for each list item, create a new fn.
// This calls a unique onDelete fn (removeItem) with the index index for that curr item.
const List = ({ todo, onDelete }) => {
  return (
    <ul>
      {todo.map((item, index) => {
        return <ListItem text={item} onDelete={() => onDelete(index)} />;
      })}
    </ul>
  );
};

export default List;
