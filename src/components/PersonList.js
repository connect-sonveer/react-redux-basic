import React, { Component } from "react";
import Person from "./Person";

export class PersonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personDetails: [
        {
          id: 1,
          name: "Sonveer",
          age: 27,
          city: "Noida"
        },
        {
          id: 2,
          name: "Ashutosh",
          age: 31,
          city: "Delhi"
        },
        {
          id: 3,
          name: "Tilak",
          age: 27,
          city: "Greater Noida"
        },
        {
          id: 4,
          name: "Rambeer",
          age: 32,
          city: "Meerut"
        },
        {
          id: 5,
          name: "Nitu",
          age: 33,
          city: "Baghpat"
        },
        {
          id: 6,
          name: "Kapil",
          age: 23,
          city: "Noida"
        }
      ]
    };
  }

  render() {
    const listPerson = this.state.personDetails.map((person, index) => (
      <Person key={index} person={person} />
    ));

    return <div>{listPerson}</div>;
  }
}

export default PersonList;
