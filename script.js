function clearValidationResult() {
  document.getElementById("result").innerHTML = "";
}

function validateEmail(email) {
  // Regular expression to check if the email format is valid
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function validation() {
  clearValidationResult();

  const username = document.Formfill.Username.value;
  const email = document.Formfill.Email.value;
  const password = document.Formfill.Password.value;
  const confirmPassword = document.Formfill.cPassword.value;

  if (username === "") {
    document.getElementById("result").innerHTML = "Enter Username";
    return false;
  } else if (username.length < 6) {
    document.getElementById("result").innerHTML = "Username should contain at least 6 characters";
    return false;
  } else if (email === "") {
    document.getElementById("result").innerHTML = "Enter your Email";
    return false;
  } else if (!validateEmail(email)) {
    document.getElementById("result").innerHTML = "Enter a valid Email address";
    return false;
  } else if (password === "") {
    document.getElementById("result").innerHTML = "Enter your Password";
    return false;
  } else if (password !== confirmPassword) {
    document.getElementById("result").innerHTML = "Passwords don't match";
    return false;
  } else if (confirmPassword === "") {
    document.getElementById("result").innerHTML = "Enter confirm password";
    return false;
  } else if (password.length < 8) {
    document.getElementById("result").innerHTML = "Password must contain at least 8 characters";
    return false;
  } else {
    popup.classList.add("open-slide");
    return false;
  }
}

var popup = document.getElementsByClassName('popup')[0];

document.getElementById("ok-button").addEventListener("click", function () {
  popup.classList.remove("open-slide");
});
