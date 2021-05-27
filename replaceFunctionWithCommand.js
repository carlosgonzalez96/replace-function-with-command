function isBeeLethal(amtOfBees) {
    return new Bee(amtOfBees).execute();

}

class Bee {
    constructor(amtOfBees) {
        this._amtOfBees = amtOfBees;
    }

    execute() {
        this._venomAmt = 0.3 * 100;
        this._beeAmt = this._amtOfBees;
        this._totalAmtStings = 0;    

        this._totalAmtStings = (this._venomAmt * this._beeAmt) / 100

        //lots more code

        this.printVenomInfo();
    }

    printVenomInfo() {
    return console.log(`total 🐝 stings: ${this._amtOfBees}, 🧪 venom: ${this._totalAmtStings}mg, result: ${this.result()}`);
    }

    result() {
        if(this._totalAmtStings > 55) {
            return "💀";
        } else {
            return "you are ok if not allergic";
        }
    }

}

isBeeLethal(200)
isBeeLethal(2)