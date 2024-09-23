// PHONE BLOCK 

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_span')

const regExp = /\+996 [2579]\d{2}-\d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp) {
         
    }
}


//TAB SLIDER
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

//convert

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch("../data/convertor.json");
        console.log(response)
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const convert = async (elem, target, target2) => {
    elem.oninput = async () => {
        try {
            const response = await fetchData();

            target.forEach(e => {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2);
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2);
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2);
                }
            });

            if (elem.value === '') {
                target.forEach(e => e.value = '');
                elem.value === '' && (target.forEach(e => e.value = ''));
            }
        } catch (error) {
            console.error("Conversion error:", error);
        }
    };
};

convert(som, [usd, eur]);
convert(usd, [som, eur]);
convert(eur, [som, usd]);





