// Button Elements
const toggleSkillsBtn = document.getElementById("toggleskillsBtn");
const toggleExperienceBtn = document.getElementById("toggleExperienceBtn");
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const toggleEducationBtn = document.getElementById("toggleEducationBtn");
const togglePersonalInfoBtn = document.getElementById("togglePersonalInfoBtn");

// Section Elements
const skills = document.getElementById("skillsSection");
const experience = document.getElementById("experienceSection");
const projects = document.getElementById("projectsSection");
const education = document.getElementById("educationSection");
const personalInfo = document.getElementById("personalInfoSection");

// Function to toggle section visibility
function toggleSection(section, button, showText, hideText) {
    const displayStyle = window.getComputedStyle(section).display;

    // Toggle visibility
    if (displayStyle === "none") {
        section.style.display = "block"; // Show the section
        button.textContent = hideText; // Change button text to "Hide"
    } else {
        section.style.display = "none"; // Hide the section
        button.textContent = showText; // Change button text to "Show"
    }
}

// Event listeners for buttons
toggleSkillsBtn?.addEventListener("click", () => {
    toggleSection(skills, toggleSkillsBtn, "Show Skills", "Hide Skills");
});

toggleEducationBtn?.addEventListener("click", () => {
    toggleSection(education, toggleEducationBtn, "Show Education", "Hide Education");
});

toggleExperienceBtn?.addEventListener("click", () => {
    toggleSection(experience, toggleExperienceBtn, "Show Experience", "Hide Experience");
});

toggleProjectsBtn?.addEventListener("click", () => {
    toggleSection(projects, toggleProjectsBtn, "Show Projects", "Hide Projects");
});

togglePersonalInfoBtn?.addEventListener("click", () => {
    toggleSection(personalInfo, togglePersonalInfoBtn, "Show Personal Information", "Hide Personal Information");
});
