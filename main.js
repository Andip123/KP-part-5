// // PERULANGAN 
// // WHILE DAN DO WHILE 

// for (let z = 1; z < 10; z++){
//     if (z % 2 !== 0 )console.log('data ke -', z)
// }

// let x = 1
// while (x <= 10) {
//     if (x % 2 !==0){
//     console.log('data ke x -', x)
//     }
//     x++ 
// }


// DO WHILE
// let y = 1
// do {
//     if (y % 2 !==0) {
//         console.log('data ke y -', y )
//     }
//     y++
// } while (y <= 10)

const x = [5, 10, 15]
// for
let sumFor = 0
for (let i = 0; i < x.length; i++){
    sumFor += x[i]
}
console.log('Menggunakan for data-', sumFor)

// while 
let sumWhile = 0
let j = 0
while (j < x.length) {
    sumWhile += x[j]
    j++
}
console.log('Menggunakan While data-', sumWhile)

// do while
let doWhile = 0
let k = 0
do {
    doWhile += x[k]
    k++
} while (k < x.length)
console.log('Mengunakan doWhile data-', doWhile)