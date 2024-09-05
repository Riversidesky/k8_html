//문자열 연습
let s = 'Hello JS!!'

console.log('문자열 :', s)
console.log('문자열 길이 :', s.length)
console.log('문자열대문자변환 :', s.toUpperCase())
console.log('문자열소문자변환 :', s.toLowerCase())
console.log('숫자확인 :', isNaN(s))
console.log('첫번째글자 :', s.charAt(0))
console.log('첫번째글자 :', s[0])
console.log('마지막글자 :', s[s.length-1])
console.log('마지막글자 :', s.charAt(s.length-1))
console.log('마지막글자 :', s.slice(-1))
console.log('*문자열분리* :', s.split(''))
//문자열 순회
for(let c of s) {
    console.log(c)
}

for(let i in s) {
    console.log(i, '=>', s[i])
}
console.log('JS문자열 확인 :', s.indexOf('JS'))
console.log('JS문자열 확인 :', s.includes('JS'))

console.log('문자열 추출 :', s.slice(5, 0))
console.log('문자열 추출 :', s.substring(5, 0))

// s = '1234'
// console.log('문자열 :', s)
// console.log('숫자확인 :', isNaN(s))

// 실행하면
// 문자열 : Hello JS!!
// 09_str.js:5 문자열 길이 : 10
// 09_str.js:6 문자열대문자변환 : HELLO JS!!
// 09_str.js:7 문자열소문자변환 : hello js!!
// 09_str.js:8 숫자확인 : true
// 09_str.js:9 첫번째글자 : H
// 09_str.js:10 첫번째글자 : H
// 09_str.js:11 마지막글자 : !
// 09_str.js:12 마지막글자 : !
// 09_str.js:13 마지막글자 : !
// 09_str.js:14 *문자열분리* : (10) ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'S', '!', '!']
// 09_str.js:17 H
// 09_str.js:17 e
// 209_str.js:17 l
// 09_str.js:17 o
// 09_str.js:17  
// 09_str.js:17 J
// 09_str.js:17 S
// 209_str.js:17 !
// 09_str.js:21 0 => H
// 09_str.js:21 1 => e
// 09_str.js:21 2 => l
// 09_str.js:21 3 => l
// 09_str.js:21 4 => o
// 09_str.js:21 5 =>  
// 09_str.js:21 6 => J
// 09_str.js:21 7 => S
// 09_str.js:21 8 => !
// 09_str.js:21 9 => !
// 09_str.js:23 JS문자열 확인 : 6
// 09_str.js:24 JS문자열 확인 : true
