import React from "react";

function FunctionClick() {
  function functionClick() {
    alert("Function Button Clicked");
  }

  return (
    <div>
      <button onClick={functionClick}>Function Click Button</button>
    </div>
  );
}

export default FunctionClick;
