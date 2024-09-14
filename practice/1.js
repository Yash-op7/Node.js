const s = 'abc abc';

// let characterCount = new Map();
// // s.split('').forEach(x => {
// //     if(!characterCount.has(x)) {
// //         characterCount[x] = 0;
// //     }
// //     characterCount[x]++;
// // })

// // console.log(characterCount);

// for(let x of s) {
//     if(characterCount.has(x)) {
//         // characterCount[x]++;
//         characterCount.set(x, characterCount.get(x) + 1);
//     } else {
//         characterCount.set(x, 1);
//     }
// }
// console.log(characterCount);

const characterCount = {};

for (let c of s) {
    if( c in characterCount) {
        characterCount[c]++;
    } else 
    {
        characterCount[c] = 1;
    }
}
console.log(characterCount);
