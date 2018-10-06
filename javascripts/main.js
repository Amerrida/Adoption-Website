import {getPetsData} from "./data/petData.js"
import {sortEvents} from "./helpers/events.js"

const initializeApp = () => {
    getPetsData();
    sortEvents();

};

initializeApp();
