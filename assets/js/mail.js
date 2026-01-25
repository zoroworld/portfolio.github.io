(function () {
  "use strict";

  document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { "Accept": "application/json" }
    });
  
    if (response.ok) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Failed to submit form. Try again.");
    }
  });


})();
