const projects = document.querySelectorAll('.project');
const thirdSection = document.querySelector('.third-section');
const projectOne = document.querySelector('#project-one-description');
const projectTwo = document.querySelector('#project-two-description');
const projectThree = document.querySelector('#project-three-description');
const projectFour = document.querySelector('#project-four-description');

showDetails = (e) => {
    if(e.target.id === "project-one") {
        projectOne.style.display = "block";
    } else if (e.target.id === "project-two") {
        projectTwo.style.display = "block";
    } else if (e.target.id === "project-three") {
        projectThree.style.display = "block";
    } else if (e.target.id === "project-four") {
        projectFour.style.display = "block";
    }
};

hideDetails = (e) => {
    if(e.target.classList.contains("third-section")) {
        projectOne.style.display = "none";
        projectTwo.style.display = "none";
        projectThree.style.display = "none";
        projectFour.style.display = "none";
    }
};

projects.forEach(el => { el.addEventListener('mouseover', showDetails) });

thirdSection.addEventListener('mouseover', hideDetails);