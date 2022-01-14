// Write your JavaScript code here!

// try{
//     ("./scriptHelper");
// }catch(e){
//     //do nothing
// }

window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = myFetch();
//    listedPlanetsResponse.then(function (json) {
//        console.log(json);
// //    }).then(function () {
// //        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    });
    const faultyItemsElement = document.getElementById("faultyItems");
    faultyItemsElement.style.visibility = "hidden";
    let form = document.getElementById("launchForm").querySelector("div");
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[id=pName]");
        let copilotNameInput = document.querySelector("input[id=cName]");
        let fuelLevelInput = document.querySelector("input[id=fuelLvl]");
        let cargoMassInput = document.querySelector("input[id=cargoKg]");
        formSubmission(window.document,faultyItemsElement, pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput);
    });

});