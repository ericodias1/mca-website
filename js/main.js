AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
});

function validateForm() {
  const myForm = document.forms["contact"];
  requiredFields = ['name', 'email', 'phone'];

  namePresent = myForm['name'].value != "";
  emailOrPhonePresent = requiredFields.slice(1).some((field) => myForm[field].value != "");

  if (!namePresent || !emailOrPhonePresent) {
    requiredFields.forEach((field) => {
      input = myForm[field];
      
      if (input.value == "") {
        input.classList.add("border-red-500");
        document.getElementById(`${field}-error`).classList.remove('hidden');
      };
    });

    return false;
  };

  const formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => console.log("Form successfully submitted"))
    .catch(error => alert(error));
}