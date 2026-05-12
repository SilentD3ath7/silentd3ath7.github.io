function hide(id)
{
    document.getElementById(id).style.display = "none";
}

function show(id)
{
    document.getElementById(id).style.display = "block";
}

function showHomePage()
{
    show("home");
    hide("skills");
    hide("projects");
    hide("languages");
}

function showSkillsPage()
{
    hide("home");
    show("skills");
    hide("projects");
    hide("languages");
}

function showProjectPage()
{
    hide("home");
    hide("skills");
    show("projects");
    hide("languages");
}

function showLanguagesPage()
{
    hide("home");
    hide("skills");
    hide("projects");
    show("languages");
}

showHomePage();

var homeLink = document.querySelectorAll("#topMenuBar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#topMenuBar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#topMenuBar a")[2];
projectsLink.addEventListener("click", showProjectPage);

var languagesLink = document.querySelectorAll("#topMenuBar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);