import React from 'react'
import Header from "./components/Header";
import Store from "./components/Store";
import './App.css';


function App() {


  return (
    <div className="App">
        <div className="container">
          <Header></Header>
          <Store></Store>
        </div>
    </div>
  );
}
export default App;
