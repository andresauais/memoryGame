const username = document.getElementById("username");
const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    if (username.value === "" || username.value === null) {
        alert("User name must not be empty")
    }
    e.preventDefault()
})