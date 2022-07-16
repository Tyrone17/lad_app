'use strict';

let form = document.getElementsByName("form");

if (form !=""){
    console.log("yes");
    let array = [];
    array = document.getElementsByClassName("form-control");
    //console.log(array);
    console.log(array[1]);
   
} else {
    console.log("fail");
}
