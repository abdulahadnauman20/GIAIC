// Button Elements
var toggleSkillsBtn = document.getElementById("toggleskillsBtn");
var toggleExperienceBtn = document.getElementById("toggleExperienceBtn");
var toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
var toggleEducationBtn = document.getElementById("toggleEducationBtn");
var togglePersonalInfoBtn = document.getElementById("togglePersonalInfoBtn");
// Section Elements
var skills = document.getElementById("skillsSection");
var experience = document.getElementById("experienceSection");
var projects = document.getElementById("projectsSection");
var education = document.getElementById("educationSection");
var personalInfo = document.getElementById("personalInfoSection");
// Function to toggle section visibility
function toggleSection(section, button, showText, hideText) {
    var displayStyle = window.getComputedStyle(section).display;
    // Toggle visibility
    if (displayStyle === "none") {
        section.style.display = "block"; // Show the section
        button.textContent = hideText; // Change button text to "Hide"
    }
    else {
        section.style.display = "none"; // Hide the section
        button.textContent = showText; // Change button text to "Show"
    }
}
// Event listeners for buttons
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", function () {
    toggleSection(skills, toggleSkillsBtn, "Show Skills", "Hide Skills");
});
toggleEducationBtn === null || toggleEducationBtn === void 0 ? void 0 : toggleEducationBtn.addEventListener("click", function () {
    toggleSection(education, toggleEducationBtn, "Show Education", "Hide Education");
});
toggleExperienceBtn === null || toggleExperienceBtn === void 0 ? void 0 : toggleExperienceBtn.addEventListener("click", function () {
    toggleSection(experience, toggleExperienceBtn, "Show Experience", "Hide Experience");
});
toggleProjectsBtn === null || toggleProjectsBtn === void 0 ? void 0 : toggleProjectsBtn.addEventListener("click", function () {
    toggleSection(projects, toggleProjectsBtn, "Show Projects", "Hide Projects");
});
togglePersonalInfoBtn === null || togglePersonalInfoBtn === void 0 ? void 0 : togglePersonalInfoBtn.addEventListener("click", function () {
    toggleSection(personalInfo, togglePersonalInfoBtn, "Show Personal Information", "Hide Personal Information");
});
