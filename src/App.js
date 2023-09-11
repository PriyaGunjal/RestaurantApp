<<<<<<< HEAD
import React,{ Fragment } from "react";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header/>
    </Fragment>
  );
}

export default App;
=======
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App () {

    return(
        <Fragment>
            <Header/>
            <Meals/>
        </Fragment>
    );
}

export default App;
>>>>>>> 130b04d6 (Add Restauran Summary)
