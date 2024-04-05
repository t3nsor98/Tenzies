import React from "react";

export default function Die(props) {
  const dieStyle = {
    backgroundColor: props.isHeld ? "lightgreen" : "white",
  };

  return (
    <div className="die-face" style={dieStyle}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
