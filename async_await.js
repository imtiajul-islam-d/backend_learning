const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve("success")
     }, 1000)
});

async function getData() {
    const res = await promise;
    console.log(res);
}
// console.log("object");
getData()

async function getUsers() {
    const res = await fetch("");
    const data = res.json();
    console.log(data);

    const res2 = await fetch("http://www.example.com/1");
    const data2 = await res2.json()
}