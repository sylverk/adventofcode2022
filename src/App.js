import logo from './logo.svg';
import './App.css';
import React from 'react';
import {DayOneComponent} from './DayOne';
import {DayTwoComponent} from './DayTwo';
import {DayThreeComponent} from './DayThree';



function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <DayOneComponent/>
        <DayTwoComponent/>
        <DayThreeComponent/>
      </div>
    </div>
  );
}

export default App;
