// const steps = document.querySelector("#step")

// function printSteps(step, delay) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log(step)
//             resolve(step); //Determines What await recieves
//         }, delay);
        
//     })
    
// }

// async function displaySteps() {
//     try{
//         await printSteps("Connecting...", 1000);
//         await printSteps("Fetching Data...", 1000);
//         await printSteps("Completed!", 1000);
//     } catch(error) {
//         console.log("Weak Connection", error)
//     }
// }

// displaySteps()


// async function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         const number = Math.floor(Math.random() * 10) + 1;

//         if(number > 4){
//             resolve("data saved: ");
//         } else {
//             reject("Weak Connection. Database Error")
//         }
//     })
// }

// async function saveToDb() {
//     return new Promise((resolve, reject) => {
//         const number = Math.floor(Math.random() * 10) + 1;

//         if(number > 4){
//             resolve("data saved");
//         } else {
//             reject("Weak Connection. Database Error")
//         }
//     })
//     try{
//         await saveToDb("Student");
//         await saveToDb("Course");
//         await saveToDb("Marks");
//         console.log("All data saved successfully")
//     } catch(error){
//         console.log("Database Error");
//     }
// }


// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         const number = Math.floor(Math.random() * 10) + 1;
        
//         if (number > 4) {
//             resolve(`${data} saved`);
//         } else {
//             reject("Weak Connection");
//         }
//     });
// }

// async function saveDate(){
//     try{
//         await saveToDb("Student");
//         console.log("Data 1 saved");
//         await saveToDb("Course");
//         console.log("Data 2 saved");
//         await saveToDb("Marks");
//         console.log("Data 3 saved");
//         console.log("All data saved successfully");
//     } catch(error) {
//         console.log("Database Error: ", error);
//     }
// } 

// saveDate();


// Q3

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         const response = await axios.get(url)
//         console.log(response.data.fact)
//     } catch(error){
//         console.log("Error: ", error);
//         return "No Fact Found"
//     }
// }

// getFact();

//Q4

// let url = "http://universities.hipolabs.com/search?country=india";

// const button = document.querySelector("#nameButton")

// button.addEventListener("click", async () => {
//     let stateProvince = document.querySelector("input").value;
//     console.log(stateProvince);
//     let universityArray = await getUniversities(stateProvince);
//     printUniversity(universityArray);
// });

// async function getUniversities(stateProvince) {
//     try{
//         const response = await axios.get(url);
//         let universities = response.data
//         let filteredUniversities = universities.filter(university => university["state-province"] === stateProvince)
//         return filteredUniversities;
//     } catch(error) {
//         console.log("Error: ", error);
//         return [];
//     }
// }


// function printUniversity(universityArray) {
//     const list = document.querySelector("#list");
//     list.innerText = "";
//     for(const university of universityArray) {
//         console.log(university.name);
        
//         let universityList = document.createElement("li");
//         universityList.innerText = university.name;
//         list.appendChild(universityList);
//     }
// }


// let url = "https://dog.ceo/api/breeds/image/random";

// const button = document.querySelector("#dogButton");

// button.addEventListener("click", async () => {
//     const link = await getDogImage();
//     const image = document.querySelector("#dogImage");
//     image.setAttribute("src", link)

// })

// async function getDogImage(){
//     try{
//         const response = await axios.get(url);
//         return response.data.message;
//     } catch(error) {
//         console.log("Error: ", error);
//         return "No Image Found";
//     }
// }

// let url = "https://icanhazdadjoke.com/";

// const button = document.querySelector("#dadJokes");


// button.addEventListener("click", async () => {
//     const joke = await getDadJokes();
//     const jokesParagraph = document.querySelector("#result");
//     jokesParagraph.innerText = joke;
// })

// async function getDadJokes() {
//     try{
//         const configuration = {
//             headers: { Accept: "application/json" }
//         }
//         const response = await axios.get(url, configuration);
//         return response.data.joke;
//     } catch(error){
//         console.log("Error: ", error);
//         return "No jokes found"
//     }
// }


// const student = {
//     name: "Glacier",
//     age: 19,
//     skills: ["JavaScript", "Node.js"]
// };


// const jsonStudent = JSON.stringify(student);

// const studentObject = JSON.parse(jsonStudent);

// console.log(studentObject.skills[1])

//1. GET
// 2. POST
// 3. DELETE
// 4. PUT or PATCH

// let url = "https://bored-api.appbrewery.com/random";

// button = document.querySelector("#activityButton");

// button.addEventListener("click", async () => {
//     const activity = await getActivity();
//     console.log(activity)
// })

// async function getActivity() {
//     try{
//         const response = await axios.get(url);
//         return response.data;
//     } catch(error){
//         console.log("Error: ", error);
//         return "No Activity Found";
//     }
// }

