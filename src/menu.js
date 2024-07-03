
const createMenu = () => {
    const content = document.getElementById('content')
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menuDiv'

    const title = document.createElement('h1')
    title.textContent = "Supreme Menu"
    const menuItems = ['fried rice', 'chicken soup', 'steak', 'double stack pancake', 'family bundle meal']
    const menuList = document.createElement('ul')
    menuItems.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = `<li>${item}</li>`
        menuList.appendChild(li)
    })

    menuDiv.append(title)
    menuDiv.append(menuList)
    content.append(menuDiv)
}

export default createMenu