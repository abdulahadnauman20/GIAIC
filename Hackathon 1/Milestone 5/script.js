document.addEventListener("DOMContentLoaded", function () {
    var addProjectButton = document.getElementById("add-project-btn");
    var container = document.getElementById("projects-container");
    var form = document.getElementById("resume-Form");
    var resumeDisplay = document.getElementById("resume-display");
    var downloadResumeButton = document.getElementById("download-resume-btn");
    var resumeLinkContainer = document.getElementById("resume-link-container");
    if (!addProjectButton || !container || !form || !resumeDisplay || !downloadResumeButton || !resumeLinkContainer) {
        console.error("Required elements not found!");
        return;
    }
    addProjectButton.addEventListener("click", function () {
        var projectCount = container.querySelectorAll(".project-field").length + 1;
        var newProjectField = document.createElement("div");
        newProjectField.className = "project-field";
        newProjectField.innerHTML = "\n            <label for=\"project-".concat(projectCount, "\">Project ").concat(projectCount, ":</label>\n            <input type=\"text\" id=\"project-").concat(projectCount, "\" name=\"project[]\" required>\n        ");
        container.appendChild(newProjectField);
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var resumeHTML = generateResumeHTML(formData);
        resumeDisplay.innerHTML = resumeHTML;
        // Encode the resume data into a URL
        var resumeData = {
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
        var encodedData = encodeURIComponent(JSON.stringify(resumeData));
        var resumeURL = "".concat(window.location.origin).concat(window.location.pathname, "?resume=").concat(encodedData);
        // Display the shareable link
        resumeLinkContainer.innerHTML = "\n            <p>Shareable Link: <a href=\"".concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a></p>\n        ");
    });
    downloadResumeButton.addEventListener("click", function () {
        if (resumeDisplay.innerHTML.trim()) {
            var pdfWindow = window.open("", "_blank");
            pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write("\n                <html>\n                <head><title>Resume</title></head>\n                <body>".concat(resumeDisplay.innerHTML, "</body>\n                </html>\n            "));
            pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.close();
            pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.print();
        }
        else {
            alert("Please generate a resume before downloading.");
        }
    });
    function generateResumeHTML(formData) {
        var resumeHTML = "<h2>".concat(formData.get("name") || "N/A", "</h2>");
        resumeHTML += "<p>Email: ".concat(formData.get("email") || "N/A", "</p>");
        resumeHTML += "<p>Phone: ".concat(formData.get("phone") || "N/A", "</p>");
        resumeHTML += "<h3>Education</h3><p>".concat(formData.get("education") || "N/A", "</p>");
        resumeHTML += "<h3>Skills</h3><p>".concat(formData.get("skill") || "N/A", "</p>");
        resumeHTML += "<h3>Projects</h3><ul>";
        formData.getAll("project[]").forEach(function (project) {
            resumeHTML += "<li>".concat(project, "</li>");
        });
        resumeHTML += "</ul>";
        resumeHTML += "<h3>Work Experience</h3>";
        resumeHTML += "<p>Position: ".concat(formData.get("position") || "N/A", "</p>");
        resumeHTML += "<p>Company: ".concat(formData.get("company") || "N/A", "</p>");
        resumeHTML += "<p>Start Date: ".concat(formData.get("startDate") || "N/A", "</p>");
        resumeHTML += "<p>End Date: ".concat(formData.get("endDate") || "N/A", "</p>");
        return resumeHTML;
    }
    // Check for resume data in the URL on page load
    var urlParams = new URLSearchParams(window.location.search);
    var resumeDataParam = urlParams.get("resume");
    if (resumeDataParam) {
        var resumeData_1 = JSON.parse(decodeURIComponent(resumeDataParam));
        var formData_1 = new FormData();
        Object.keys(resumeData_1).forEach(function (key) {
            if (Array.isArray(resumeData_1[key])) {
                resumeData_1[key].forEach(function (value) { return formData_1.append(key, value); });
            }
            else {
                formData_1.append(key, resumeData_1[key]);
            }
        });
        var resumeHTML = generateResumeHTML(formData_1);
        resumeDisplay.innerHTML = resumeHTML;
    }
});
