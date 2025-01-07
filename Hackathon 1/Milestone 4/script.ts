document.addEventListener("DOMContentLoaded", () => {
    const addProjectButton = document.getElementById("add-project-btn");
    const container = document.getElementById("projects-container");
    const form = document.getElementById("resume-Form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display");

    if (!addProjectButton || !container || !form || !resumeDisplay) {
        console.error("Required elements not found!");
        return;
    }

    const successAlert = document.createElement("div");
    successAlert.id = "success-alert";
    successAlert.style.display = "none";
    successAlert.style.padding = "10px";
    successAlert.style.backgroundColor = "#d4edda";
    successAlert.style.color = "#155724";
    successAlert.style.border = "1px solid #c3e6cb";
    successAlert.style.borderRadius = "5px";
    successAlert.style.marginTop = "15px";
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

        let responseHTML = "<h2>Submitted Response</h2><ul>";
        formData.forEach((value, key) => {
            responseHTML += `<li><strong>${key}</strong>: ${escapeHTML(value.toString())}</li>`;
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

        const resumeHTML = generateResumeHTML(formData);
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.scrollIntoView({ behavior: "smooth" });

        makeEditable(resumeDisplay);
    });

    function escapeHTML(str: string): string {
        return str.replace(/[&<>"']/g, (tag) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        }[tag] || tag));
    }

    function generateResumeHTML(formData: FormData): string {
        let resumeHTML = `<h2>Generated Resume</h2>`;

        resumeHTML += `
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${escapeHTML(formData.get("name")?.toString() || "N/A")}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true">${escapeHTML(formData.get("email")?.toString() || "N/A")}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true">${escapeHTML(formData.get("phone")?.toString() || "N/A")}</span></p>
        `;

        resumeHTML += `
            <h3>Education</h3>
            <p><span contenteditable="true">${escapeHTML(formData.get("education")?.toString() || "N/A")}</span></p>
        `;

        resumeHTML += `
            <h3>Skills</h3>
            <p><span contenteditable="true">${escapeHTML(formData.get("skill")?.toString() || "N/A")}</span></p>
        `;

        resumeHTML += `<h3>Projects</h3><ul>`;
        const projects = formData.getAll("project[]");
        if (projects.length) {
            projects.forEach((project, index) => {
                resumeHTML += `<li><strong>Project ${index + 1}:</strong> <span ccontenteditable="true">${escapeHTML(project.toString())}</span></li>`;
            });
        } else {
            resumeHTML += `<li>No projects listed.</li>`;
        }
        resumeHTML += `</ul>`;

        resumeHTML += `
            <h3>Work Experience</h3>
            <p><strong>Position:</strong> <span contenteditable="true">${escapeHTML(formData.get("position")?.toString() || "N/A")}</span></p>
            <p><strong>Company:</strong> <span contenteditable="true">${escapeHTML(formData.get("company")?.toString() || "N/A")}</span></p>
            <p><strong>Start Date:</strong> <span contenteditable="true">${escapeHTML(formData.get("startDate")?.toString() || "N/A")}</span></p>
            <p><strong>End Date:</strong> <span contenteditable="true">${escapeHTML(formData.get("endDate")?.toString() || "N/A")}</span></p>
        `;

        return resumeHTML;
    }

    function makeEditable(resumeDisplay: HTMLElement) {
        const editableElements = resumeDisplay.querySelectorAll('span');

        editableElements.forEach((element) => {
            element.setAttribute('contenteditable', 'true');
            element.addEventListener('input', () => {
                console.log(`Updated content in: ${element.textContent}`);
            });
        });
    }
});