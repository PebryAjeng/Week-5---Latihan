const form = document.querySelector(".DataForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the "Nama Lengkap" input field
    const nama = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const address = document.getElementById("address");

    // Check if "Nama Lengkap" is empty
    if (nama.value === "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Masukkan Nama Anda!";
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "grey";
        nama.insertAdjacentElement("afterend", errorMessage);
    }

    if (email.value === "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Masukkan Email Anda!";
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "grey";
        email.insertAdjacentElement("afterend", errorMessage);
    }

    if (number.value === "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Masukkan Nomor HP Anda!";
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "grey";
        number.insertAdjacentElement("afterend", errorMessage);
    }

    if (address.value === "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Masukkan Nomor HP Anda!";
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "grey";
        address.insertAdjacentElement("afterend", errorMessage);
    }
});