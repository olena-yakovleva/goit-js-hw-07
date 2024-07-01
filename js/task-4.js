document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData); // Виводимо об'єкт з даними форми

    form.reset(); // Очищаємо форму
  });
