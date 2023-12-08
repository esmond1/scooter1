import { User } from "./User.mjs";
import { Scooter } from "./Scooter.mjs";
import { Station } from "./station.mjs"; //declared but value is never read
const Station = new Station();


export class ScooterApp { 
    constructor() { 
        this.stations = [];
        //creates empty array
        this.registeredUsers = []; 
    } 
    
    registerUser(username, password, age) { 

    // //If the user is not already registered AND
    //  is 18 or older, then add them as a new registered user.  
    //  Log to the console that the user has been registered and return the user.


    //IsEligibleToRegiser

    if(age < 18) { 
        throw new Error("too young to register");
    }
    if(this.registeredUsers[username]) { 
        throw new Error("user has been registered")
    }

    // need to initalize the properties of the new user object
    const user = new User(username, password, age)
    
    // adds the new "user" obj to empty array
    this.registeredUsers[username] = user

    }

    loginUser(username, password) { 
        // retrieve "user" using username as key
        const user = this.registeredUsers[username] 
        // if statements to check if password correct
        if(!user || user.password!==password ) { 
            throw new Error("Incorrect credentials, please try again.");
        }
        console.log("user has been logged in");
    }
    logoutUser(username) { 
        const user = this.registeredUsers[username];
        if(!user) { 
            throw new Error("no such user is logged in")
        }
    }


// This method is called by the Scooter company’s home office when new scooters are deployed.
// Create a new scooter, add it to the station’s scooter list, and set its station property. 
// Log created new scooter to the console. Return the scooter.
// Throws no such station error if the station does not exist.

    createScooter(station) { 
        const scooter = new Scooter(station);
        if (!this.stations[station]) { 
            this.stations = []; 
            this.stations.push(scooter);
            console.log("created new scooter");
            return scooter
            // this.stations = {};
            // this.stations[station].push(scooter) 
            // console.log("created new scooter");
            // return scooter;
    };
    }

//     dockScooter(scooter, station)
// Add the scooter to the station’s scooter list, and dock it.
// Log scooter is docked to the console.
// Throws no such station error if the station does not exist.
// Throws scooter already at station error if the scooter is already there.

    dockScooter(scooter, station) { 
        this.stations.push(scooter) 
        console.log("scooter is docked to console");
        if(!this.stations[station]) { 
            throw new Error("no such station exists");
        }
        if(this.stations[station.scooter]) { 
            throw new Error("scooter is already there");
        }

        // if(!this.stations[station]) { 
        //     throw new Error("no such station exists");
        // } if(!this.stations.hasOwnProperty(scooter)); 
        // { 
        //     throw new Error("scooter already at station");
        // }
        // console.log("scooter is docked");
    }
//Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. Log scooter is rented to the console.
//If the scooter is already rented, throw the error scooter already rented.
    rentScooter(scooter, user) { 
        if(!this.stations[scooter]) { 
            throw new Error("scooter already rented.");
        }
        this.stations[station].pop(scooter);
        return console.log("scooter is rented");

    }
// You will use this handy method when testing your ScooterApp.
// Log the list of registered users to the console.
// Log the list of stations and how many scooters are at each station to the console.
// Take a moment to format it nicely so you can read it.
    print() { 
        console.log("Registered Stations: ", this.stations);
        console.log("Registered Users: ",this.registeredUsers)

    }
}

// var scooterApp = new ScooterApp();
// console.log(scooterApp.loginUser("", ""));

