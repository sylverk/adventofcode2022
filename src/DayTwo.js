
import './App.css';
import React from 'react';
import {buttonFactory} from './utility';

function dayTwo(is_test, is_bonus){
    let input;
    if (is_test){
        input= "A Y\nB X\nC Z";
    } else {
        input = "C X \nC Y \nC X \nB X \nB Z \nA Z \nC Y \nC Z \nB Z \nC X \nB Y \nC Y \nC Y \nA Y \nC Y \nC Y \nC Z \nC X \nB Z \nC Y \nA Y \nA Y \nC Z \nB Y \nA Y \nC Z \nC Y \nA Y \nA Y \nB Y \nC Y \nC Z \nC Y \nB X \nB Z \nC Y \nB Z \nA X \nC Z \nA Y \nB Y \nC Y \nC Y \nB Z \nB Y \nA Z \nC X \nC X \nC Y \nC X \nB Z \nA Y \nB X \nB Z \nC Z \nC X \nC X \nB Z \nA Y \nB Y \nC Y \nC Y \nA Y \nC X \nA Y \nB Z \nC Y \nC Y \nB Y \nC Y \nA Z \nA Z \nB X \nA Y \nC Y \nA Y \nC Y \nC Y \nC X \nC Y \nB Z \nC Y \nC Z \nC X \nB X \nC Y \nC Y \nC X \nC Z \nA Y \nC X \nB Z \nC X \nA Y \nB Y \nC Y \nA Y \nA Y \nA Y \nB Y \nC Y \nA Y \nA Y \nC Z \nC Y \nB Y \nC X \nC Y \nB Z \nB Z \nC X \nC Y \nC X \nC Y \nC Y \nA Y \nC Y \nC X \nC Y \nC Y \nB Y \nB Z \nA Y \nB Y \nA Y \nA Y \nC Y \nB X \nC Y \nC X \nA Y \nC X \nC X \nC Y \nC Y \nB Z \nC X \nA Y \nB Z \nC Z \nC X \nA Y \nB Z \nC Y \nB Y \nA Y \nA Y \nC Y \nB Y \nC Y \nC X \nC Y \nA Y \nC Y \nA Y \nB Y \nC X \nC Y \nC Y \nB Z \nB Z \nA Y \nC Y \nC Y \nC Y \nC Y \nA Y \nC X \nC Z \nC X \nA Y \nA Y \nA Y \nC Y \nB Z \nB Z \nC Y \nC Y \nB X \nC Y \nC Y \nB Z \nB X \nB Y \nC Y \nC Y \nC X \nB Y \nB Z \nB Z \nC Y \nC Y \nC X \nC X \nA Y \nC Y \nC Y \nB X \nB Z \nB X \nB Z \nB Y \nC X \nB X \nB Y \nB Z \nB Z \nB X \nB Z \nB Y \nC X \nC Y \nC X \nC X \nB Z \nC Y \nC Y \nC Y \nB Z \nC Y \nC X \nC Y \nC Y \nA Z \nC Y \nA Y \nC Y \nA Z \nA X \nC Y \nC Y \nC Y \nC Z \nB Z \nB Z \nC Y \nB Z \nB Z \nC X \nC Y \nA Y \nA Y \nC Y \nA Y \nC Y \nC Y \nB Y \nA Y \nC Y \nB Z \nA Y \nB Z \nC X \nC Y \nA Y \nB Z \nA Y \nC X \nC Y \nB Y \nC Y \nA Z \nB Z \nB X \nC Y \nA Y \nA Z \nC X \nA Y \nB Z \nA Y \nB Y \nC Y \nC Y \nB Z \nB Z \nC X \nB Z \nC X \nC Z \nC Y \nC X \nA Y \nC X \nA Y \nA Y \nB Z \nB Z \nB Z \nA Y \nA Y \nC Y \nA Y \nB Z \nC X \nC Y \nC Y \nC Y \nB Y \nA Y \nC Z \nC Y \nA Y \nA Y \nB Z \nC Y \nC Y \nC Y \nB Z \nC Y \nC Y \nA Y \nA Y \nC Y \nC X \nB Z \nB Z \nC X \nC X \nC Z \nA Y \nC Y \nA Y \nA Y \nC X \nA Z \nB Y \nA Y \nC X \nA Y \nC X \nC X \nA Y \nA Y \nC X \nB Y \nB Z \nC Y \nC Z \nC Y \nC Y \nB Z \nC Y \nA Y \nA X \nB Y \nC Y \nA Y \nC Y \nC Y \nC Y \nA Y \nC Y \nA Y \nC Y \nB Z \nA Y \nC X \nC Y \nA Y \nC Y \nA Y \nA Y \nA Y \nB Z \nC Y \nB Z \nA Y \nC Y \nA Y \nC Y \nC X \nB Z \nA Y \nC X \nB Z \nB Y \nC Y \nC Z \nC Y \nB Y \nB Y \nA Y \nA Y \nC X \nB Y \nA Y \nC Y \nB X \nC X \nA Y \nC Y \nA Y \nC Y \nB Z \nA Z \nB Z \nB Z \nA Z \nC Y \nC Y \nC X \nB Y \nC Y \nA Y \nC Y \nC Y \nB Y \nB Z \nC Y \nC X \nA Y \nC X \nC X \nC Y \nB Y \nC Y \nB Z \nC Y \nA Y \nA Y \nC Y \nC X \nC X \nC X \nC Y \nC X \nC Y \nC Y \nA Y \nC Y \nC X \nC Y \nC X \nC X \nC X \nA Y \nB Y \nC Y \nC Y \nC Y \nC Y \nC Y \nA Y \nA X \nB Z \nC X \nC Y \nC Y \nB Z \nA Y \nA Y \nB X \nB Z \nC Y \nC Y \nB Z \nA Y \nA Y \nA Y \nC Y \nC Y \nA Y \nA Y \nC Y \nC Y \nC X \nC X \nC X \nB Z \nC Z \nC X \nA Z \nC Y \nC X \nA Y \nB Y \nB Z \nC X \nC Y \nC Y \nC Z \nC Y \nC X \nA Z \nC Y \nA X \nB Y \nC Y \nC Y \nC Y \nC X \nB Y \nB Y \nC X \nB X \nA Y \nC Y \nC Y \nC Y \nB X \nC Y \nA Y \nC Y \nC Y \nB Z \nC X \nB X \nC Z \nC Y \nA Y \nB Y \nB Z \nC Z \nC X \nC X \nA Y \nA Y \nB Z \nA Y \nC X \nB Y \nC Y \nA Y \nB X \nA Y \nA Y \nC Z \nC Y \nC Z \nB Z \nA X \nC Y \nB Y \nC Y \nB Z \nB Y \nC Y \nA Y \nB Z \nB Z \nC X \nB Z \nC Y \nB Z \nB Z \nC Y \nC Y \nB Z \nC Z \nC Y \nB Z \nC Y \nB X \nA Y \nB Z \nA Y \nC Y \nA Y \nC Y \nC Y \nB Y \nB Z \nB Z \nC Y \nA Y \nB Z \nC X \nC Y \nC Y \nA Y \nC Y \nC Y \nC X \nA Y \nC Y \nC Y \nA Y \nC X \nA Y \nA Y \nA Y \nC Y \nC Y \nA Y \nB Z \nA Y \nB Y \nA Y \nA Y \nC Y \nC Y \nC Z \nA Y \nC Y \nB Z \nA Y \nC Y \nC Z \nC Y \nC Y \nB Z \nC Y \nC Y \nB Z \nB Y \nC Y \nA Y \nC X \nC Y \nC Z \nC Z \nC X \nC X \nC X \nC Z \nC Y \nB Z \nA Y \nB Z \nB Z \nA Y \nC Y \nC Y \nC Y \nB X \nC Y \nA Y \nA Z \nB Y \nB Y \nA Y \nB Z \nA Y \nB Y \nC Z \nC Y \nC Y \nC Y \nB Z \nB Z \nB Z \nC Y \nC Y \nA Y \nC X \nC X \nA Y \nC Y \nC Y \nC Y \nC Y \nC X \nC Y \nC Y \nC Y \nC X \nA Z \nB Y \nC Y \nA Y \nA Y \nB Z \nA Z \nC Y \nC Y \nC Y \nC X \nB X \nB Y \nC Y \nA Y \nA Z \nB X \nC Y \nC Y \nB Z \nA Y \nA Y \nB Z \nB Z \nC Y \nC Y \nC X \nB Y \nB Z \nC Y \nB Y \nC Y \nA Y \nC X \nC X \nB Z \nA Y \nC Y \nB Z \nC X \nC Y \nB Y \nB Z \nA Z \nB Y \nB Y \nC X \nC Y \nA Z \nC X \nC X \nA Y \nA Y \nC X \nA Y \nB Y \nB Z \nA Y \nB Z \nB X \nC Y \nC Y \nC X \nB Z \nA Y \nB Y \nA Y \nC Y \nC Z \nB Z \nC Y \nA Y \nC Y \nC Z \nA Z \nB Z \nB X \nC Y \nC Y \nB Y \nC X \nB Y \nB Z \nB Z \nB X \nB Y \nC X \nC Y \nC X \nC Y \nA Y \nA Y \nC Y \nA Y \nC Y \nC X \nC Y \nA Y \nB Z \nC X \nC Y \nB Z \nC Y \nC Y \nB Y \nB Z \nA X \nC Y \nB Y \nB Y \nB Z \nC Y \nB Z \nA Y \nC Y \nB Y \nC Y \nA Y \nC Y \nB Z \nC Y \nA Y \nA Y \nC Y \nA Y \nC Y \nA Y \nA Y \nB Z \nC X \nC Y \nB Z \nC Y \nA X \nA Z \nC Y \nC X \nC X \nC Y \nC Y \nB Z \nA Z \nA Y \nC Y \nB Z \nA Y \nA Y \nC Y \nB Z \nA Y \nC X \nA Y \nA Y \nC X \nB Z \nB X \nA X \nA Y \nB Y \nA X \nB X \nC X \nC Y \nA Y \nC Y \nA Y \nA Y \nC X \nB Y \nC X \nB Y \nC Y \nC Y \nA Y \nB Z \nA Z \nB Y \nC X \nC Y \nC Y \nB Z \nC Z \nA Y \nA Y \nA Z \nC Y \nA Y \nB Z \nC Y \nC Y \nB Y \nA Y \nA Y \nC Y \nC X \nC X \nB Y \nB Z \nC Y \nB Y \nB Z \nC Y \nA Y \nB Z \nA Y \nA Y \nA Z \nC X \nB Z \nC Y \nB Z \nA Y \nC X \nC Y \nC Y \nB X \nB Z \nA Y \nA Y \nA Y \nA Y \nA Y \nC Y \nA Y \nA Y \nC X \nC Y \nC Z \nB Z \nA Z \nC Z \nA Y \nB Z \nB Y \nA Y \nC Y \nB Z \nA Y \nC Y \nC Y \nA Y \nC Y \nB Z \nB Y \nB Z \nC Y \nC Y \nC Y \nA Z \nC X \nB X \nB Z \nC Z \nC Y \nC Y \nC Y \nC X \nA Y \nC Y \nA Y \nA Y \nB Z \nA Y \nC Y \nC Y \nA Y \nC Y \nA Z \nB X \nA Y \nC Y \nA Y \nA Z \nA Y \nA Y \nB Z \nB Y \nB Z \nC Y \nB Z \nC X \nA Y \nC Y \nA Y \nA Y \nA Y \nB Z \nB Z \nC Y \nB Z \nB Y \nC X \nA Y \nC Y \nA Y \nB Z \nC X \nB Y \nC Y \nB Z \nC Y \nA Y \nC Y \nC Y \nB Y \nB Z \nC Y \nB Z \nB Y \nC Y \nC X \nA Z \nC Z \nC Y \nC Y \nA Y \nA Y \nC X \nC Y \nC Y \nC Y \nC X \nB Z \nC X \nC Y \nA Y \nA Y \nB Z \nA Y \nA Y \nC Y \nA Y \nB Z \nC X \nC Y \nC Y \nC Y \nC Y \nC X \nB Z \nA Y \nB Y \nC Y \nC X \nB Z \nC Y \nA Y \nA Y \nB Z \nC Y \nA Y \nC Z \nC X \nB Z \nC Y \nA Z \nB Z \nA Y \nA Y \nC Y \nB Z \nB Z \nA Y \nC Y \nB Y \nC Y \nA Y \nA Y \nB Y \nB X \nB Z \nC Y \nA Y \nC Y \nA Y \nA Y \nB Z \nB Y \nA Y \nA Y \nA Y \nC Y \nB Y \nC Y \nA Y \nC X \nC Y \nC Y \nB Z \nB Z \nC Y \nC Y \nA Y \nB X \nC X \nA Y \nC Y \nC Y \nC Y \nA Y \nC X \nB Z \nA Y \nC Z \nB Y \nB Y \nC Z \nA Y \nC Z \nC Y \nC X \nB Y \nA Y \nC X \nC X \nC Y \nC X \nC X \nB Z \nC Y \nB Y \nA Y \nB Y \nA Y \nB Z \nC X \nC Y \nC X \nC Z \nC X \nB Z \nC X \nC Y \nC Y \nC Y \nB Z \nA Y \nC Y \nC Y \nC Y \nB Z \nA Y \nC X \nC Y \nC Y \nC Y \nC X \nA Z \nC Y \nC Y \nC X \nB X \nB Z \nA Y \nB Z \nC Y \nB Y \nB Z \nA Y \nB Z \nC Y \nA Y \nA X \nC X \nC X \nC Y \nA Y \nB X \nC Y \nB X \nB Z \nC X \nA Y \nB X \nC X \nA Y \nC Y \nC Y \nC Y \nA Z \nC Y \nA Y \nB Z \nB Z \nA Z \nC Y \nA Y \nB Z \nC Z \nC X \nC X \nC X \nA Y \nA X \nC Y \nA Y \nB Y \nC Y \nC X \nC Y \nC Y \nA Y \nB Z \nC Y \nB Z \nA Y \nC X \nC Y \nB Z \nC Y \nC Y \nB Y \nA Y \nA Y \nA Z \nC Y \nB Z \nB Y \nB Z \nB Y \nA Y \nC Y \nC Y \nC X \nC Y \nC Y \nB Z \nC Y \nC Y \nC X \nB Y \nB Z \nC Y \nC Y \nA Y \nC Z \nC Y \nB Z \nA Y \nA X \nA Y \nC X \nC Y \nC Y \nB Z \nA Y \nB X \nC Z \nC Z \nC X \nC Y \nB Z \nC Z \nB Z \nC Y \nA Y \nC Y \nA Y \nB X \nC X \nC Y \nB Z \nC Y \nB Y \nB X \nB X \nB Z \nC Y \nC Y \nB Y \nB Z \nC Y \nA Y \nB Z \nC Y \nB Z \nC Y \nB Z \nC Y \nA Y \nA Y \nC Y \nC Y \nB Y \nB Z \nC Y \nB Z \nC X \nB Z \nC Y \nB X \nC X \nB Z \nA Y \nC X \nB Z \nC Y \nA Y \nB Z \nA X \nB Z \nB Z \nB Z \nC Y \nC Y \nC Y \nC Y \nA Y \nA Y \nB Z \nB X \nC X \nC Y \nB Y \nA Y \nA Y \nB Z \nC Y \nA Y \nA Y \nC Y \nC X \nC Y \nC X \nC Y \nC Y \nC Y \nB Z \nC Y \nC X \nB Y \nC Y \nC Y \nC Y \nA Z \nC X \nC Y \nA Y \nC Y \nB Z \nB Y \nC Y \nA Y \nA Y \nC Y \nC Y \nC X \nA Y \nC Y \nA Z \nA Y \nB Z \nA Y \nC X \nC Y \nC Y \nB X \nB Z \nC X \nB X \nC Z \nC X \nB Z \nB Z \nC Y \nC X \nB Z \nB Z \nB Z \nC Y \nC Y \nA Y \nC Y \nB Y \nB X \nC Y \nC Y \nC Y \nB X \nC X \nB X \nC Y \nA Y \nC Y \nC X \nC Y \nC Y \nB X \nB Z \nA Z \nB Z \nA Y \nB Z \nC X \nB Z \nC Y \nC Y \nC Z \nA Y \nC Y \nC Y \nA Z \nB Y \nC Y \nA X \nA Y \nB Y \nC Y \nB Z \nC Y \nC X \nC Y \nB Z \nA Y \nC X \nC Y \nC X \nC Y \nC Y \nC Z \nA Y \nC Y \nB Z \nA Y \nC Z \nC Y \nA Y \nC Y \nC Y \nC Y \nC Y \nA Y \nC Y \nC Y \nC Y \nC Y \nB Z \nC X \nA Y \nA Y \nC Y \nB Y \nC Y \nC Y \nA Z \nC Y \nB Y \nC Y \nB Z \nC X \nA Y \nC Y \nC Y \nB Z \nC Y \nA Y \nA Y \nC Y \nB Z \nC Y \nA Y \nB Z \nC Y \nC Y \nB Z \nC X \nB Z \nB Z \nC Y \nC Y \nA Y \nC X \nA Y \nC Y \nB Z \nA Y \nB Z \nA Y \nC X \nC Y \nB Z \nB Y \nB Z \nA Y \nB Z \nC Y \nB Z \nC Y \nB Y \nA Y \nB Z \nB X \nB Z \nC Y \nB Z \nB Z \nB Z \nA Y \nA Y \nC Y \nB Z \nB Z \nC X \nB Z \nC Z \nA Y \nB Z \nB Z \nC Y \nB Z \nB Z \nC X \nC Z \nA Z \nC Y \nC Y \nB X \nC Z \nC Y \nA Y \nB Z \nC X \nB Z \nC Y \nC Y \nB Z \nB Z \nB Z \nC X \nC Y \nC X \nC X \nA Y \nB Z \nB Y \nC Y \nC Y \nB Z \nC Y \nC Y \nC Y \nC Y \nC Y \nB X \nA Y \nA Y \nB Y \nC Y \nB Y \nC Y \nB Y \nB Z \nC Y \nC Y \nC X \nB Y \nA Y \nB X \nB Z \nC X \nA X \nC Y \nA Y \nA Y \nC X \nB Y \nA Y \nB Z \nC X \nB Z \nC Z \nC X \nC Y \nC X \nC Y \nC Y \nC Y \nB Y \nC Z \nC X \nB Z \nC Y \nC X \nC X \nB Y \nC Y \nC Y \nC Z \nB Z \nC Y \nC Y \nB Y \nC Z \nC X \nB Z \nC Y \nC X \nC Y \nB Z \nC Y \nC Y \nA Y \nB Y \nC X \nC Y \nC Y \nC Y \nB Y \nB Y \nC Z \nB Z \nC Y \nB Z \nA Z \nC X \nB X \nC X \nA Y \nC Y \nA Z \nC X \nC Y \nA Y \nA Y \nB Y \nA Y \nC Y \nB Y \nC X \nC X \nC X \nC X \nC Y \nC Y \nA Y \nB Z \nC Y \nA Z \nC Y \nA Y \nB Z \nB Z \nC Y \nA Z \nC Y \nC Y \nC Y \nB Z \nC Y \nC Y \nA X \nA Y \nA Z \nC Y \nA Y \nB X \nA Y \nB Z \nB Y \nB Z \nB Y \nC X \nC X \nA Y \nB Z \nB Y \nC X \nB X \nB Y \nA Y \nC Y \nC Y \nC Y \nB Z \nC Y \nA Y \nB Z \nC X \nB Z \nB Z \nB X \nB Y \nC Y \nC Y \nC X \nB Z \nC Y \nC Y \nC Y \nA Y \nC Y \nB Z \nB Y \nC Y \nC X \nC X \nB X \nB Z \nA Z \nC X \nA Y \nB Y \nC Y \nA Y \nB Y \nC Y \nC Y \nC Z \nC Y \nC X \nA Y \nC Y \nC Y \nB Z \nC Y \nC Y \nC Y \nC Y \nA Y \nB Z \nB Z \nC Y \nC Y \nC Y \nC Y \nC Y \nB Z \nC Y \nC Y \nC X \nA Y \nA Y \nC Y \nC X \nA Y \nB Z \nA Y \nC X \nC Y \nC Z \nC Y \nA Z \nA Y \nA Y \nB Y \nC Y \nC Y \nB Y \nC Y \nA Y \nC X \nB Z \nC X \nA Y \nB Z \nC X \nA Y \nC X \nC X \nA Z \nA Y \nB Y \nA Y \nB Y \nA Z \nC Y \nC Y \nC Y \nB Z \nC Y \nA Y \nB Z \nB Y \nC Y \nB Y \nC Z \nA Y \nB Y \nC Y \nB Y \nA Y \nB Z \nC Y \nC X \nC Y \nA Y \nA Z \nC Y \nB Z \nC Y \nB Y \nA Y \nC X \nA Z \nC Z \nC X \nA Y \nC X \nC X \nC Y \nC Z \nA Y \nA Y \nC Y \nA Y \nC Y \nB Z \nC X \nA X \nC X \nC Y \nC Y \nC Y \nC Y \nB Z \nB Z \nB Z \nC X \nC Y \nB Y \nC Y \nB Y \nC Z \nA X \nB Y \nC X \nB Y \nC X \nB Y \nC Y \nB Z \nC X \nA Y \nB Z \nC X \nA X \nC Y \nB Z \nB Z \nC X \nB Z \nB Z \nC X \nC Y \nC Z \nB Z \nC Y \nC Y \nC Y \nB X \nA Y \nB Y \nB Z \nB Z \nC X \nA Z \nC Y \nC Y \nA Y \nA X \nA Y \nC Y \nB Y \nC Y \nA Y \nC X \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nB Z \nB Z \nA Y \nB Y \nC Y \nC Y \nC X \nB Z \nA Y \nC Y \nB Z \nC Y \nA Y \nC X \nB X \nC Z \nA Y \nC X \nB Y \nC X \nB Z \nA Y \nC Y \nC Y \nC Y \nB Z \nB Z \nA Z \nC Z \nA Y \nB Z \nC X \nC Y \nA Y \nC Y \nC Y \nC X \nB Z \nC Z \nC Y \nB Z \nA X \nB Y \nA Z \nB X \nC X \nA Y \nC Y \nB Z \nB Z \nC Y \nA Y \nB Z \nB Z \nA Y \nA Y \nB Z \nB Z \nA X \nB Z \nC Y \nC Z \nC Y \nC Y \nB Z \nC Y \nA Z \nA X \nC X \nB Y \nB Z \nC X \nB Z \nA X \nA Y \nA Y \nB X \nB Y \nB Z \nC X \nC X \nC X \nC Y \nC Y \nB X \nC Y \nC Y \nA Y \nC X \nA Y \nB Z \nA Y \nC Y \nB X \nC X \nC Y \nA Y \nC X \nC Y \nC Y \nB Z \nA Y \nA Y \nA Z \nC Y \nB Z \nA Z \nB X \nA Z \nC Y \nB X \nA Y \nC Y \nC Z \nA Z \nC X \nA Y \nB X \nC Y \nC Y \nC X \nC Z \nA Y \nA Y \nC Y \nB Z \nC Y \nC X \nB X \nA Y \nB Y \nB Z \nB Z \nC Y \nC Y \nA Y \nB Z \nB Z \nC Y \nC Z \nC Y \nC Y \nC X \nC X \nA Y \nB Z \nA Y \nB Z \nB Z \nC X \nB X \nC X \nC Y \nB X \nB Z \nC X \nC X \nC X \nB Z \nB Y \nB Z \nC Y \nC Y \nB Z \nB Y \nB Z \nC Y \nB Y \nA Y \nA Y \nB Y \nA Y \nB Z \nA Y \nC X \nA Y \nC Z \nB Y \nC Y \nC X \nC X \nC Y \nC X \nC Y \nA Y \nB Z \nC X \nC Y \nC Y \nC Y \nC Y \nC Y \nB Y \nA Y \nB Z \nC Y \nA Z \nC Y \nB Z \nC X \nC Z \nA Y \nB Z \nC X \nC Y \nB Z \nC Y \nA Y \nC Y \nC X \nC X \nC Y \nA Y \nB Y \nA X \nC Y \nC Y \nA Y \nC Y \nA X \nC Y \nB Y \nC X \nB Z \nB Z \nB Y \nC Y \nC Z \nC X \nB Z \nB Z \nB Y \nC Z \nA Y \nC Y \nC Y \nB Y \nC X \nA Y \nC Y \nC Y \nA Z \nA Y \nB Y \nC Y \nC Y \nC X \nB X \nC Y \nA Y \nB Z \nB Y \nA Y \nB Y \nC Y \nC X \nC Y \nC Y \nC X \nA Y \nB Z \nC X \nC Z \nB X \nC Y \nC X \nC Y \nC X \nC Y \nB Z \nA Y \nA Y \nB Z \nC Y \nC Y \nB Z \nC Y \nC X \nB Z \nC Y \nB Z \nC X \nC Y \nC X \nA Y \nC Y \nA X \nC Y \nC X \nA Y \nC Y \nA Y \nC Y \nA Y \nC X \nA Y \nA Y \nA Y \nB Y \nB Z \nC Y \nB Z \nA Y \nC Y \nC X \nB X \nC Y \nB Z \nB X \nB X \nB Y \nC Y \nC X \nC Y \nC X \nB Y \nB Z \nA Y \nB Y \nC Y \nC Z \nA Y \nC Y \nB Y \nA Y \nC X \nC Y \nA Y \nC Y \nA Z \nC Z \nC Y \nB Z \nC Y \nC Y \nB Y \nA Y \nC Z \nA X \nC Y \nB Z \nC Z \nB X \nC Y \nC X \nC X \nB Z \nB Z \nB X \nB Y \nC Y \nB Z \nB Z \nB Z \nA Y \nB Z \nC Y \nC Y \nA Y \nA X \nC Z \nA Y \nC Z \nC Y \nC X \nC Y \nC X \nB Z \nC Y \nA X \nB Z \nB Y \nC Y \nB Y \nC Y \nC Y \nA Y \nB Z \nB Y \nC Y \nC X \nC Y \nC Y \nB Z \nA Y \nB X \nC Y \nC Y \nC Y \nA Y \nC Y \nC Y \nC X \nC Z \nC X \nB Y \nA Y \nC Z \nB Z \nB Z \nA Y \nC Y \nC X \nB X \nC X \nB Z \nA Y \nC Y \nC Y \nB Z \nA Y \nB Y \nC X \nB Y \nB Z \nB Z \nB Z \nB X \nB Y \nB Z \nC X \nA Z \nA Y \nC Y \nA Y \nC Y \nC Y \nB Z \nB Z \nC X \nB X \nC Y \nA Z \nC Y \nC X \nC Y \nB Y \nC X \nB Z \nC Y \nC X \nB Z \nA Y \nA Y \nC Y \nA Y \nA Z \nC Y \nA Z \nA Y \nC Y \nC X \nB X \nC Y \nC Y \nC X \nA Y \nC X \nC Y \nB Z \nB X \nC Y \nA Y \nB X \nC Y \nB Y \nC X \nA Y \nB Z \nC Y \nC Y \nB Z \nA Y \nA Z \nC Y \nC Y \nC X \nA Y \nB Z \nB Z \nB Y \nB Z \nA Y \nC Y \nA Y \nB Y \nA Y \nC X \nC Y \nA Z \nA Z \nB Y \nA Y \nC Y \nA X \nC Y \nC Y \nB Z \nC Y \nC X \nC Y \nA Y \nC Y \nC Y \nC Y \nC Y \nA X \nC Y \nB Y \nC Y \nA Y \nC Y \nC X \nC X \nC Z \nB Z \nA Y \nB X \nC Y \nC Y \nC Y \nA Y \nB Z \nB Z \nC Y \nA Y \nB Z \nA Y \nC X \nC X \nA Y \nC Z \nC Y \nB Z \nB Z \nA Y \nA Y \nC Y \nA Y \nC Y \nA Y \nB Z \nC X \nC Y \nC Y \nA Y \nC Y \nA Y \nA Z \nB Y \nC Y \nC X \nA Y \nC X \nA X \nC Y \nC Y \nB Y \nC Y \nB Z \nA Y \nC X \nB Z \nA Y \nC X \nB Z \nA Y \nC Y \nB Z \nA Y \nB Z \nC X \nC Y \nC X \nC Y \nB Z \nC Y \nB Y \nC Z \nB Z \nC Y \nC Y \nA X \nC X \nA Y \nC Y \nB Z \nA Y \nA Z \nB Z \nC Y \nC Y \nA Y \nA Y \nA Y \nC X \nC Y \nA Z \nC Y \nC Z \nA Y \nA Y \nC Y \nC X \nC X \nC Z \nC Y \nC Z \nB Z \nA Y \nB Z \nB Z \nC X \nA Y \nB Y \nA Y \nA Z \nA Y \nC Y \nC Y \nC Z \nA Y \nC Y \nB Y \nC X \nC X \nB X \nC Y \nA Y \nC Z \nA Y \nB Z \nB Y \nC Y \nA Y \nA Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nC Y \nA Y \nB Y \nA Y \nB Y \nB Y \nC X \nC X \nC Y \nA Y \nC Y \nC Y \nC Z \nC Y \nC Y \nB Y \nC Y \nB Y \nA Y \nC Y \nB Z \nC X \nC Y \nA Z \nA Z"
    }

    let arr = input.split('\n');

    let totalSum = 0;
    arr.forEach((el) => {
        let p = roundPoints(el.charAt(0), el.charAt(2), is_bonus);
        totalSum += p;
    })

    
    let p = document.createElement('pre');
    p.textContent = totalSum;
  
    let doc = document.getElementById("DayTwoComponent");
    doc.append(p);
    }

function getVal(x){
    let y;
    switch(x) {
        case "A":
        case "X":
            y = 1
          break;
        case "B":
        case "Y":
            y = 2
          break;
        default:
            y = 3
      }
      return y;
}

function getChoice(x,y){
    let second;
    console.log(x,y)
    switch(y){
        case "X": // lose
            second = x -1;
        break;
        case "Y": // draw
            second = x;
        break;
        default: // win
            second = x +1;
    }

    if (second === 0){
        return 3;
    }
    if (second === 4 ){
        return 1;
    }

    return second;

}
    
function roundPoints(one, two, is_bonus){
    let first = getVal(one);
    let second;
    if (is_bonus){
        second = getChoice(first, two);
    } else {
        second = getVal(two);
    } 
    let sum = 0;

    sum+= second;

    if (first === second){
    sum += 3;
    } else if((first < second && first + 1 === second) || first-2 === second){
    sum+=6;
    }

return sum;

}

  
  class DayTwoComponent extends React.Component{
  
    mounted = false;
  
  
    componentDidMount(){
      if (!this.mounted){
        this.mounted = true;
      
      let doc = document.getElementById("DayTwoComponent");
  
      let dayTwo_Sample = buttonFactory("Day Two: Sample");
      dayTwo_Sample.addEventListener('click', () => dayTwo(true, false));
      doc.append(dayTwo_Sample);
  
      let dayTwo_Input = buttonFactory("Day Two: Input");
      dayTwo_Input.addEventListener('click', () => dayTwo(false, false));
      doc.append(dayTwo_Input);
  
      let dayTwo_Sample_Bonus = buttonFactory("Day Two: Sample (Bonus)");
      dayTwo_Sample_Bonus.addEventListener('click', () => dayTwo(true, true));
      doc.append(dayTwo_Sample_Bonus);
  
  
      let dayTwo_Input_Bonus = buttonFactory("Day Two: Input (Bonus)");
      dayTwo_Input_Bonus.addEventListener('click', () => dayTwo(false, true));
      doc.append(dayTwo_Input_Bonus);
    }
    }
  
    render(){
      return(
      <div id="DayTwoComponent"><h2>Day Two:</h2></div>
      )
    }
  }

  export {DayTwoComponent};