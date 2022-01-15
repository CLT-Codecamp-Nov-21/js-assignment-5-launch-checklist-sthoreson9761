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
        window.alert("All fields are required!");   
        console.log(alert("All fields are required!"));     
    }else{

    const pilotNode = document.getElementById("pilotStatus");
    const copilotNode = document.getElementById("copilotStatus");
    const fuelLevelNode = document.getElementById("fuelStatus");
    const cargoStatusNode = document.getElementById("cargoStatus");
        
        pilotNode.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotNode.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById("pilotStatus") = pilotNode;
        document.getElementById("copilotStatus") = copilotNode;

    if(Number(fuelLevel) < 10000 || isNaN(Number(fuelLevel))){
        fuelLevelNode.innerHTML = "Fuel level too low for launch";
        document.getElementById("fuelStatus") = fuelLevelNode;
        document.getElementById("launchStatus") = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        if(Number(cargoLevel) > 10000 || isNaN(Number(cargoLevel))){
            cargoStatusNode.innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("cargoStatus") = cargoStatusNode;
        }else{
            cargoStatusNode.innerHTML = "Cargo mass low enough for launch";
            document.getElementById("cargoStatus") = cargoStatusNode;
        }
    }else{
        fuelLevelNode.innerHTML = "Fuel level high enough for launch";
        document.getElementById("fuelStatus") = fuelLevelNode;
        if(Number(cargoLevel) > 10000 || isNaN(Number(cargoLevel))){
            cargoStatusNode.innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("cargoStatus") = cargoStatusNode;
            document.getElementById("launchStatus") = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        }else{
            cargoStatusNode.innerHTML = "Cargo mass low enough for launch";
            document.getElementById("cargoStatus") = cargoStatusNode;
            document.getElementById("launchStatus") = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        }
    } 
    
    // if(Number(cargoLevel) > 10000 || isNaN(Number(cargoLevel))){
    //     cargoStatusNode.innerHTML = "Cargo mass too heavy for launch";
    //     document.getElementById("cargoStatus") = cargoStatusNode;
    //     // document.getElementById("launchStatus") = "Shuttle Not Ready for Launch";
    // }else{
    //     cargoStatusNode.innerHTML = "Cargo mass low enough for launch";
    //     document.getElementById("cargoStatus") = cargoStatusNode;
    //     // document.getElementById("launchStatus") = "Shuttle is Ready for Launch";
    // }

    // if(launch)
    // if(this.cargoLevel === "Cargo mass too heavy for launch"){
    //     return "Shuttle Not Ready for Launch";
    // }else{
    //     return "Shuttle is Ready for Launch";
    // }
    // for(let item in inputContainer){
    //     if(inputContainer[item] === "Empty"){
    //         itemText = "Empty";
    //     }else if(inputContainer[item] === "Not a Number"){
    //         if(item === "fuelLevel" || item === "cargoLevel"){
    //             if(item === "fuelLevel"){
    //                 listItems[item] = `${item} is too low for launch`;
    //             }else{
    //                 listItems[item] = `${item} is too heavy for launch`;
    //             }
    //         }else if(item === "pilot"){
    //             listItems[item] = `Pilot ${pilot} is ready for launch`;
    //         }else{
    //             listItems[item] = `Co-pilot ${copilot} is ready for launch`;
    //         }
    //     }else{ //Is a Number
    //         if(item === "fuelLevel"){
    //             if(Number(fuelLevel)>10000){
    //                 listItems["fuelLevel"] = "Fuel level high enough for launch";
    //             }else{
    //                 listItems["fuelLevel"] = "Fuel level too low for launch";
    //             }
    //         }else{
    //             if(Number(cargoLevel)<10000){
    //                 listItems["cargoLevel"] = "Cargo mass low enough for launch";
    //             }else{
    //                 listItems["cargoLevel"] = "Cargo mass too heavy for launch";
    //             }
    //         }
    //     }
    // }
    
    
    // let propagation = true;
    // // else{
    //     if(listItems["status"] === "Shuttle Not Ready for Launch"){
    //         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    //         document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
    //     }else{
    //         document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    //         document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
    //     }
    //     let listID = list.getAttribute("id");
    //     if(document.getElementById(listID).style.visibility === "hidden"){
    //         document.getElementById(listID).style.visibility = "visible";
    //     }
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

    // return itemText;
}
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json();
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
