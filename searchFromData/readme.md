const renderItem = (items) => {
    ulElement.innerHTML = ''
    items && items.map((food) => {
        const li = `<li>${food}</li>`
        ulElement.innerHTML += li
    })