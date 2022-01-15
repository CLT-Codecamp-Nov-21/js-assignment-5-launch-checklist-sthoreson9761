// Write your JavaScript code here!

// try{
//     const helper = require("./scriptHelper");
// }catch(e){
//     //do nothing
// }

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (json) {
        // listedPlanets = json;
        // console.log(json);
        listedPlanets = pickPlanet(json);
        addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"], listedPlanets["moons"], listedPlanets["image"]);
       console.log(listedPlanets);
        
//    }).then(function () {
//        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    const faultyItemsElement = document.getElementById("faultyItems");
    faultyItemsElement.style.visibility = "hidden";
    let form = document.querySelector("form");//.getElementsByClassName("formField");//.querySelector("form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        // let pilotNameInput = document.querySelector("input[id=pName]");
        // let copilotNameInput = document.querySelector("input[id=cName]");
        // let fuelLevelInput = document.querySelector("input[id=fuelLvl]");
        // let cargoMassInput = document.querySelector("input[id=cargoKg]");
        formSubmission(document, faultyItemsElement, document.querySelector("input[id=pName]"), document.querySelector("input[id=cName]"), document.querySelector("input[id=fuelLvl]"), document.querySelector("input[id=cargoKg]"));
        event.preventDefault();
        
        // faultyItemsElement.style.visibility = "visible";
    });
    

});