document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector('.sec')
    const spanValue = document.querySelectorAll('span')
    bt.addEventListener('click', (e) => {
        e.defaultPrevented();
    
        let arr = [];

        while(arr.length < 7) {
            let n = Math.floor(Math.random()*45) +1; // 1~45
            if (!arr.includes(n) ) {
                arr.push(n);
            }
        } 
        console.log(arr)

        for(let i=0; i<spanValue.length; i++) {
            spanValue[i].textContent = arr[i]
            spanValue[i-1].innerHTML = "+"
        }
    })
})