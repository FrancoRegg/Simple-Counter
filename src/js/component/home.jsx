import React from "react";


const SimpleCounter = (props) => {
  return (
		<div className="contador"> 
    <h1>cronometro</h1>
      <div className="icono">
        <i class="fas fa-clock"></i>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
	);
};

export default SimpleCounter;
