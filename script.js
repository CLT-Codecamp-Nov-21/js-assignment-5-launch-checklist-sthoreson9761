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
        listedPlanets = pickPlanet(json);
        addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"], listedPlanets["moons"], listedPlanets["image"]);
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    const faultyItemsElement = document.getElementById("faultyItems");
    faultyItemsElement.style.visibility = "hidden";
    let form = document.querySelector("#form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("div.formField input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("div.formField input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("div.formField input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("div.formField input[name=cargoMass]").value;
        if(formSubmission(document, faultyItemsElement, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Empty"){
            alert("All fields are required!");
        }else if(formSubmission(document, faultyItemsElement, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Invalid"){
            alert("Make sure to enter valid information for each field!");
        }
        event.preventDefault();
    });
    

});