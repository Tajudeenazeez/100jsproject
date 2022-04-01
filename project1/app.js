//project 0ne
(function () {
    const body = document.querySelector("body")
    const button = document.querySelector("#click")
    const color = ['red', 'blue', 'green', 'tomato', 'yellow', 'purple', 'black', 'grey', 'brown', 'white']

    button.addEventListener("click", changeColorHandler)

    function changeColorHandler (event) {
        body.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
        button.style.color = color[Math.floor(Math.random() * color.length)]  
    }

}())