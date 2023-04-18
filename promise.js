const myPromise = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
myPromise.then(res => console.log(res)).catch(err => console.log(err))
console.log("object");