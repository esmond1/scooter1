// create a station.mjs file
//create a station
//create a function for station that adds to array of stations (refer to registerUser)
// pass through station in the create/dockscooter functions
// create a scooter
// dock scooter using scooter & station object
export class Station{ 
    constructor() { 

        this.registeredUsers = {}; // initalize ru as an empty object to store info of registered users
        this.stations = []; // initalize st as an empty array to store
        this.age = 18;
    }
    createStation(station){ 
        this.stations.push(station);
    }
}