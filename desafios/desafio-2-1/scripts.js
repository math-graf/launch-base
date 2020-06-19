const modalOverlay = document.querySelector('.modal-overlay')
const buttons = document.querySelectorAll('.button')
const cards = document.querySelectorAll('.card')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function() {
        cards[i].style.border = '8px solid #F24F13'
        cards[i].style.transition = '500ms'
    })

    buttons[i].addEventListener('mouseleave', function() {
        cards[i].style.border = '5px solid #0476D9'
    })
    
    buttons[i].addEventListener('click', function() {
        const videoId = buttons[i].getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${videoId}`
    })
}

modalOverlay.querySelector('.close').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})