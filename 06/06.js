document.addEventListener('DOMContentLoaded', () => {
    // const bt1 = document.getElementById('bt1');
    // const bt2 = document.getElementById('bt2');
    // const bt3 = document.getElementById('bt3');
    // const bt4 = document.getElementById('bt4');
    // const bt5 = document.getElementById('bt5');
    // const bt6 = document.getElementById('bt6');
    const bts = document.querySelectorAll("section > button"); // 배열로 가져옴
    console.log(bts)
    const imgs = document.querySelectorAll(".dice img");
    console.log(imgs)
    const ox = document.querySelector('.result');
    console.log(ox)
        

    for (let bt of bts) { // for (참조변수 : 배열) {참조변수};
        //       console.log(bt);
        bt.addEventListener('click', () => {
            let comN = Math.floor(Math.random()*6) + 1 ; //1~6

            
            imgs[0].setAttribute('src', `../img/${comN}.png`);


            console.log(bt.textContent.charAt(0)); //문자열
            let userN = parseInt(bt.textContent.charAt(0)); //문자열 int로 바꿔줌

            imgs[1].setAttribute('src', `../img/${userN}.png`);
            imgs[1].setAttribute('alt', `../img/${userN}`);


            if (comN === userN) {
                ox.textContent = "정답";
            } else {
                ox.textContent = "틀림";
            }
        })
    }
});
