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
        listedPlanets = json;
        let planetSelected = pickPlanet(listedPlanets);
        helper.addDestinationInfo(document, planetSelected.name, planetSelected.diameter, planetSelected.star, planetSelected.distance, planetSelected.moons, planetSelected.imageUrl);
    //    console.log(json);
        
//    }).then(function () {
//        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    const faultyItemsElement = document.getElementById("faultyItems");
    faultyItemsElement.style.visibility = "hidden";
    let form = document.querySelector("form");//.getElementsByClassName("formField");//.querySelector("form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[id=pName]");
        let copilotNameInput = document.querySelector("input[id=cName]");
        let fuelLevelInput = document.querySelector("input[id=fuelLvl]");
        let cargoMassInput = document.querySelector("input[id=cargoKg]");
        helper.formSubmission(document,faultyItemsElement, pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput);
        event.preventDefault();
        // faultyItemsElement.style.visibility = "visible";
    });

});