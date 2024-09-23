// PHONE BLOCK
const phoneinput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
   if (regExp.test(phoneinput.value)) {
       phoneSpan.innerHTML = 'Всё правильно'
       phoneSpan.style.color = 'green'
   } else {
         phoneSpan.innerHTML = 'Номер указан не верно'
         phoneSpan.style.color = 'red'
   }
}

/// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs =document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContent.forEach( (item) => {
        item.style.display = 'none'
    })
    tabs.forEach( (item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const target = event.target
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach( (item, i) => {
            if (event.target === item) {
                hideTabContent(i)
                showTabContent(i)

            }
        })
    }
}
let slideIndex = 0
const slideTime = () =>{
    slideIndex++
    if(slideIndex>4){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slideTime , 3000)


// CARD SWITCHER
const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-Prev')
const btnNext = document.querySelector('#btn-next')

btnNext.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/${card}ID')
        .then(response => response.json())
        .then(data => {
            card.innerHTML = ``