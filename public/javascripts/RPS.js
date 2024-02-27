class RPS {
    constructor() {
        this.attackList = ["pierre", "feuille", "ciseaux"];
    }

    beginAttack(userResponseIndex) {
        const machineResponseIndex = Math.floor(Math.random() * this.attackList.length);
        console.log("IndexMachine = " + machineResponseIndex, "ElementMachine = " +this.attackList[machineResponseIndex]);
        const result = this.checkAttack(userResponseIndex, machineResponseIndex);
        console.log("IndexUser = " + userResponseIndex, "ElementUser = " +this.attackList[userResponseIndex]);

        let data = {
            IndexMachine: machineResponseIndex,
            AttackNameMachine: this.attackList[machineResponseIndex],
            AttackNameUser: this.attackList[userResponseIndex],
            Result: result
        };
        
        return data
    }

    checkAttack(userIndex, machineIndex) {
        if (userIndex === machineIndex) {
            return "Égalité";
        } else if ((userIndex === 0 && machineIndex === 2) ||
                   (userIndex === 1 && machineIndex === 0) ||
                   (userIndex === 2 && machineIndex === 1)) {
            return "L'utilisateur a gagné";
        } else {
            return "La machine a gagné";
        }
    }
}

module.exports = RPS;