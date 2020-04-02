class Parent{
    constructor(){
        this.fatherName = "Kunal";
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.childName = name;
    }
}
const baby = new child("Joni");
const baby2 = new child("Roni");
console.log(baby,baby2);

