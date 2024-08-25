function encryptText() {
    const inputText = document.getElementById("input-text").value;
    const errorMessage = document.getElementById("error-message");

    // Validación del texto de entrada
    if (!validateText(inputText)) {
        errorMessage.style.display = "block";
        return;
    }

    // Ocultar mensaje de error si la validación es exitosa
    errorMessage.style.display = "none";

    // Reglas de encriptación
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el resultado
    displayResult(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById("input-text").value;
    const errorMessage = document.getElementById("error-message");

    // Validación del texto de entrada
    if (!validateText(inputText)) {
        errorMessage.style.display = "block";
        return;
    }

    // Ocultar mensaje de error si la validación es exitosa
    errorMessage.style.display = "none";

    // Reglas de desencriptación
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el resultado
    displayResult(decryptedText);
}

function copyText() {
    let outputText = document.getElementById("output-text").value;

    navigator.clipboard.writeText(outputText)
        .then(() => {
            // Cambia el texto del botón a "Copiado"
            const copyButton = document.getElementById("copy-btn");
            copyButton.textContent = "Copiado";
            copyButton.classList.add("copied");

            // Limpiar el campo de entrada
            document.getElementById("input-text").value = "";

            // Restaura el texto del botón a "Copiar" después de 2 segundos
            setTimeout(() => {
                copyButton.textContent = "Copiar";
                copyButton.classList.remove("copied");
            }, 2000);
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}


function validateText(text) {
    // Validar que el texto solo contenga letras minúsculas y espacios
    return /^[a-z\s]*$/.test(text);
}

function displayResult(text) {
    const resultContainer = document.getElementById("result-container");
    const placeholder = document.getElementById("placeholder");
    const outputText = document.getElementById("output-text");

    // Ocultar el placeholder e insertar el texto encriptado/desencriptado
    placeholder.classList.add("hidden");
    outputText.value = text;
    resultContainer.classList.add("show");
}
