(function () {
    const input = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const text = document.querySelector(".text")
    const formfield = document.querySelector("#formfield")

    formfield.addEventListener("submit", showMessage)
    function showMessage (event) {
        event.preventDefault()
        let userInput = input.value
        input.value = ""
        text.textContent = userInput
    }
}())