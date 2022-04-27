
const pointerRight = document.getElementById("pointer-right")
console.log(pointerRight)
const pointerLeft = document.getElementById("pointer-left")
const imgSlider =  document.querySelector("#image")
const imageArr = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"]
const index = Math.floor(Math.random() * 5)

function randomSlider () {
    imgSlider.src = `img/${imageArr[index]}`
}
randomSlider()

pointerRight.addEventListener("click", () => {
    imgSlider.src = `img/${imageArr[index]}` 
    imgSlider.style.backgroundColor = "green"
})

pointerLeft.addEventListener("click", () => {
    imgSlider.src = `img/${imageArr[index]}`
    imgSlider.style.backgroundColor = "green"
})
