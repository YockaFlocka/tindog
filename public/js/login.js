const loginFormHandler = async (event) => {
  console.log("loginFormHandler called");
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/matches");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const fname = document.querySelector("#fname-signup").value.trim();
  const lname = document.querySelector("#lname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (fname && lname && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ fname, lname, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/matches");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("login-button")
  .addEventListener("click", loginFormHandler);

document
  .getElementById("signup-button")
  .addEventListener("click", signupFormHandler);
