import {petBuilder,pets} from "../components/petComponents.js"


const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catButton = document.getElementById("cat");
    const dogButton = document.getElementById("dog");
    const dinoButton = document.getElementById("dino");

    allButton.addEventListener("click", sortPets);
    catButton.addEventListener("click", sortPets);
    dogButton.addEventListener("click", sortPets);
    dinoButton.addEventListener("click", sortPets);
};


const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        petBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
        petBuilder(filteredPets);
}};

export {sortPets};







export {sortEvents};