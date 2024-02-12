const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
      username: name,
      email: email,
      password: password,
    };
    console.log(formData);

    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  });
}
