// Greeting Alert
function sayHello(){
    alert("Welcome to my portfolio! 🚀\n\nI'm a passionate software engineer creating amazing digital experiences. Feel free to explore my work and get in touch!");
}

// Projects Data
const projects = [
    {
        name: "CCIS Website",
        description: "A website for the College of Computer and Information Sciences (CCIS) that provides information about courses, faculty, and events.",
        image: "assets/images/ccis.png",
        url: "https://ccisconnect.com/"
    },
    {
        name: "SAS Website",
        description: "A Website for an NGO designed for underprivileged athletes.",
        image: "assets/images/sas.png",
        url: "https://sedaquasprint.org/"
    },
    {
        name: "WeCare App",
        description: "A Mobile Application for job seeker and employer matching.",
        image: "assets/images/wecare.png",
        url: "https://play.google.com/apps/testing/com.wecare.app.user"
    }
];

// Render Projects
const projectList = document.getElementById("project-list");

projects.forEach((p, index) => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.style.animationDelay = `${index * 0.1}s`;

    div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="project-content">
            <h3>${p.name}</h3>
            <p class="text-secondary">${p.description}</p>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn">View Project →</a>
        </div>
    `;

    projectList.appendChild(div);
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// Form Submission
function sendMessage(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = "✓ Message Sent!";
    button.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Thank you for reaching out! I'll get back to you soon.");
        form.reset();
        button.textContent = originalText;
        button.style.opacity = "1";
    }, 1500);
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('header button');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeButton.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('header button').textContent = '☀️';
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
            }
        });
    });
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('header button').textContent = '☀️';
    }
});