// class Username {
//     constructor(name) {
//         this.name = name
//     }
//     get _name(){
//        return this.name
//     }
//     set _name(value){
//         if(value < 4){
//             alert("value must not be less than 4")
//             return;
//         }
//         return this.name = value
//     }
// }

// let user = new Username("John")
// user.name = "wasiu"
// alert(user.name)
class PersonBMI {
    constructor(mass, height){
        this.mass = mass;
        this.height = height;
    }
    getBMI (){
        return this.mass / (this.height * this.height) 
    }
}

const John = new PersonBMI(75, 17.5)
const Mark = new PersonBMI(63, 12.5)
let johnBMI = John.getBMI()
let markBMI = Mark.getBMI()
const greaterBmi = `Is John BMI greater than Mark's BMI ? ${johnBMI > markBMI}`
console.log( johnBMI, markBMI, greaterBmi)