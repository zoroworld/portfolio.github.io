(function () {
  "use strict";

  const loading = document.querySelector(".loading");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".sent-message");

  document
    .getElementById("contact-form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      loading.style.display = "block";
      const form = e.target;
      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        loading.style.display = "none";
        successMessage.style.display = "block";
        //   alert("Form submitted successfully!");
        form.reset();
      } else {
        errorMessage.style.display = "block";
        //   alert("Failed to submit form. Try again.");
      }
    });
})();
