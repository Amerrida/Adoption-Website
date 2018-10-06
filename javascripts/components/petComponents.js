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
            `<div class="card ${thepetsArray[i].type}" style="width: 18rem;">
            <h5 class="card-title">${thepetsArray[i].name}</h5>
            <img class="card-img" src="${thepetsArray[i].imageUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Color: ${thepetsArray[i].color}</p>
                <p class="card-text">Type: ${thepetsArray[i].type}</p>
            </div>
          </div>`;
    };
    printToDom(domString, 'pets');
}


const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        petBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
        petBuilder(filteredPets);
}};

export {setPets, getPetz, petBuilder, sortPets};