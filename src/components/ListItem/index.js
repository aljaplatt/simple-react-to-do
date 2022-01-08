import React from "react";

// takes in props of text and delete function
// render the text - li {text}
// render button - when clicked - call delete function
const ListItem = ({ text, onDelete }) => {
  return (
    <li>
      {text} <button onClick={onDelete}>Remove</button>
    </li>
  );
};

export default ListItem;
