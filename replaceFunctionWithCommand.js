function isBeeLethal(amtOfBees) {
    let venomAmt = 0.3 * 100;
    let beeAmt = amtOfBees;
    var totalAmtStings = 0;    

    totalAmtStings = (venomAmt * beeAmt) / 100

    if(totalAmtStings > 55) {
        return console.log("total 🐝 stings: " + amtOfBees + ", 🧪 venom: " + totalAmtStings + "mg, result: 💀");
    } else {
        return console.log("total 🐝 stings: " + amtOfBees + ", 🧪 venom: " + totalAmtStings + "mg, result: you are ok if not allergic");
    }

}

isBeeLethal(188);