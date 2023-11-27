import React from "react";


const SimpleCounter = (props) => {
  
  return (
    <div className="container">
      <h1>segundero</h1>
      <div className="contador">
        <div className="icono">
          <i className="fas fa-clock"></i>
        </div>
        <div className="four numero">{props.digitFour % 10}</div>
        <div className="three numero">{props.digitThree % 10}</div>
        <div className="two numero">{props.digitTwo % 10}</div>
        <div className="one numero">{props.digitOne % 10}</div>
      </div>
    </div>
  );
};

export default SimpleCounter;
