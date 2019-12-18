/*

Diberikan sebuah variabel num bertipe number.

Buatlah program yang menghasilkan gambar segitiga dengan pola sebagai berikut

Contoh 1:
let num = 3

//output yang diharapkan
  x
 xox
xoxox

Contoh 2:
let num = 6


//output yang diharapkan
     x
    xox
   xoxox
  xoxoxox
 xoxoxoxox
xoxoxoxoxox

*/

let num = 3
let str = "x"
let kata = ""
for(let i = num-1; i >= 0; i--){
    for(let j = num; j > num - i; j--){
        kata += "*"
    }
    /* 
    i = 0

    j = 3

    kata = "**x\n*xox\nxoxox"
    str "xoxox"

     */ 
    kata += str
    for(let j = 0; j < num; j++){
        if(i === j && j !== 0){
            str += 'ox'
        } 
    }
    if(i !== 0){
    kata += "\n"
  }
}
console.log(str);


// let newStr = ""
// for(let i = num-1; i >= 0; i--){
//     newStr += coba + "\n"
// }
// console.log(newStr)

/*
321
32
3
*/

// let num = 3
// for(let i = 0; i < num; i++){
//     str = ""
//     console.log(i)
//     for(let j = 0; j < num - i; j++){
//         str += num - j
//     }
//     console.log(str)
// }


