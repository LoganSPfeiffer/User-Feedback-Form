var form = document.getElementById("feedback-form");
var tooltip = document.getElementById("tooltip");
var feedbackDisplay = document.getElementById("feedback-display");
var pageWrapper = document.getElementById("page-wrapper");

// event delegation - char count on all fields from one listener
form.addEventListener("input", function (e) {
    if (e.target.classList.contains("form-field")) {
        var countSpan = document.getElementById(e.target.id + "-count");
        if (countSpan) {
            countSpan.textContent = e.target.value.length + " characters";
        }
    }
});

// mouseover shows tooltip
form.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("form-field")) {
        tooltip.textContent = e.target.getAttribute("data-tooltip");
        tooltip.style.display = "block";
    }
});

// mouseout hides tooltip
form.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("form-field")) {
        tooltip.style.display = "none";
    }
});

// mousemove positions tooltip near cursor
form.addEventListener("mousemove", function (e) {
    if (tooltip.style.display === "block") {
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px";
    }
});

// validate and prevent default on submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameVal = document.getElementById("name").value.trim();
    var emailVal = document.getElementById("email").value.trim();
    var commentsVal = document.getElementById("comments").value.trim();

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var commentsError = document.getElementById("comments-error");

    nameError.textContent = "";
    emailError.textContent = "";
    commentsError.textContent = "";

    var isValid = true;

    if (nameVal === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }
    if (emailVal === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }
    if (commentsVal === "") {
        commentsError.textContent = "Please enter a comment.";
        isValid = false;
    }

    if (isValid) {
        displayFeedback(nameVal, emailVal, commentsVal);
        form.reset();
    }
});

// append feedback card to the display container
function displayFeedback(name, email, comments) {
    var card = document.createElement("div");
    card.classList.add("feedback-card");
    card.innerHTML =
        "<strong>" + name + "</strong>" +
        '<span class="feedback-email">' + email + "</span>" +
        '<p class="feedback-comment">' + comments + "</p>";
    feedbackDisplay.appendChild(card);
}

// stopPropagation keeps form clicks from bubbling to background
form.addEventListener("click", function (e) {
    e.stopPropagation();
});

pageWrapper.addEventListener("click", function () {
    console.log("Background clicked (outside form).");
});