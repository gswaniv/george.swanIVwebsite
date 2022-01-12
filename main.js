let bio = document.getElementById("bio");
let resume = document.getElementById("resume");
let myprojects = document.getElementById("myprojects");
let additiveManufacturing = document.getElementById("additiveManufacturing");
let webDevelopment = document.getElementById("webDevelopment");
let displayPort = document.getElementById("displayPort");
var img = document.createElement("img");
img.id = "george";
let display = document.getElementById("display");



// how to generate an iframe in javascript 
// https://www.dyn-web.com/tutorials/iframes/dyn-gen/
function displayBio(params) {
    let button = document.createElement("button");
    button.innerHTML = "George W. Swan IV";
    button.type = "submit";
    button.name = "projectsBtn"
    bio.appendChild(button)
}
displayBio()

function bioFram(params) {
    const frame = document.createElement("iframe");
    frame.setAttribute('id', 'frame')
    document.body.appendChild(frame)
    frame.setAttribute('src', 'GeorgeSwanIV.jpg')
    bio.appendChild(frame)
}
bioFram()

function myFunction() {
    var vBio = document.getElementById("bio");
    if (vBio.style.display === "none") {
      vBio.style.display = "block";
    } else {
      vBio.style.display = "none";
    }
  }   
  

function displayResume(params) {
    let button = document.createElement("button");
    button.innerHTML = "Resume";
    button.type = "submit";
    button.name = "projectsBtn"
    resume.appendChild(button);
}
displayResume()

function displayMyprojects(params) {
    let button = document.createElement("button");
    button.innerHTML = "Projects";
    button.type = "submit";
    button.name = "projectsBtn"
    myprojects.appendChild(button)
}
displayMyprojects()

function displayAdditiveManufacturing(params) {
    let button = document.createElement("button");
    button.innerHTML = "3d Printing";
    button.type = "submit";
    button.name = "3dPrintingBtn"
    additiveManufacturing.appendChild(button)
}
displayAdditiveManufacturing()

function displayWebDevelopment(params) {
    let button = document.createElement("button");
    button.innerHTML = "Web Dev";
    button.type = "submit";
    button.name = "webDevBtn"
    webDevelopment.appendChild(button)
}
displayWebDevelopment()