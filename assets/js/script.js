let name = window.document.querySelector('#name')
let email = window.document.querySelector('#email')
let msg = window.document.querySelector('#message')
let map = window.document.querySelector('#map')

let vName = false
let vEmail = false
let vMsg = false

function nameValidation() {
    if (name.value.length < 3) {
        let txtNome = window.document.querySelector('#txtNome')
        txtNome.style.display = 'block'
        txtNome.innerHTML = " (Digite um nome com mais de 3 letras)"
        txtNome.style.color = 'red'
        vName = true
    } else {
        txtNome.style.display = 'none'
        vName = false
    }
}

function emailValidation() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        let txtEmail = window.document.querySelector('#txtEmail')
        txtEmail.style.display = 'block'
        txtEmail.innerHTML = ('Digite um E-mail válido.')
        txtEmail.style.color = 'red'
        vEmail = true
    } else {
        txtEmail.style.display = 'none'
        vEmail = false
    }
}

function msmValidation() {
    if (message.value.length > 100) {
        let txtMsg = window.document.querySelector('#txtMsg')
        txtMsg.style.display = 'block'
        txtMsg.innerHTML = ('Digite uma mensagem com até 100 caracteres.')
        txtMsg.style.color = 'red'
        vMsg = true
    } else {
        txtMsg.style.display = 'none'
        vMsg = false
    }
}

function send() {
    if (vName == true && vEmail == true && vMsg == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function zoom() {
    map.style.width = '800px'
    map.style.height = '600px'
}

function zoomOut() {
    map.style.width = '400px'
    map.style.height = '250px'
}

