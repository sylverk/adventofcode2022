import React from 'react';


function buttonFactory(title){
    let btn = document.createElement('input');
    btn.type = "button";
    btn.value = title;
    return btn;
}



export {buttonFactory};