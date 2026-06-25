var activePage = "home";

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
    show(id);
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

document.querySelector("#topMenuBar").addEventListener("click", function(e)
{
    var id = e.target.dataset.page;
    console.info("click on menuBar", id);
    showPage(id);
});