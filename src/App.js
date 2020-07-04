import React from 'react';
import './App.css';
import ItemsList from "./components/items/ItemsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">

        <NavigationBar/>

        <ItemsList/>


    </div>
  );
}

export default App;
