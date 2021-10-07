const modalButton = document.querySelector('.modal-button');
const modalClose = document.querySelector('.modal-close');
const renderModal = document.querySelector('.modal')
const html = document.querySelector('html')

modalButton.addEventListener('click', function() {
    renderModal.classList.toggle('is-active');
    html.classList.toggle('is-clipped')
})

modalClose.addEventListener('click', function() {
    renderModal.classList.toggle('is-active');
    html.classList.toggle('is-clipped')
})