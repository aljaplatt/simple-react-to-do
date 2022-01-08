import { useState } from "react";
// RSC snippet

// 2- take in a prop, we can call this onSubmit.
// when you submit this input, the onSubmit function will be called
const Input = ({ onSubmit }) => {
  // 1 -create text state - set text - default state of empty string
  const [text, setText] = useState("");

  // when we change the input text, we want the state text to update - function - handleChange
  // this function should work as an event handler (e). - take in an even
  function handleChange(e) {
    // setText - when this fn runs, the text is changed to the input value - e.target.value
    setText(e.target.value);
  }
  return (
    // onChange of the input field - run handle change function
    // https://sebhastian.com/react-onchange/ - track the value of input elements - value = text - for a controlled component - not req
    // onSubmit in App runs addItem - addItem needs to be given an item/text.
    // so - onClick - call the onSubmit fn and hand it the text being tracked in state.
    <div>
      <input onChange={handleChange} value={text} />
      <button
        onClick={() => {
          onSubmit(text);
        }}
      >
        Add a task
      </button>
    </div>
  );
};

export default Input;

// onChange, onSubmit events - html - https://reactjs.org/docs/handling-events.html
