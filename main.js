'use strict';

let array,Formdata, localData, localData2, view,  i

// function to save entered inputs to an array in local storage:
function btnClick () {
    array = document.getElementsByClassName("form-control");
    Formdata = []
    for (let i = 0; i < 19; i++) {
        Formdata.push(array[i].ariaLabel+"" +": "+ array[i].value);
        localData = localStorage.setItem(array[0].value+"_"+array[1].value,Formdata);

    }
    localData2 = localStorage.setItem("Formdata",Formdata)
}


// TO DO 
// 1. Fetch the array in the local storage to use in demo.html
view = localStorage.getItem("Formdata");
// This fetches the content as a string
console.log(view.search("Daniel"))