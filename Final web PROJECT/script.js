// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 2) {
      nameError.textContent = "Please enter your name.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;s
    } else {
      messageError.textContent = "";
    }

    // Success
    const formSuccess = document.getElementById('formSuccess');
    if (valid) {
      formSuccess.textContent = "Thank you! We'll get back to you soon.";
      contactForm.reset();
      setTimeout(() => { formSuccess.textContent = ""; }, 4000);
    } else {
      formSuccess.textContent = "";
    }
  });
}

// Payment form validation
const paymentForm = document.getElementById('paymentForm');
if (paymentForm) {
  paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Plan validation
    const plan = document.getElementById('plan');
    const planError = document.getElementById('planError');
    if (plan.value === "") {
      planError.textContent = "Please select a plan.";
      valid = false;
    } else {
      planError.textContent = "";
    }

    // Email validation
    const payerEmail = document.getElementById('payerEmail');
    const payerEmailError = document.getElementById('payerEmailError');
    if (!payerEmail.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      payerEmailError.textContent = "Enter a valid email.";
      valid = false;
    } else {
      payerEmailError.textContent = "";
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (!phone.value.match(/^\d{10,}$/)) {
      phoneError.textContent = "Enter a valid phone number.";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    // Success
    const paymentSuccess = document.getElementById('paymentSuccess');
    if (valid) {
      paymentSuccess.textContent = "Thank you! Payment instructions will be sent to your email or phone.";
      paymentForm.reset();
      setTimeout(() => { paymentSuccess.textContent = ""; }, 4000);
    } else {
      paymentSuccess.textContent = "";
    }
  });
}

// Payment button interactivity
document.querySelectorAll('.pay-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const paymentPrompt = document.getElementById('paymentPrompt');
    const plan = btn.getAttribute('data-plan');
    const method = btn.getAttribute('data-method');
    if (plan === "Enterprise") {
      paymentPrompt.textContent = "Thank you! Our team will contact you for a custom quote.";
    } else if (method === "card") {
      paymentPrompt.textContent = `Card payment for ${plan} plan coming soon.`;
    } else {
      paymentPrompt.textContent = `To pay for the ${plan} plan, use M-Pesa Paybill 123456, Account: ClinicQueue.`;
    }
    setTimeout(() => { paymentPrompt.textContent = ""; }, 5000);
  });
});

// Simple scroll animation for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > section');
  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  };
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'all 0.7s';
  });
  window.addEventListener('scroll', reveal);
  reveal();
});