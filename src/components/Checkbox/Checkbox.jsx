import React from "react";
import "./checkbox.css";

function Checkbox(props) {
  // console.log(props);
  const { typeOfBox, onChange, num } = props;

  // console.log(props);

  const onCheck = () => {
    console.log(typeOfBox);
  };

  // const onChange = (num) => {
  //   console.log(num);
  // };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={typeOfBox}
        name={typeOfBox}
        value={typeOfBox}
        onClick={onCheck}
        className="check"
        onChange={onChange}
      />
      <label htmlFor={typeOfBox}>{typeOfBox}</label>
    </div>
  );
}

export default Checkbox;
