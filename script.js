// let btn=document.querySelector("button");

// btn.addEventListener("click",()=>{
//     let btn=document.querySelector("button");
//     let b=document.querySelector("body");
//     if(btn.innerText==="DarkMode"){
//         b.style.backgroundColor = "black";
//         btn.innerText="LightMode";
//     }
//     else{
//         b.style.backgroundColor = "pink";
//         btn.innerText="DarkMode";
//     }
    
// })



// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data "+dataid);
//             reject("success");
//         },2000)
//     })
// }

// async function getitem(){
//     await getdata(123);
//     await getdata(456);
// }


let URL = "https://cat-fact.herokuapp.com/facts";

let factpara = document.querySelector("#factpara");
let btn = document.querySelector("#bttn");

const getfact = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    factpara.innerText = data[2].text;
}

btn.addEventListener("click", getfact);
