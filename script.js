function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Tạo tài khoản thành công!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        window.location.href = "home.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}

function logout() {
    window.location.href = "index.html";
}
