// Write your helper functions here!
try{
    require('isomorphic-fetch');
}catch(e){
    //do nothing
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }else if(isNaN(Number(testInput))){
        return "Not a Number";
    }else{
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        return "Empty";    
    }else{

        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if(isNaN(Number(fuelLevel))){
            return "Invalid";
        }else if(Number(fuelLevel) < 10000){
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            if(isNaN(Number(cargoLevel))){
                return "Invalid";
            }else if(Number(cargoLevel) > 10000){
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            }else{
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            }
            list.style.visibility = "visible";
        }else{
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            if(isNaN(Number(cargoLevel))){
                return "Invalid";
            }else if(Number(cargoLevel) > 10000){
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            }else{
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
            }
            list.style.visibility = "visible";
        } 
            
        return "valid";
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}
try{
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
}catch(e){
    //do nothing
}
