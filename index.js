function showHomePage()
{
    document.getElementById("home").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("languages").style.display = "none";
}

function showSkillsPage()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("languages").style.display = "none";
}

function showProjectPage()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("languages").style.display = "none";
}

function showLanguagesPage()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("languages").style.display = "block";
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