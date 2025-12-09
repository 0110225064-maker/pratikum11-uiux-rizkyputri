function login() {
const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;


if (user === 'ahmad2017' && pass === 'integrity') {
alert('Login sukses');
document.body.innerHTML = '<h1>Login Sukses</h1>';
} else {
alert('Login gagal');
}
}