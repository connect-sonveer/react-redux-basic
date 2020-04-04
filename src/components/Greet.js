import React from "react";

const Greet = ({ name, hero }) => {
  return (
    <h1>
      Hello <span className="name">{name}</span>, you love <span className="city">{hero}</span>
    </h1>
  );
};

export default Greet;
