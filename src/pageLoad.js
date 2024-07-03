import createRestaurantHomePage from './restaurant'
import createMenu from './menu';
import createAbout from './about';

function initLoad() {
    const contentDiv = document.getElementById('content')

    const homeBtn = document.getElementById('homeBtn')
    homeBtn.className = 'navBtn'
    const menuBtn = document.getElementById('menuBtn')
    menuBtn.className = 'navBtn'
    const aboutBtn = document.getElementById('aboutBtn')
    aboutBtn.className = 'navBtn'

    createRestaurantHomePage();

    homeBtn.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        createRestaurantHomePage()
    })

    menuBtn.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        createMenu();
    })

    aboutBtn.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        createAbout();
    })


    
    
    
}

export default initLoad