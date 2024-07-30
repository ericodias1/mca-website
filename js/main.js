AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
});

function validateContactForm() {
  fields = ['name', 'email'];
  submitForm = fields.every((field) => document.forms["contactForm"][field].value != "")

fields.forEach((field) => {
    input = document.forms["contactForm"][field]

    if (input.value == "") {
      input.classList.add("border-red-500");
      document.getElementById(`${field}-error`).classList.remove('hidden')
    };
  });

  return submitForm;
}