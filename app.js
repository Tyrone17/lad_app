'use strict';

let form = document.getElementsByName("form");
let sestateName = document.getElementById("estateName");
let sestateID = document.getElementById("estateID");
let sdod = document.getElementById("dod");
let spod = document.getElementById("pod");
let smaritalStatus = document.getElementById("maritalStatus");
let sestateNo = document.getElementById("estateNo");
let sexecFullNames = document.getElementById("execFullNames");
let sexecID = document.getElementById("execID");
let simmovable1Desc = document.getElementById("immovable1Desc");
let array,Formdata, i

// if (form !=""){
//     // console.log("yes");
//     // array = document.getElementsByClassName("form-control");
//     // //because of this the id must therefore = label
//     // array = array[2].ariaLabel + ", " +  array[2].ariaValueText;
//     // //the above creates a value pair of the indexed consisiting of the label(which is the id value)
//     // // and the value which if empty, returns null
//     // JSON.stringify(array);
//     // array.substring(1, array.length-1);
//     // console.log(array);
//     // let result =  array.replace(", null", ", 0");
//     // console.log(result);
//     array = document.getElementsByClassName("form-control");
    
//     Formdata = []
//     for (let i = 0; i < 19; i++) {
//         Formdata.push(array[i].ariaLabel+"" +", "+ array[i].ariaValueText);
//        // Formdata.push(array[i].replace("\" ","") + ","+  array[i].replace("\" ",""));
//     };
//     //console.log(array);
//     console.log(Formdata)
    
// } else {
//     console.log("fail");
// }

// Adding variables to set on load:

function btnClick () {
    array = document.getElementsByClassName("form-control");
    let localData

    Formdata = []
    for (let i = 0; i < 19; i++) {
        Formdata.push(array[i].ariaLabel+"" +", "+ array[i].value);
        localData = localStorage.setItem("Formdata",Formdata);
       // Formdata.push(array[i].replace("\" ","") + ","+  array[i].replace("\" ",""));
    };
    //console.log(array);
    console.log(Formdata)
}

function onInput () {
    let sestateName = document.getElementById("estateName");
    let sestateNameVal = sestateName.value;
    let estateName = localStorage.setItem("estateName", sestateNameVal);
}