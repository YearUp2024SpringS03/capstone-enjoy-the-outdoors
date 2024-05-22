"use strict";
//input
const mountainCategory = document.getElementById("mountainCategory");
//output
const mountainName = document.getElementById("mountainName");
const mountainDescription = document.getElementById("mountainDescription");
const elevationInfo = document.getElementById("elevationInfo");
const difficultyLevel = document.getElementById("difficultyLevel");
const coordinates = document.getElementById("coordinates");

window.onload = function(){
    mountainCategory.onchange = onChangedMountainCategory;
    initializeMountainCategories();
}

function initializeMountainCategories(){
    for(let i = 0; i < mountainsArray.length; i++){
        addMountainToDropdown(mountainsArray[i].name);
    }
}

function addMountainToDropdown(mountainName){
    // console.log(mountainName);
    let newMountainOptions = document.createElement("option");
    newMountainOptions.value = mountainName;
    newMountainOptions.innerHTML = mountainName;

    mountainCategory.appendChild(newMountainOptions);
}

function onChangedMountainCategory(){
    console.log("hi");
    let arrayName = mountainCategory.value;
    // let arrayDesc = mountainsArray.desc;
    // let arrayCoords = mountainsArray.coords;
    // let arrayElev = mountainsArray.elevation;
    // console.log(arrayName);
    // console.log(arrayDesc );
    // console.log(arrayCoords);
    // console.log(arrayElev);
    for(let i = 0; i < mountainsArray.length; i++){
        if(mountainsArray[i].name == arrayName){
            displayMountain(mountainsArray[i]);
           // let theMountain = mountainsArray[i];
          
        
        }
    }
}


function displayMountain(mountain){
    mountainName.innerHTML = mountain.name;
    mountainDescription.innerHTML = mountain.desc;
    elevationInfo.innerHTML = mountain.elevation;
    difficultyLevel.innerHTML = mountain.effort;
    coordinates.innerHTML = mountain.coords.lat.lng;
}