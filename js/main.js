AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
});

function validateForm() {
  requiredFields = ['name', 'email', 'phone'];

  // Limpar erros anteriores
  requiredFields.forEach((field) => {
    input = document.forms["contactForm"][field];
    input.classList.remove("border-red-500");
    document.getElementById(`${field}-error`).classList.add('hidden');
  });

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
    return false;
  }

  var v = grecaptcha.getResponse();
  if (v.length == 0) {
    document.getElementById('captcha').innerHTML="Captcha is required.";
    return false;
  } else {
    document.getElementById('captcha').innerHTML="";
    return true;
  }
}

// Event listener para envio do formulário via Ajax
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validar formulário
      if (!validateForm()) {
        return false;
      }
      
      // Coletar dados do formulário
      const formData = new FormData(form);
      const recaptchaResponse = grecaptcha.getResponse();
      
      // Adicionar reCAPTCHA ao FormData
      formData.append('g-recaptcha-response', recaptchaResponse);
      
      // Enviar via Ajax
      fetch('https://portal.golfleagueguru.com/contact_forms', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.json().catch(() => ({ success: true }));
        } else {
          throw new Error('Erro ao enviar formulário');
        }
      })
      .then(data => {
        alert('Sucesso! Sua mensagem foi enviada com sucesso.');
        form.reset();
        grecaptcha.reset();
      })
      .catch(error => {
        alert('Erro! Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        console.error('Erro:', error);
      });
      
      return false;
    });
  }
});