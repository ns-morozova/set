// TODO: write your code here

export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(member) {
        if (this.members.has(member)) {
            throw new Error ('Такой персонаж уже есть!');
        }

        this.members.add(member);
    }

    addAll(...memberAll){
        for (let memberOne of memberAll) {
            this.members.add(memberOne);
        }
    }

    toArray(){
        return Array.from(this.members);
    }

}
