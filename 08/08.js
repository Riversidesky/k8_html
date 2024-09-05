document.addEventListener("DOMContentLoaded", ()=>{
    let rd = Math.floor(Math.random()*100) +1
    console.log(rd)

    const bt = document.querySelector('#bt')
    const imgsrc = document.querySelectorAll('img')
    const number = document.querySelector('#number')
    console.log(imgsrc)

    bt.addEventListener('click', ()=>{
        if (number.value == rd) {
            imgsrc[1].setAttribute('src', `../img/good.png`);
            number.value = ''
        }
        else if (number.value < rd) {
            imgsrc[1].setAttribute('src', `../img/up.png`);
        }
        else if (number.value > rd) {
            imgsrc[1].setAttribute('src', `../img/down.png`);
        }
    })
})