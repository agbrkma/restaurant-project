
const  createRestaurantHomePage = () => {
    const content = document.getElementById('content')
    const title = document.createElement('h1')
    title.textContent = 'Supreme Dining Restaurant'
    const restaurantImg = new Image()
    restaurantImg.src = 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    restaurantImg.id = 'restaurant-img'
    const homePageText = document.createElement('p')
    homePageText.textContent = 'Welcome to Supreme Dining Restaurant, where we strive to provide the most elegant atmosphere that is conducive to enjoying great dishes. Here, we offer exquisite options brought to you by top chefs from all around the world. You are guaranteed to enjoy your stay.'

    content.append(title)
    content.append(restaurantImg)
    content.append(homePageText)
}

export default createRestaurantHomePage