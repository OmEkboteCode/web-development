const express = require("express");
const app = express();

const port = 8080;
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const developers = [];


class Developer {
    constructor(name, language, experience){
        this.name = name;
        this.language = language;
        this.experience = experience;
    }
    getProfile() {
        return `${this.name} | ${this.language} | ${this.experience} years experience`;
    }
}

class Researcher extends Developer {
    constructor(name, language, experience, researchArea) {
        super(name, language, experience);
        this.researchArea = researchArea;
    }
    // getResearcherProfile(){
    //     return `${this.name} | ${this.language} | ${this.experience} years experience | Research: ${this.researchArea}`;
    // }
    getProfile() {
        return `${this.name} | ${this.language} | ${this.experience} years experience | Research: ${this.researchArea}`;
    }
}




app.post("/developers", (req, res) => {
    const {name, language, experience} = req.body;
    if(!name || !language || !experience){
        return res.send("Name, language, and experience are required.")
    }
    const developer = new Developer(name, language, experience);
    developers.push(developer)
    res.json(developer);
});

app.post("/researchers", (req, res) => {
    const {name, experience, language, researchArea} = req.body;
    const researcher = new Researcher(
        name, 
        language, 
        experience, 
        researchArea
    );
    res.send(researcher.getProfile());
});
app.post("/researchers/profile", (req, res) => {
    const {name, experience, language, researchArea} = req.body;
    const researcher = new Researcher(
        name, 
        language, 
        experience, 
        researchArea
    );
    res.send(researcher.getProfile());
});

app.post("/register", (req, res) => { 
    const {name, experience, language} = req.body; 
    res.send(`Welcome ${name} <br> 
Primary Language: ${language}<br> 
Experience: ${experience} years`) });

app.post("/api/developers", (req, res) =>{
    const {name, experience, language} = req.body;
    res.json({
        "message": "Developer registered successfully",
        "developer": {
            "name": name,
            "language": language,
            "experience": experience
            }
        }
    )
})


// app.get("/developers", (req, res) => {
//     res.json(developers)
// });



app.get("/developers", (req, res) => {
    const {language, minExperience} = req.query;
    const minExperienceNumber = Number(minExperience)
    const filteredDevelopers = developers.filter( developer => {
        return (!language || developer.language === language)
            && (!minExperience || developer.experience >= minExperienceNumber);
        }
    )
    res.json(filteredDevelopers)
});






app.get("/developers/:name", (req, res) => {
    const { name } = req.params
    let foundDeveloper = null;
    for( const developer of developers) {
        if(developer.name === name){
            foundDeveloper = developer;
            res.json(developer)
        } 
    }
    if (foundDeveloper === null) {
        res.send("Developer not found.")
    }
});
app.delete("/developers/:name", (req, res) => {
    const { name } = req.params;
    let targetIndex = -1;
    for (let i = 0; i < developers.length; i++) {
        if(developers[i].name === name){
            targetIndex = i;
            break;
        }
    }
    if(targetIndex === -1){
        return res.send(`Developer not found.`)
    }
    developers.splice(targetIndex, 1)
    res.send("Developer Profile Deleted")
});



app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
});


