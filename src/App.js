import React from 'react';
import './App.css';
import ItemsList from "./components/items/ItemsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import NavigationBar from "./components/NavigationBar/NavigationBar";
import ReactCarousel from "./components/carousel/ReactCarousel";

function App() {
  return (
    <div className="App">

        <NavigationBar/>

        <div className={"row"}>
            <div className={"col col-md-5"}>
                <ReactCarousel/>
            </div>
            <div className={"col col-md-7"}>
                <ItemsList/>
            </div>
        </div>




    </div>
  );
}

export default App;
