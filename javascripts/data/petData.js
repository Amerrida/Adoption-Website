import {setPets, getPetz, petBuilder} from "../components/petComponents.js"

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);                
    petBuilder(getPetz());
};

function executeThisCodeIfXhrFails () {
    console.log("I dont understand");
};

const getPetsData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXhrFails);
    myRequest.open("GET", "./db/petComponent.json");  
    myRequest.send();
};

export {getPetsData};