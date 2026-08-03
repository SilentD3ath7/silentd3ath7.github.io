var activePage = "skills";

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


var skills = ["HTML - 4", "C++ - 1", "C# - 3", "JavaScript - 7"];
var skillsMapResult = skills.map(function(skill)
{
    console.info("inside map", skill);
    return `<li>${skill}</li>`
});
//console.warn("Result:", skillsMapResult);
$("#skills ul").innerHTML = skillsMapResult.join("");