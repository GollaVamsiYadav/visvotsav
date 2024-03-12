// select the form and its elements
const form = document.getElementById("ticket-form");
const nameInput = document.getElementById("ticket-form-name");
const emailInput = document.getElementById("ticket-form-email");
const phoneInput = document.querySelector("input[name=Phone]");
const duNumberInput = document.getElementById("ticket-form-dunumber");
const duNumberConfirmInput = document.getElementById("ticket-form-dunumberconfirm");

const eventSelect = document.getElementById("ticket-form-event");

// validate the form fields on form submit
form.addEventListener("submit", (event) => {
  let isValid = true;

  // validate the name input
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  // validate the email input
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
  }

  // validate the phone input
  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("is-invalid");
    isValid = false;
  } else {
    phoneInput.classList.remove("is-invalid");
  }

  // validate the DU number input
  if (duNumberInput.value.trim() === "") {
    duNumberInput.classList.add("is-invalid");
    isValid = false;
  } else {
    duNumberInput.classList.remove("is-invalid");
  }

  // validate the confirmed DU number input
  if (duNumberConfirmInput.value.trim() === "") {
    duNumberConfirmInput.classList.add("is-invalid");
    isValid = false;
  } else if (duNumberInput.value.trim() !== duNumberConfirmInput.value.trim()) {
    duNumberConfirmInput.classList.add("is-invalid");
    document.getElementById("error-msg").hidden = false;
    isValid = false;
  } else {
    duNumberConfirmInput.classList.remove("is-invalid");
    document.getElementById("error-msg").hidden = true;
  }

  // validate the branch select
  if (branchSelect.value === "") {
    branchSelect.classList.add("is-invalid");
    isValid = false;
  } else {
    branchSelect.classList.remove("is-invalid");
  }

  // validate the event select
  if (eventSelect.value === "") {
    eventSelect.classList.add("is-invalid");
    isValid = false;
  } else {
    eventSelect.classList.remove("is-invalid");
  }

  // prevent the form submission if any field is invalid
  if (!isValid) {
    event.preventDefault();
  }
});

// validate the phone input on keypress and allow only numbers
phoneInput.addEventListener("keypress", (event) => {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});
