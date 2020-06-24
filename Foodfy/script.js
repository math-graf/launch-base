const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')
const modalTitle = document.querySelector('.modal-title')
const modalText = document.querySelector('.modal-text')

for (let recipe of recipes) {
    recipe.querySelector('img').addEventListener('click', function() {
        const imgSrc = recipe.querySelector('img').getAttribute('src')
        const recipeTitle = recipe.querySelector('h3').innerText
        const recipeText = recipe.querySelector('p').innerText

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = imgSrc
        modalOverlay.querySelector('h2').innerText = recipeTitle
        modalOverlay.querySelector('p').innerText = recipeText
    })
}

modalOverlay.querySelector('.close-modal span').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})