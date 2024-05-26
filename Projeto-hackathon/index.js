function showWelcome() {
    document.getElementById('welcomeContainer').classList.remove('hidden');
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('registerContainer1').classList.add('hidden');
    document.getElementById('registerContainer2').classList.add('hidden');
}

function showLoginRegister() {
    document.getElementById('welcomeContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('registerContainer1').classList.remove('hidden');
    document.getElementById('registerContainer2').classList.add('hidden');
}

function showPreferences() {
    document.getElementById('registerContainer1').classList.add('hidden');
    document.getElementById('registerContainer2').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('loginContainer').classList.remove('hidden');
    document.getElementById('registerContainer1').classList.add('hidden');
    document.getElementById('registerContainer2').classList.add('hidden');
}

function togglePreference(button) {
    button.classList.toggle('selected');
    checkPreferences();
}

function checkPreferences() {
    const buttons = document.querySelectorAll('#registerContainer2 .button-group button');
    const selected = Array.from(buttons).some(button => button.classList.contains('selected'));
    document.getElementById('completeRegistration').disabled = !selected;
}

function completeRegistration() {
    alert("Cadastro concluído com sucesso!");
    // Lógica de conclusão do cadastro aqui.
}

function login() {
    alert("Login efetuado!");
    // Lógica de login aqui.
}