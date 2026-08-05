const heading = document.querySelector("h1");

// async function greet() {
//     // throw "404 page not found"
//     return "Hello!";
// }


// greet()
//     .then((result) =>{
//         console.log("Promise was resolved with result: ", result);
//     })
//     .catch((error) =>{
//         console.log("Promise was rejected with error: ", error)
//     })

// let headingColor = async (color) => {
//     heading.style.color = color;
//     return "Changed";
// }


// function getNumberAndColor(color, delay) {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             const number = Math.floor(Math.random() * 10) + 1;
//             if( number > 5){
//                 reject("Promise Rejected");
//             }
//             console.log(number);
//             heading.style.color = color;
//             console.log("Color changed: ", color)
//             resolve();
            
//         }, delay);
//     })
// }

// async function demo() {
//     try {
//         await getNumberAndColor("darkred", 1000);
//         await getNumberAndColor("red", 1000);
//         await getNumberAndColor("black", 1000);
//         await getNumberAndColor("darkred", 1000);
//     } catch(error) {
//         console.log("Error Caught")
//         console.log(error);
//     }
    
//     let a = 5;
//     console.log(a);
//     console.log("new number = ", 10)
// }

// const jsonResponse = '{"activity":"Clean out your car","availability":0.08,"type":"busywork","participants":1,"price":0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2896176"}'

// const validResponse = JSON.parse(jsonResponse);

// console.log(validResponse.activity)

// const student = {
//     name: "Om",
//     age: "20",
// }



// async function getFacts() {
//     try{
//         const response1 = await fetch(url);
//         const data1 = await response1.json()
//         console.log(data1.fact)
//         const response2 = await fetch(url);
//         const data2 = await response2.json()
//         console.log(data2.fact)
    
//     } catch(error){
//         console.log("Error: ", error)
//     }
//     // console.log("done")
// }





// fetch(url)
//     .then((response) => {
//         console.log(response)
//         // console.log(response.json()) //This function makes our data readable
//         // response.json().then((data) => {
//             // console.log(data)
//         // })
//         return response.json();
//     })
//     .then((data) =>{
//         console.log("fact 1:", data.fact);
//         return fetch(url)
//     })
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data2) => {
//         console.log("fact 2:",data2.fact)
//     })
//     .catch((error) =>{
//         console.log("Error: ", error)
//     })


// const url = "https://catfact.ninja/fact";
// const url1 = "https://api.thecatapi.com/v1/images/search";

// const catButton = document.querySelector("#catButton");
// const dogButton = document.querySelector("#dogButton");


// catButton.addEventListener("click", async() =>{
//     const fact = await getFacts();
//     let paragraph = document.querySelector("#result");
//     paragraph.innerText = fact
// })

// async function getFacts() {
//     try{
//         const response1 = await axios.get(url);
//         return response1.data.fact;
    
//     } catch(error){
//         console.log("Error: ", error)
//         return "No Fact Found"
//     }
// }

// dogButton.addEventListener("click", async() =>{
//     const link = await getImage()
//     const image = document.querySelector("#dogResult")
//     image.setAttribute("src", link);
//     console.log(link)
// })

// async function getImage() {
//     try{
//         const response2 = await axios.get(url1);
//         return response2.data[0].url;
    
//     } catch(error){
//         console.log("Error: ", error)
//         return "No Image Found"
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const configuration = {
//             headers: {Accept: "application/json"}
//         }
//         const response = await axios.get(url, configuration);
//         console.log(response.data);
//     } catch(error) {
//         console.log(error)
//     }
// }


const url = "http://universities.hipolabs.com/search?name=";

const button = document.querySelector("button");

button.addEventListener("click", async () =>{
    let country = document.querySelector("input").value;
    console.log(country)
    getColleges(country);
    let collegesArray = await getColleges(country);
    showColleges(collegesArray)
});

function showColleges(collegesArray) {
    let list = document.querySelector("#list")
    list.innerText = "";
    for(college of collegesArray){
        console.log(college.name);

        let collegeList = document.createElement("li");
        collegeList.innerText = college.name;
        list.appendChild(collegeList);
    }
}

async function getColleges(country) {
    try{
        const response = await axios.get(url + country);
        return response.data;
    } catch(error){
        console.log("Error: ", error);
        return [];
    }
}