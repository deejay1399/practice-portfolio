function sayhello(){
    alert ("Hello! Welcome to my portfolio. Feel free to explore and learn more about me and my work. Thank you for visiting!");
}

const projects = [
    {
        name: "CCIS Website",
        description: "A website for the College of Computer and Information Sciences (CCIS) that provides information about courses, faculty, and events."
    },
    {
        name: "SAS Website",
        description: "A Website for an NGO designed for underprivileged athletes."
    },
    {
        name: "WeCare App",
        description: "A Mobile Application for job seeker and employer matching."
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("project");

    div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        `;

    projectList.appendChild(div);
});