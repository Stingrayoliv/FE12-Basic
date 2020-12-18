//Simple promise example;
// const somePromise = new Promise((resolve) => {
//     setTimeout(() => resolve("Hello from promise"), 5000)
// });
//
// somePromise
//     .then((str) => console.log(str))
//
// console.log("Hello from usual js script");

const $p = document.getElementsByClassName('p')[0];
let i = 0;
const handlerId = setInterval(() => {
    i++;
    $p.innerText = i;
}, 1000);

//clearInterval(handlerId);
let result = true;
let delay = 5000;


const promise = new Promise((resolve, reject) => {
    if (result) {
        setTimeout(() => {
            resolve('Hello');
        }, delay)
    } else {
        setTimeout(() => {
            reject('Error')
        }, delay)
    }
});

promise
    .then(response => {
        clearInterval(handlerId);
        $p.innerText = response;
    })
    .catch(reason => {
        clearInterval(handlerId);
        $p.innerText = reason;
    })
    .finally(()=>console.log('Request is finished'))


//     setTimeout(() => resolve("Hello from promise"), 5000)
// });


// let time= Math.floor(Math.random()*(5000-1000))+1000;
// console.log(time);
// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), time);
//     setTimeout(() => reject(new Error("Error")), time);
// });
//
//
// promise
//     .then(
//         result => {
//
//         },
//         error => {
//
//         }
//     );