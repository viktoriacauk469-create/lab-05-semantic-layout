document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const dialog = document.getElementById("feedbackSuccessDialog");
  const closeButton = document.getElementById("feedbackSuccessClose");
  const submitButton = form?.querySelector('button[type="submit"]');
  const fields = {
    username: document.getElementById("feedback-name"),
    email: document.getElementById("feedback-email"),
    phone: document.getElementById("feedback-phone"),
    message: document.getElementById("feedback-expectations"),
    agreement: document.getElementById("feedback-privacy"),
  };

  if (
    !form ||
    !dialog ||
    !closeButton ||
    !submitButton ||
    Object.values(fields).some((field) => !field)
  ) {
    console.error(
      "Feedback form validation requires the form fields, submit button, and success dialog.",
    );
    return;
  }

  form.noValidate = true;

  const validators = {
    username: validateUsername,
    email: validateEmail,
    phone: validatePhone,
    message: validateMessage,
    agreement: validateAgreement,
  };
  const errors = Object.fromEntries(
    Object.entries(fields).map(([name, field]) => [
      name,
      createErrorMessage(field),
    ]),
  );
  function validateUsername() {
    return fields.username.value.trim().length >= 2
      ? ""
      : "Ім’я має містити щонайменше 2 символи.";
  }

  function validateEmail() {
    const email = fields.email.value.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ""
      : "Введіть коректну електронну адресу.";
  }

  function validatePhone() {
    const phone = fields.phone.value;
    return phone === "" || /^\+380[0-9]{9}$/.test(phone)
      ? ""
      : "Введіть номер у форматі +380XXXXXXXXX.";
  }

  function validateMessage() {
    return fields.message.value.trim().length >= 10
      ? ""
      : "Повідомлення має містити щонайменше 10 символів.";
  }

  function validateAgreement() {
    return fields.agreement.checked
      ? ""
      : "Поставте позначку, щоб погодитися з політикою конфіденційності.";
  }

  function createErrorMessage(field) {
    const errorId = `${field.id}-error`;
    let error = document.getElementById(errorId);

    if (!error) {
      // Create an accessible error element without requiring HTML changes.
      error = document.createElement("p");
      error.id = errorId;
      error.className = "hidden text-sm text-red-600";

      const errorAnchor =
        field.type === "checkbox" && field.parentElement
          ? field.parentElement
          : field;
      errorAnchor.insertAdjacentElement("afterend", error);
    }

    error.setAttribute("aria-live", "polite");
    error.setAttribute("aria-atomic", "true");

    const describedBy = new Set(
      (field.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter(Boolean),
    );
    describedBy.add(errorId);
    field.setAttribute("aria-describedby", [...describedBy].join(" "));

    return error;
  }

  function setFieldState(name, errorMessage) {
    const field = fields[name];
    const error = errors[name];

    field.classList.remove("border-red-500", "border-green-500");
    if (error.textContent !== errorMessage) {
      error.textContent = errorMessage;
    }
    error.classList.toggle("hidden", !errorMessage);

    if (errorMessage) {
      field.classList.add("border-red-500");
      field.setAttribute("aria-invalid", "true");
      field.dataset.state = "error";
      return false;
    }

    field.removeAttribute("aria-invalid");

    const isEmptyOptionalPhone = name === "phone" && field.value === "";
    if (!isEmptyOptionalPhone) {
      field.classList.add("border-green-500");
      field.dataset.state = "success";
    } else {
      delete field.dataset.state;
    }

    return true;
  }

  function validateField(name) {
    return setFieldState(name, validators[name]());
  }

  for (const [name, field] of Object.entries(fields)) {
    const eventName = name === "agreement" ? "change" : "input";

    field.addEventListener("blur", () => {
      validateField(name);
    });

    field.addEventListener(eventName, () => {
      validateField(name);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalidField = null;
    for (const name of Object.keys(fields)) {
      if (!validateField(name) && !firstInvalidField) {
        firstInvalidField = fields[name];
      }
    }

    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    submitButton.focus();
  });
});
