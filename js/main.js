AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
});

function validateForm() {
  requiredFields = ['name', 'email', 'phone'];

  namePresent = document.forms["contactForm"]['name'].value != "";
  emailOrPhonePresent = requiredFields.slice(1).some((field) => document.forms["contactForm"][field].value != "");

  if (!namePresent || !emailOrPhonePresent) {
    requiredFields.forEach((field) => {
      input = document.forms["contactForm"][field];
      
      if (input.value == "") {
        input.classList.add("border-red-500");
        document.getElementById(`${field}-error`).classList.remove('hidden');
      };
    });
  };

  if (namePresent && emailOrPhonePresent) {
    var v = grecaptcha.getResponse();

    if (v.length == 0) {
        document.getElementById('captcha').innerHTML="Captcha is required.";
        return false;
      }
      else {
        document.getElementById('captcha').innerHTML="";
        return true;
      }
    } else return false;
}