//select값 변경

const handleChange = (s1, s2, l1, l2, t1, t2) => {
    if (s1.value === '˚C') {
        s2.value = "˚F"
    }
    else {
        s2.value = "˚C"
    }

    l1.innerHTML = s1.value
    l2.innerHTML = s2.value

    t1.value = ''
    t2.value = ''
}

document.addEventListener('DOMContentLoaded', ()=>{
    //요소 가져오기
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');
    
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const lb1 = document.querySelector("label[for=txt1]") // 속성 셀렉터
    const lb2 = document.querySelector("label[for=txt2]")

    //select box
    sel1.addEventListener('change', ()=>{
        handleChange(sel1, sel2, lb1, lb2, txt1, txt2);
        })

    sel2.addEventListener('change', ()=>{
        handleChange(sel2, sel1, lb2, lb1, txt1, txt2);
    })

    txt1.addEventListener('input', ()=>{
        console.log(txt1.value);
        if (sel1.value === '˚C') {
            txt2.value = (parseFloat(txt1.value) * 1.8 + 32).toFixed(1)
        }
        else {
            txt2.value = ((parseFloat(txt1.value)- 32) / 1.8).toFixed(1)
        }
    })
})

//	[°F] = [°C] × 1.8 + 32
//	[°C] = ([°F] − 32) / 1.8