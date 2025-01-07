document.addEventListener("DOMContentLoaded", () => {
    const addProjectButton = document.getElementById("add-project-btn") as HTMLButtonElement;
    const container = document.getElementById("projects-container") as HTMLElement;
    const form = document.getElementById("resume-Form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
    const downloadResumeButton = document.getElementById("download-resume-btn") as HTMLButtonElement;
    const resumeLinkContainer = document.getElementById("resume-link-container") as HTMLElement;

    if (!addProjectButton || !container || !form || !resumeDisplay || !downloadResumeButton || !resumeLinkContainer) {
        console.error("Required elements not found!");
        return;
    }

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
        const formData = new FormData(form);
        const resumeHTML = generateResumeHTML(formData);
        resumeDisplay.innerHTML = resumeHTML;

        // Encode the resume data into a URL
        const resumeData = {
            name: formData.get("name") || "N/A",
            email: formData.get("email") || "N/A",
            phone: formData.get("phone") || "N/A",
            education: formData.get("education") || "N/A",
            skill: formData.get("skill") || "N/A",
            projects: formData.getAll("project[]"),
            position: formData.get("position") || "N/A",
            company: formData.get("company") || "N/A",
            startDate: formData.get("startDate") || "N/A",
            endDate: formData.get("endDate") || "N/A",
        };

        const encodedData = encodeURIComponent(JSON.stringify(resumeData));
        const resumeURL = `${window.location.origin}${window.location.pathname}?resume=${encodedData}`;

        // Display the shareable link
        resumeLinkContainer.innerHTML = `
            <p>Shareable Link: <a href="${resumeURL}" target="_blank">${resumeURL}</a></p>
        `;
    });

    downloadResumeButton.addEventListener("click", () => {
        if (resumeDisplay.innerHTML.trim()) {
            const pdfWindow = window.open("", "_blank");
            pdfWindow?.document.write(`
                <html>
                <head><title>Resume</title></head>
                <body>${resumeDisplay.innerHTML}</body>
                </html>
            `);
            pdfWindow?.document.close();
            pdfWindow?.print();
        } else {
            alert("Please generate a resume before downloading.");
        }
    });

    function generateResumeHTML(formData: FormData): string {
        let resumeHTML = `<h2>${formData.get("name") || "N/A"}</h2>`;
        resumeHTML += `<p>Email: ${formData.get("email") || "N/A"}</p>`;
        resumeHTML += `<p>Phone: ${formData.get("phone") || "N/A"}</p>`;
        resumeHTML += `<h3>Education</h3><p>${formData.get("education") || "N/A"}</p>`;
        resumeHTML += `<h3>Skills</h3><p>${formData.get("skill") || "N/A"}</p>`;
        resumeHTML += `<h3>Projects</h3><ul>`;
        formData.getAll("project[]").forEach((project) => {
            resumeHTML += `<li>${project}</li>`;
        });
        resumeHTML += `</ul>`;
        resumeHTML += `<h3>Work Experience</h3>`;
        resumeHTML += `<p>Position: ${formData.get("position") || "N/A"}</p>`;
        resumeHTML += `<p>Company: ${formData.get("company") || "N/A"}</p>`;
        resumeHTML += `<p>Start Date: ${formData.get("startDate") || "N/A"}</p>`;
        resumeHTML += `<p>End Date: ${formData.get("endDate") || "N/A"}</p>`;
        return resumeHTML;
    }

    // Check for resume data in the URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    const resumeDataParam = urlParams.get("resume");
    if (resumeDataParam) {
        const resumeData = JSON.parse(decodeURIComponent(resumeDataParam));
        const formData = new FormData();
        Object.keys(resumeData).forEach((key) => {
            if (Array.isArray(resumeData[key])) {
                resumeData[key].forEach((value: string) => formData.append(key, value));
            } else {
                formData.append(key, resumeData[key]);
            }
        });
        const resumeHTML = generateResumeHTML(formData);
        resumeDisplay.innerHTML = resumeHTML;
    }
});