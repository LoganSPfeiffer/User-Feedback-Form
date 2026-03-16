User Feedback Form
A simple interactive feedback form built with HTML, CSS, and JavaScript 

What It Does
Users can enter their name, email, and a comment. The form validates all fields before submitting, shows real time character counts as you type, and displays tooltip hints when hovering over each field. Valid submissions get added to the page dynamically without reloading.

Features
Form validation with error messages and preventDefault to block empty submissions.
Real time character counting using the input event.
Tooltips on mouseover and mouseout tied to each field.
Event delegation so one listener on the form handles all fields.
stopPropagation to prevent form clicks from bubbling to the background.
Submitted feedback displayed dynamically using createElement and appendChild.

Files
index.html contains the form structure and layout.
style.css handles all the styling.
cp_1.js contains the event listeners and DOM manipulation logic.