import React from "react";
import style from "./appStyles.module.css";

function Person(person) {
  person = person.person;
  return (
    <div>
      <h2 className="data">
        I am <span className={style.name}>{person.name}</span>. 
        I am <span className={style.age}> {person.age} years old</span> and 
        I lives in <span className={style.city}>{person.city}</span>
      </h2>
    </div>
  );
}

export default Person;
