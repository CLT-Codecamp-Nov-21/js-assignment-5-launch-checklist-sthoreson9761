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
        alert("All fields are required!");      
    }else{

    // const pilotNode = document.getElementById("pilotStatus");
    // const copilotNode = document.getElementById("copilotStatus");
    // const fuelLevelNode = document.getElementById("fuelStatus");
    // const cargoStatusNode = document.getElementById("cargoStatus");

        list.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        list.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if(Number(fuelLevel) < 10000 || isNaN(Number(fuelLevel))){
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        if(Number(cargoLevel) > 10000 || isNaN(Number(cargoLevel))){
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        }else{
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
    }else{
        // fuelLevelNode.innerHTML = ;
        list.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        if(Number(cargoLevel) > 10000 || isNaN(Number(cargoLevel))){
            // cargoStatusNode.innerHTML = ;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").inner = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        }else{
            // cargoStatusNode.innerHTML = ;
            document.getElementById("cargoStatus") = "Cargo mass low enough for launch";
            document.getElementById("launchStatus") = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        }
    } 
    let listId = list.getAttribute("id");
        document.getElementById(listId).innerHTML = list;
        list.style.visibility = "visible";    
    // itemText = `
        // <ol>
        //     <li id="pilotStatus" data-testid="pilotStatus">${listItems["pilot"]}</li>
        //     <li id="copilotStatus" data-testid="copilotStatus">${listItems["copilot"]}</li>
        //     <li id="fuelStatus" data-testid="fuelStatus">${listItems["fuelLevel"]}</li>
        //     <li id="cargoStatus" data-testid="cargoStatus">${listItems["cargoLevel"]}</li>
        // </ol>
        // `;        
        
    // }

    // return "itemText";
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
