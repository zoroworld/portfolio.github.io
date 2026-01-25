(function () {
  "use strict";

  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const output = {};
    for (const [key, value] of formData.entries()) {
      if (output[key]) {
        if (Array.isArray(output[key])) {
          output[key].push(value);
        } else {
          output[key] = [output[key], value];
        }
      } else {
        output[key] = value;
      }
    }

    console.log(output)
  });
})();
