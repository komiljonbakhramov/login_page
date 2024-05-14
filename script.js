const usernameInput = document.getElementsByName("username")[0];
const passwordInput = document.getElementsByName("password")[0];
const form = document.querySelector("form");
const loginButton = document.querySelector("button")

let username, password;
init()





function init() {

    loginButton.disabled = true

    usernameInput.oninput = function (event) {
        username = event.target.value.trim()
        if (username === "") {
            loginButton.disabled = true
        } else {
            loginButton.disabled = false
        }
    }
    passwordInput.oninput = function (event) {
        password = event.target.value

        if (password === "") {
            loginButton.disabled = true
        } else {
            loginButton.disabled = false
        }
    }

    form.onsubmit = async function (event) {
        event.preventDefault()
        console.log(username, password);


        const result = await login()
        saveToken(result.token)
        rendirect()


    }

    function saveToken(token) {
        localStorage.setItem("token", token);
    }



}



async function login() {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = await response.json();
    console.log(result);
    return result;

}

function rendirect() {
    window.location.href = "http://127.0.0.1:5500/product.html"
}

