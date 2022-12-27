const searchInput = document.querySelector('input')
searchInput.addEventListener('keyup', liveSearch)


function liveSearch(){
    const cards = document.querySelectorAll('.cards')
    const searchQuery = document.getElementById('searchBox').value
    cards.forEach( card => {
        card.innerText.toLowerCase().includes(searchQuery.toLowerCase()) ?
        card.classList.remove('hidden') : card.classList.add('hidden')
    })
}
