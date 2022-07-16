'use strict';

let form = document.getElementsByName("form");
let array

if (form !=""){
    console.log("yes");
    array = document.getElementsByClassName("form-control");
    //because of this the id must therefore = label
    array = array[2].ariaLabel + ", " +  array[2].ariaValueText;
    //the above creates a value pair of the indexed consisiting of the label(which is the id value)
    // and the value which if empty, returns null
    JSON.stringify(array);
    array.substring(1, array.length-1);
    console.log(array);
    let result =  array.replace(", null", ", 0");
    console.log(result);
    
} else {
    console.log("fail");
}
