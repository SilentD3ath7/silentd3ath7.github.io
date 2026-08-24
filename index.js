var activePage = "home";

// This will act as a shortcut function. Basically it turns the basic $ into whatever I need it to
function $(selector)
{
    return document.querySelector(selector);
}

function hide(id)
{
    document.getElementById(id).style.display = "none";
}

function show(id)
{
    document.getElementById(id).style.display = "block";
}

/*function showHomePage()
{
    hide(activePage);
    show("home");
    activePage = "home";
}

function showSkillsPage()
{
    hide(activePage);
    show("skills");
    activePage = "skills";
}

function showProjectPage()
{
    hide(activePage);
    show("projects");
    activePage = "projects";
}

function showLanguagesPage()
{
    hide(activePage);
    show("languages");
    activePage = "languages";
}*/

function showPage(id)
{
    hide(activePage);
    $(`#topMenuBar a[data-page="${activePage}"]`).classList.remove("active");
    show(id);
    $(`#topMenuBar a[data-page="${id}"]`).classList.add("active");
    activePage = id;
}

showPage(activePage);

/*var homeLink = document.querySelectorAll("#topMenuBar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#topMenuBar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#topMenuBar a")[2];
projectsLink.addEventListener("click", showProjectPage);

var languagesLink = document.querySelectorAll("#topMenuBar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);*/

$("#topMenuBar").addEventListener("click", function(e)
{
    var id = e.target.dataset.page;
    console.info("click on menuBar", id);
    if (id)
    {
        showPage(id);
    }    
});

fetch("skills.json") // Convert the json file into the dynamic array
.then(function (response) 
{
    console.info("Done?");
    return response.json();
})
.then(function(skills) {printSkills(skills);});

function printSkills(skills) // Allows the skills array to be dynamic
{
    //var skills = [];
    var skillsMapResult = skills.map(function(skill)
    {
        var cls = skill.favSkill ? "favSkill" : ""; // "?" acts as an If statement
        //console.info("inside map", cls, skill);
        return `<li class="${cls}">${skill.name} <span>- ${skill.endorcements}</span></li>`
    });
    //console.warn("Result:", skillsMapResult);
    $("#skills ul").innerHTML = skillsMapResult.join("");
}