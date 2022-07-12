// class BMIcalculator {
//     constructor(name, mass, height){
//       this.name = name 
//       this.mass = mass 
//       this.height = height
      
//     }
//     bmi(){
//         return this.mass / (this.height * this.height)
//     }
// }
// let username = document.querySelector("#name")
//     userMass = document.querySelector("#mass")
//     userHeight =  document.querySelector("#height");


// let user = new BMIcalculator(userMass, userHeight)

//get dom parameter 
function getBmiParam () {
    let username = document.querySelector("#name").value,
    userMass = document.querySelector("#mass").value,
    userHeight =  document.querySelector("#height").value,
    formSubmit = document.querySelector("#formSubmit");
    userBmi = document.querySelector("#result")
    return {
            name : username,
            mass : userMass,
            height : userHeight,
            form : formSubmit,
            bmi : userBmi
    }
}
getBmiParam()



//calculate bmi
// (function bmiCal (useBMI) {
//     let dom = useBMI()
//     const bmiResult = dom.userMass.value / (dom.userHeight.value * dom.userHeight.value)
//     dom.bmi.textContent = bmiResult 
// })(getBmiParam)


//eventlistener

// function eventManager (useBMI){
//        if("submit") {
//         let dom = useBMI()
    
// }
//        }
dom.form.addEventListener("click", function(){
    getBmiParam()
    console.log("this is dom" + dom.name)
    const bmiResult = dom.mass / (dom.height * dom.height)
    //dom.bmi.textContent = bmiResult 
 })






