function variablesExample()
{
    console.log(false);
    console.info("Page loaded");
    console.info(5 - 2); // Doesn't work with debug?
    console.warn(10 / 2);
    console.error("Hello " + "there");

    var employed = true;
    console.info("Am I job?", employed);
    console.info("Type of employed?", typeof employed);

    var age = 20 + 2;
    console.warn("Age:", age, typeof age);

    var name = `Carter's "Gay"`; // You can use Tilde (`/~) as a string command
    console.info("My name:", name, typeof name);

    var skills = ["HTML", "C++", "C#"];
    console.info(skills, typeof skills); // Doesn't work with debug?

    var person = {employed: true, age: 22}; // Acts similiar to a class. To access in console, use "person."
    console.info(person, typeof person)
}

function updateTitle(title)
{
    var jobTitle = document.getElementById("job");
    console.warn(jobTitle, typeof jobTitle);

    console.info(jobTitle.innerHTML); // Displays only the text inside the id
    jobTitle.innerHTML = title;
    console.info(jobTitle.innerHTML);
}

function jsonWithFunctions()
{
    var person =
    {
        age: 22,
        name: "Carter",
        learn: function()
        {
            console.info("I'm learning!")
        },
        play: function()
        {
            console.info("I'm playing a game.")
        }
    };
    person.learn();
    person.play();
    var action = "play"; // This can call a property dynamically
    person[action]();
}

variablesExample();

updateTitle("ATM Fixer");

jsonWithFunctions();

// Functions
function emptyFn() {} // Outline for a function

function getWelcomeMsg(name)
{
    var msg = "Hello " + name + ", welcome to my website!";
    return msg;        
}

function getMsg(name)
{
    return `Hey ${name}, we're glad you're here. :)`; // Must be tilde for the name var to work
}

console.log(getWelcomeMsg("Pussy"));
console.log(getMsg("Carter"));

console.log("variablesExample is a:", typeof variablesExample);
console.log(typeof document);
console.log(typeof document.getElementById);