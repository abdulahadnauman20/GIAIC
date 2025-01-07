document.addEventListener("DOMContentLoaded", () => {
    const addProjectButton = document.getElementById("add-project-btn");
    const container = document.getElementById("projects-container");
    const form = document.getElementById("resume-Form") as HTMLFormElement;

    if (!addProjectButton || !container || !form) {
        console.error("Required elements not found!");
        return;
    }

    const successAlert = document.createElement("div");
    successAlert.id = "success-alert";
    successAlert.style.display = "none";
    document.body.appendChild(successAlert);

    addProjectButton.addEventListener("click", () => {
        const projectCount = container.querySelectorAll(".project-field").length + 1;

        const newProjectField = document.createElement("div");
        newProjectField.className = "project-field";
        newProjectField.innerHTML = `
            <label for="project-${projectCount}">Project ${projectCount}:</label>
            <input type="text" id="project-${projectCount}" name="project[]" required>
        `;

        container.appendChild(newProjectField);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        successAlert.style.display = "none";

        const formData = new FormData(form);

        successAlert.textContent = "Response Submitted Successfully!";
        successAlert.style.display = "block";
        successAlert.style.padding = "10px";
        successAlert.style.backgroundColor = "#d4edda";
        successAlert.style.color = "#155724";
        successAlert.style.border = "1px solid #c3e6cb";
        successAlert.style.borderRadius = "5px";
        successAlert.style.marginTop = "15px";

        let responseHTML = "<h2>Submitted Response</h2><ul>";
        formData.forEach((value, key) => {
            responseHTML += `<li><strong>${key}</strong>: ${value}</li>`;
        });
        responseHTML += "</ul>";

        let responseDiv = document.getElementById("response-container");
        if (!responseDiv) {
            responseDiv = document.createElement("div");
            responseDiv.id = "response-container";
            document.body.appendChild(responseDiv);
        }
        responseDiv.innerHTML = responseHTML;

        responseDiv.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-Form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display");

    if (!form || !resumeDisplay) {
        console.error("Form or resume display container not found!");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const formData = new FormData(form); 
        let resumeHTML = `<h2>Generated Resume</h2>`;

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`); 
        });

        resumeHTML += `
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${formData.get("name") || "N/A"}</p>
            <p><strong>Email:</strong> ${formData.get("email") || "N/A"}</p>
            <p><strong>Phone:</strong> ${formData.get("phone") || "N/A"}</p>
        `;

        resumeHTML += `<h3>Education</h3><p>${formData.get("education") || "N/A"}</p>`;

        resumeHTML += `<h3>Skills</h3><p>${formData.get("skill") || "N/A"}</p>`;

        resumeHTML += `<h3>Projects</h3><ul>`;
        const projects = formData.getAll("project[]");
        if (projects.length) {
            projects.forEach((project, index) => {
                resumeHTML += `<li><strong>Project ${index + 1}:</strong> ${project}</li>`;
            });
        } else {
            resumeHTML += "<li>No projects listed.</li>";
        }
        resumeHTML += `</ul>`;

        resumeHTML += `
            <h3>Work Experience</h3>
            <p><strong>Position:</strong> ${formData.get("position") || "N/A"}</p>
            <p><strong>Company:</strong> ${formData.get("company") || "N/A"}</p>
            <p><strong>Start Date:</strong> ${formData.get("startDate") || "N/A"}</p>
            <p><strong>End Date:</strong> ${formData.get("endDate") || "N/A"}</p>
        `;

        resumeDisplay.innerHTML = resumeHTML;

        console.log("Resume content rendered:", resumeHTML);

        resumeDisplay.scrollIntoView({ behavior: "smooth" });
    });
});
