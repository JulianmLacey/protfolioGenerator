var inquirer = require('inquirer');
var fs = require("fs");


    inquirer.prompt([
        {type: "input",message: "name: ",name: "name", },
        {type: "input",message: "location: ",name: "location", },
        {type: "input",message: "bio: ",name: "bio" },
        {type: "input",message: "LinkedInURL: ",name: "LinkedInURL", },
        {type: "input",message: "GitHubURL: ",name: "GitHubURL" }
    
    ]).then((response) => {
        var htmlStr = `<!DOCTYPE html>
    <html lang="en-us">
    <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Portfolio</title>
    </head>
    <body>
    <header>
        <h1 id="nameMain">${response.name}</h1>
        <div>
        <ul>
            <li>
            <a href="#About me">About me</a>
            </li>
            <li>
            <a href="${response.LinkedInURL}">LinkedIn</a>
            </li>
            <li>
            <a href="${response.GitHubURL}">GitHub</a>
            </li>
        </ul>
        </div>
    </header>

    <main>
        <h4>About Me</h4>
        <h3>${response.location}</h3>
        <a id="bio">${response.bio}</a>

    </main>

    <div class="portfolio">
        <h3>Projects</h3>
        <div class="cont">
        <div class="card"><h4></h4></div>
        <div class="card">
            <h4></h4>
        </div>

        <div class="card"><h4></h4></div>
        <div class="card"><h4></h4></div>
        <div class="card"><h4></h4></div>
        <div class="card"><h4></h4></div>
        </div>
    </div>

    <div class="projects">

        <h4>Coding Projects</h4>

    </div>

    </body>

    <div class="footer">
    <p>&copy; 2023 Bootcamp Productions</p>
    </div>
    </html>`;
        fs.writeFile(`index.html`, htmlStr, (err) =>
          err ? console.error(err) : console.log("Sucess!")
        );
      });

