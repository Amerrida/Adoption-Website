import {printToDom} from "../helpers/util.js"

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petBuilder = (thepetsArray) => {
    let domString = '';
    for (let i = 0; i < thepetsArray.length; i ++){
        domString += 
         `<div class="card col-2 m-3" style="width: 18rem;">
            <h5 class="card-title mx-auto">${thepetsArray[i].name}</h5>
            <img class="card-img" src="${thepetsArray[i].imageUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text text-center"><strong>Color:</strong> ${thepetsArray[i].color}</p>
                <p class="card-text text-center"><strong>Special Skill:</strong> ${thepetsArray[i].specialSkill}</p>
                <p class="card-text text-center font-weight-bold  ${thepetsArray[i].type}">${thepetsArray[i].type.toUpperCase()}</p>
            </div>
          </div>`;
    };
    printToDom(domString, 'pets');


};

export {setPets, getPetz, petBuilder,pets};