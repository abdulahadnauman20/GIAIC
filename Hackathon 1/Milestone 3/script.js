document.addEventListener("DOMContentLoaded", function () {
    var addProjectButton = document.getElementById("add-project-btn");
    var container = document.getElementById("projects-container");
    var form = document.getElementById("resume-Form");
    if (!addProjectButton || !container || !form) {
        console.error("Required elements not found!");
        return;
    }
    var successAlert = document.createElement("div");
    successAlert.id = "success-alert";
    successAlert.style.display = "none";
    document.body.appendChild(successAlert);
    addProjectButton.addEventListener("click", function () {
        var projectCount = container.querySelectorAll(".project-field").length + 1;
        var newProjectField = document.createElement("div");
        newProjectField.className = "project-field";
        newProjectField.innerHTML = "\n            <label for=\"project-".concat(projectCount, "\">Project ").concat(projectCount, ":</label>\n            <input type=\"text\" id=\"project-").concat(projectCount, "\" name=\"project[]\" required>\n        ");
        container.appendChild(newProjectField);
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        successAlert.style.display = "none";
        var formData = new FormData(form);
        successAlert.textContent = "Response Submitted Successfully!";
        successAlert.style.display = "block";
        successAlert.style.padding = "10px";
        successAlert.style.backgroundColor = "#d4edda";
        successAlert.style.color = "#155724";
        successAlert.style.border = "1px solid #c3e6cb";
        successAlert.style.borderRadius = "5px";
        successAlert.style.marginTop = "15px";
        var responseHTML = "<h2>Submitted Response</h2><ul>";
        formData.forEach(function (value, key) {
            responseHTML += "<li><strong>".concat(key, "</strong>: ").concat(value, "</li>");
        });
        responseHTML += "</ul>";
        var responseDiv = document.getElementById("response-container");
        if (!responseDiv) {
            responseDiv = document.createElement("div");
            responseDiv.id = "response-container";
            document.body.appendChild(responseDiv);
        }
        responseDiv.innerHTML = responseHTML;
        responseDiv.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-Form");
    var resumeDisplay = document.getElementById("resume-display");
    if (!form || !resumeDisplay) {
        console.error("Form or resume display container not found!");
        return;
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var resumeHTML = "<h2>Generated Resume</h2>";
        formData.forEach(function (value, key) {
            console.log("".concat(key, ": ").concat(value));
        });
        resumeHTML += "\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(formData.get("name") || "N/A", "</p>\n            <p><strong>Email:</strong> ").concat(formData.get("email") || "N/A", "</p>\n            <p><strong>Phone:</strong> ").concat(formData.get("phone") || "N/A", "</p>\n        ");
        resumeHTML += "<h3>Education</h3><p>".concat(formData.get("education") || "N/A", "</p>");
        resumeHTML += "<h3>Skills</h3><p>".concat(formData.get("skill") || "N/A", "</p>");
        resumeHTML += "<h3>Projects</h3><ul>";
        var projects = formData.getAll("project[]");
        if (projects.length) {
            projects.forEach(function (project, index) {
                resumeHTML += "<li><strong>Project ".concat(index + 1, ":</strong> ").concat(project, "</li>");
            });
        }
        else {
            resumeHTML += "<li>No projects listed.</li>";
        }
        resumeHTML += "</ul>";
        resumeHTML += "\n            <h3>Work Experience</h3>\n            <p><strong>Position:</strong> ".concat(formData.get("position") || "N/A", "</p>\n            <p><strong>Company:</strong> ").concat(formData.get("company") || "N/A", "</p>\n            <p><strong>Start Date:</strong> ").concat(formData.get("startDate") || "N/A", "</p>\n            <p><strong>End Date:</strong> ").concat(formData.get("endDate") || "N/A", "</p>\n        ");
        resumeDisplay.innerHTML = resumeHTML;
        console.log("Resume content rendered:", resumeHTML);
        resumeDisplay.scrollIntoView({ behavior: "smooth" });
    });
});
