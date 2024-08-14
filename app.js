function encriptar(texto) {
    return texto 
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function encriptarTexto() {
    const textoIntroducido = document.getElementById('textoIntroducido').value; 
    const textoEncriptado = encriptar(textoIntroducido); 
    const textoinresados = document.getElementById('textoIntroducido').value;
    if (textoinresados.trim() === "") {  
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa un texto para encriptar.',
            confirmButtonText: 'Entendido',
            background: '#f9f9f9',
            confirmButtonColor: '#3085d6'
        });
        return;
    }
    document.getElementById('textoEncriptado').textContent = textoEncriptado;
    document.getElementById('imagenMuñeco').style.display = 'none';
    document.getElementById('mensaje__validacion').style.display = 'none';

    document.getElementById('botonCopiar').style.display = 'block';
   }

function desencriptar(texto) {
    return texto 
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}  

function desencriptarTexto() {
    const textoIntroducido = document.getElementById('textoIntroducido').value;
    const textoDesencriptado = desencriptar(textoIntroducido)
    const textoinresado = document.getElementById('textoIntroducido').value;
    if (textoinresado.trim() === "") { 
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa un texto para desencriptar.',
            confirmButtonText: 'Entendido',
            background: '#f9f9f9',
            confirmButtonColor: '#3085d6'
        });
        return;
}
    document.getElementById('textoEncriptado').textContent =textoDesencriptado;
    document.getElementById('imagenMuñeco').style.display = 'none';
    document.getElementById('mensaje__validacion').style.display = 'none';

    document.getElementById('botonCopiar').style.display = 'block';
}

function copiarTexto() {
    const textoEncriptado = document.getElementById('textoEncriptado').textContent;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        Swal.fire({
            title: '¡Texto copiado!',
            text: 'El texto ha sido copiado al portapapeles.',
            icon: 'success', 
            confirmButtonText: 'Aceptar',
            timer: 2000, 
            timerProgressBar: true, 
            background: '#f9f9f9', 
            color: '#4C3F91',
            customClass: {
                popup: 'swal2-popup-class',
                title: 'swal2-title-class',
                confirmButton: 'swal2-button-class',
            }
        });
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

