const main = document.querySelector('.main')
const ulElement = document.querySelector('ul')
const input = document.querySelector('input')


const handleFilter = (_v, data) => {
    // const {value} = event
    // let value = document.querySelector('#searchBox').value
    return !_v ? data : data.filter(filteredData => filteredData.toLowerCase()
            .includes(_v.toLowerCase())) 
}

const renderItem = (items) => {
    ulElement.innerHTML=''
    items.map((food, i) => {
        const li = document.createElement('li')
        li.className=i
        ulElement.append(li)
        li.textContent = food
    })
}
renderItem(food)

const handleInput = (e) => {
    console.log(e)
    const {value} = e
    let filteredItems = value && handleFilter(value, food)
    filteredItems.length > 0  ? renderItem(filteredItems) : renderItem(food)
}
input.addEventListener('keyup', function(){handleInput(this)} )