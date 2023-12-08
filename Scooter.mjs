export class Scooter{
    static #serial = 0;
    static nextSerial(){ 
        Scooter.#serial++
        return Scooter.#serial
    }
    constructor(){ 
        this.station = null;
        this.user = null;
        this.serial = Scooter.nextSerial()
        this.charge = 100
        this.isBroken = false
    }
}




// station: string; the station the scooter is located at, or null if checked out
// user: the User who checked out the Scooter, or null if docked
// serial: a number assigned sequentially from nextSerial
// nextSerial: a static number which starts at 1 and increments each time a new serial number is assigned
// charge: a number from 0 (no charge at all) to 100 (fully charged)
// isBroken: boolean