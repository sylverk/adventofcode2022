import logo from './logo.svg';
import './App.css';
import React from 'react';
import {DayOneComponent} from './DayOne';
import {DayTwoComponent} from './DayTwo';
import {DayThreeComponent} from './DayThree';
import { DayFourComponent } from './DayFour';
import { DayFiveComponent } from './DayFive';



function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <DayOneComponent/>
        <DayTwoComponent/>
        <DayThreeComponent/>
        <DayFourComponent/>
        <DayFiveComponent/>
      </div>
    </div>
  );
}

export default App;
