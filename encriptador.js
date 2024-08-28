function encriptarTexto() {
    let texto = document.getElementById('textoAEncriptar').value;
    let desplazamiento = 3;
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
            }
        }
        textoEncriptado += char;
    }
    document.getElementById('textoProcesado').innerText = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById('textoAEncriptar').value;
    let desplazamiento = 3;
    let textoDesencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - desplazamiento + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - desplazamiento + 26) % 26) + 97);
            }
        }
        textoDesencriptado += char;
    }
    document.getElementById('textoProcesado').innerText = textoDesencriptado;
}
