document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("aboutLink");
    var projectsLink = document.getElementById("projectsLink");
    var aboutSection = document.getElementById("about");
    var projectsSection = document.getElementById("projects");

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function(event) {
            event.preventDefault();
            aboutSection.style.display = "block";
            projectsSection.style.display = "none";
            hideContact();
        });
    }

    if (projectsLink && projectsSection) {
        projectsLink.addEventListener("click", function(event) {
            event.preventDefault();
            projectsSection.style.display = "block";
            aboutSection.style.display = "none";
            hideContact();
        });
    }
});

function toggleProjects() {
    var projectsSection = document.getElementById("projects");
    var aboutSection = document.getElementById("about");
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
        aboutSection.style.display = "none";
        hideContact();
    } else {
        projectsSection.style.display = "none";
    }
}

function showAbout() {
    var aboutSection = document.getElementById("about");
    var projectsSection = document.getElementById("projects");
    aboutSection.style.display = "block";
    projectsSection.style.display = "none";
    hideInfo();
}
function showInfo(projectName) {
    var info = document.getElementById("info");
    var titleElement = document.getElementById("infoTitle");
    var descriptionElement = document.getElementById("infoDescription");

    switch (projectName) {
        case 'studentManagement':
            titleElement.textContent = "Student Management System";
            descriptionElement.textContent = "A student management system is a software application designed to streamline administrative tasks related to managing student information within educational institutions. I use java and My sql for build this ";
            break;
        case 'formValidation':
            titleElement.textContent = "Form Validation";
            descriptionElement.textContent = "Form validation ensures that user input is correct, complete, and secure before it is submitted to the server.";
            break;
        case 'eCommerce':
            titleElement.textContent = "E-commerce Web site";
            descriptionElement.textContent = "An e-commerce website allows businesses to sell products or services online, providing a platform for customers to browse, select, and purchase items.";
            break;
        default:
            titleElement.textContent = "";
            descriptionElement.textContent = "";
    }

    info.style.display = "block";
}

function showContact() {
    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'block';

    // Hide all other sections
    var sections = document.querySelectorAll('section:not(#contact)');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}
function hideContact() {
    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'none';
}
function hideInfo() {
    var info = document.getElementById("info");
    info.style.display = "none";
}


function toggleAdditionalLines() {
    var additionalLines = document.getElementById("additional-lines");
    if (additionalLines.style.display === "none") {
        additionalLines.style.display = "inline";
    } else {
        additionalLines.style.display = "none";
    }
}

function showDetails(id) {
    var overlay = document.getElementById(id);
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = 'auto';
}

function hideDetails(id) {
    var overlay = document.getElementById(id);
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
}
function displayDetails(id) {
    var details = document.getElementById(id).innerHTML;
    document.getElementById("detailsContainer").innerHTML = details;
}

function displayInternshipDetails(internship) {
    var internshipDiv = document.querySelector(`.${internship}`);
    var ul = internshipDiv.querySelector("ul");
    var lis = ul.querySelectorAll("li");
    
   
    ul.style.display = "block";
    lis.forEach(function(li) {
        li.style.opacity = 0; 
        li.style.transform = "translateY(-20px)"; 
    });

    
    lis.forEach(function(li, index) {
        setTimeout(function() {
            li.style.opacity = 1;
            li.style.transform = "translateY(0)";
        }, index * 100);
    });
}

function hideInternshipDetails() {
    var uls = document.querySelectorAll(".internship ul");
    uls.forEach(function(ul) {
        ul.style.display = "none";
    });
}

    function displayInternshipDetails(internship) {
        var internshipDiv = document.querySelector(`.${internship}`);
        var paragraphs = internshipDiv.querySelectorAll("p");
        
       
        paragraphs.forEach(function(paragraph) {
            paragraph.style.display = "block";
        });
    }

    function hideInternshipDetails() {
        var paragraphs = document.querySelectorAll(".internship p");
        
       
        paragraphs.forEach(function(paragraph) {
            paragraph.style.display = "none";
        });
    }
    function toggleEducation() {
        var educationSection = document.getElementById("education");
        if (educationSection.style.display === "none") {
            educationSection.style.display = "block";
        } else {
            educationSection.style.display = "none";
        }
    }

// JavaScript to create and display project information on hover

// Define project information
const projectsInfo = {
    "s1": {
        title: "Student ManageMent system",
        description: `Utilized the "getConnection" method to establish a connection between your Java application and the MySQL database.`
    },
    "f1": {
        title: "Form Validation",
        description: "Form validation ensures that user input is correct, complete, and secure before it is submitted to the server."
    },
    "eCommerce": {
        title: "E-commerce Web site",
        description: "An e-commerce website allows businesses to sell products or services online, providing a platform for customers to browse, select, and purchase items."
    },
    "t1": {
        title: "Tourisam Web-site",
        description: "Tourism website provides information about various tourist destinations, activities, accommodations, and travel tips to help users plan their trips effectively."
    }
};


function showProjectInfo(projectId) {
    const overlay = document.getElementById(projectId).getElementsByClassName("overlay1")[0];
    overlay.innerHTML = ""; 

    
    const title = document.createElement("h3");
    title.textContent = projectsInfo[projectId].title;

    const description = document.createElement("p");
    description.textContent = projectsInfo[projectId].description;

    
    overlay.appendChild(title);
    overlay.appendChild(description);

   
    overlay.style.display = "block";
}


function hideProjectInfo(projectId) {
    const overlay = document.getElementById(projectId).getElementsByClassName("overlay1")[0];
    overlay.style.display = "none";
}

