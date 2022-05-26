let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charSet = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890@$%#!"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = ""
    for(let i=0, n = charSet.length; i < sliderElement.value; ++i){
        pass += charSet.charAt(Math.floor(Math.random()*n)); //sómath.random pega 1 numero(aleatorio)
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass
}

function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha)
    //navigator.clipboard.writeText(novaSenha)
}