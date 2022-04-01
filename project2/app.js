// const body = document.querySelector("body")
// const button = document.querySelector("#click")
// const arrHex = [1,2,3,4,5,7,8,9,0,'a','b','c','d','e','f']
// button.addEventListener("click", changeColorHandler)
// function makeHex (arr){
//     let index = Math.floor(Math.random() * arrHex.length )
//     let formHex =["#"]
//     for(let i =0; i <arr.length; i++) {
//         if(formHex.length < 7) {
//             formHex.push(arr[index], i)    
//          } 
//     }
//     console.log(formHex.join(""))
//    return formHex.join("")
// }
// function changeColorHandler (event) {
//     body.style.backgroundColor = makeHex(arrHex)
//     button.style.color = makeHex(arrHex)
    
// }

(function() {
    const button = document.querySelector('#click')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
         
        }
        body.style.backgroundColor = hex
        console.log(hex)
    }
} )()