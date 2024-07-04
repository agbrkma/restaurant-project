

const createAbout = () => {
    const contentDiv = document.getElementById('content')

    const aboutDiv = document.createElement('div')
    aboutDiv.id = 'aboutDiv'
    
    const title = document.createElement('h1')
    title.textContent = 'Ways to Contact Us'
    const email = document.createElement('p')
    email.textContent = 'supremerestaurant@random.com'
    const phone = document.createElement('p')
    phone.textContent = '123-456-7890'
    const commentHeader = document.createElement('h3')
    commentHeader.textContent = 'Leave a Comment'
    const commentBox = document.createElement('input')
    commentBox.type = 'text'
    commentBox.id = 'commentBox'


    
    aboutDiv.append(title)
    aboutDiv.append(email)
    aboutDiv.append(phone)
    aboutDiv.append(commentHeader)
    aboutDiv.append(commentBox)

    contentDiv.append(aboutDiv)

}

export default createAbout