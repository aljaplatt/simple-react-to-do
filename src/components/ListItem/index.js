import React from "react";

const ListItem = ({ text, onDelete }) => {
  return (
    <li>
      {text} <button onClick={onDelete}>Remove</button>
    </li>
  );
};

export default ListItem;
