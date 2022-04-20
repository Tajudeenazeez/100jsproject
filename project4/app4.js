const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const frameText = document.querySelector("#frame-text")

const frameForm = document.querySelector("#frameForm")

frameForm.addEventListener("submit", onSubmit)

btn1.addEventListener("click", addOne)
btn2.addEventListener("click", minusOne)

function addOne(e){
    frameText.style.color = 'red'
    frameText.textContent++

}
function minusOne(e){
    frameText.style.color = 'white'
    frameText.textContent--

}

function onSubmit (e) {
    e.preventDefault();

}

