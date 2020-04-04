import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeShop from "./components/CakeShop";
import IceCreamShop from "./components/IceCreamShop";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import BindEvent from "./components/BindEvent";
import ParentComponent from "./components/ParentComponent";
import PersonList from "./components/PersonList";
import Form from "./components/Form";
import MountingLifecycle from "./components/MountingLifecycle";
import FragmentsTableRow from "./components/FragmentsTableRow";
import Fragments from "./components/Fragments";
import ParentComp from "./components/ParentComp";
import Refs from "./components/Refs";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
import Portals from "./components/Portals";
import GeneratePDF from "./components/GeneratePDF";

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Hello></Hello>
          <Greet name="Arun" hero="Batman"></Greet>
          <Greet name="Neha" hero="Wonder Women"></Greet>
          <Greet name="Vimal" hero="Thor"></Greet>
          <Welcome name="Kamal" hero="Hulk" />
          <Counter />
          <FunctionClick />
          <ClassClick />
          <BindEvent />
          <ParentComponent></ParentComponent>
          <PersonList></PersonList>
          <Form />
          <MountingLifecycle />
          <Fragments /> */}
          {/* <ParentComp />  */}
          {/* <Refs />
          <FocusInput />
          <Portals /> */}
          <CakeShop />
          <IceCreamShop />
          {/* <GeneratePDF /> */}
        </div>
      </Provider>
    );
  }
}

export default Application;
