const userHTML            = document.querySelector(".users");
const btnStartHTML        = document.querySelector(".start");
const sortNameHTML        = document.querySelector(".sortName");
const resetHTML           = document.querySelector(".reset");
const ageOrderOldYHTML    = document.querySelector(".ageOrderOldYoun");
const ageOrderYounOlHTML  = document.querySelector(".ageOrderYounOld");

let students = [
    {
        name: "Milton Manuel Sanchez",
        age: 34,
        ocupation: "developer fullstack",
        hobbies: ["futbol", "trotar", "ver Tv", "leer"]
    },
    {
        name: "karen",
        age: 25,
        ocupation: "psicologa",
        hobbies: ["tejer", "reposteria", ]
    },
    {
        name: "felipe",
        age: 27,
        ocupation: "jardinero",
        hobbies: ["futbol", "bailar", "caminar",]
    },
];


students.sort();


function myHobbies(hobbies){

    let html = "";

    for (const hobbie of hobbies) {
        html += `
            <li>${hobbie}</li>
        `
    }
    return html;
};

function printUser(users){

    let html = "";

    for (const { name, age, ocupation, hobbies } of users) {        
    
        html += `
            <div class="container__student">
                <h4>${name}</h4>
                <p><small>age: ${age}</small> | ${ocupation}</p>
                <div class="container__hobbies">
                <h3>hobbies: ${myHobbies(hobbies)}</h3>
                </div>
            </div>
        
        `; 
    } 
    
    userHTML.innerHTML = html;

};

const reseter = ()=>{
    resetHTML.addEventListener("click", ()=>{
        userHTML.innerHTML = "";
    });
};

function main(){

    btnStartHTML.addEventListener("click", ()=>{
        printUser(students)
    });

    sortNameHTML.addEventListener("click", function () {
        students.sort((persona1, persona2) =>
            persona1.name.localeCompare(persona2.name)
        )
        printUser(students)
    });

    ageOrderOldYHTML.addEventListener("click", function (){
        students.sort((a,b) => b.age - a.age)
        printUser(students)
    });

    ageOrderYounOlHTML.addEventListener("click", function (){
        students.sort((a,b) => a.age - b.age)
        printUser(students)
    
    });
    
    reseter();
    
    
};

main()