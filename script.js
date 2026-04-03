function sayHello(){
    alert ("Hello! Welcome to my portfolio. Feel free to explore and learn more about me and my work. Thank you for visiting!");
}

const projects = [
    {
        name: "CCIS Website",
        description: "A website for the College of Computer and Information Sciences (CCIS) that provides information about courses, faculty, and events.",
        image: "assets/images/ccis.png"
    },
    {
        name: "SAS Website",
        description: "A Website for an NGO designed for underprivileged athletes.",
        image: "assets/images/sas.png"
    },
    {
        name: "WeCare App",
        description: "A Mobile Application for job seeker and employer matching.",
        image: "assets/images/wecare.png"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("project");

    div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        `;

    projectList.appendChild(div);
});

const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);

function sendMessage(e) {
  e.preventDefault();
  alert("Message sent! (we will connect this later)");
}