const openModalButton  = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
closeModalButton.onclick = () => closeModal()
openModalButton.onclick = () => openModal()
modal.onclick = () => {
    if (event.target === modal) {
        closeModal()
    }
}

let switchModal = true

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight && switchModal === true){
        openModal()
        switchModal =false
    }
    window.removeEventListener('scroll', openModal)
})
setRandomColors(() => {openModal()}, 10000)