const myPromise = new Promise((resolve, reject) => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => resolve(data))
    // .catch(err => reject(err))
    
    const user = {id: 1};
    if(!user){
        reject("Something went wrong");
    }else{
        setTimeout(() => {
            resolve({name: "Emi"});
        }, 1000)
    }
    
})
// myPromise.then(res => console.log(res)).catch(err => console.log(err))
// console.log("object");

const userIds = [1, 2, 3, 4, 5];
const userData = [];

// for(let i = 0; i < userIds.length; i++){
//     // userData.push(myPromise);
// }
userData.push(myPromise);
Promise.all(userData).then(res => {
    console.log(res);
})
// console.log(userData);
