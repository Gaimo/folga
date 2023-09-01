// Botão para verificar as datas
const btn_check = document.getElementById("btn_check");

// Resposta, mensagem que aparece para o usuário.
const response = document.getElementById("response");

let timeoutId;
let time = 4 // seconds

// Retorna o dia do ano de 1 a 365
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = date - startOfYear;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    return dayOfYear;
}

// é par?
function isEven(number) {
    return number % 2 === 0;
}

function clearResponse() {
    if (timeoutId) {
        clearTimeout(timeoutId); // Clear existing timeout if any
    }
    timeoutId = setTimeout(() => {
        response.textContent = "";
        timeoutId = null; // Reset the timeout ID
    }, time * 1000);
}

// Verifica se as datas foram fornecidas
function areDatesProvided(dayOff, dayToCheck) {
    return dayOff !== "" && dayToCheck !== "";
}

// Calcula se o usuário folgará ou trabalhará com base nas datas
function calculateWorkOrLeisure(dayOff, dayToCheck) {
    const date_dayOff = new Date(dayOff);
    const date_dayToCheck = new Date(dayToCheck);

    const dayOfYear_dayOff = getDayOfYear(date_dayOff);
    const dayOfYear_dayToCheck = getDayOfYear(date_dayToCheck);

    return isEven(dayOfYear_dayOff) === isEven(dayOfYear_dayToCheck) ?
        "Você folgará nesse dia!" :
        "Você trabalhará nesse dia!";
}

btn_check.addEventListener("mousedown", () => {
    const dayOff = document.getElementById("dayOff").value;
    const dayToCheck = document.getElementById("dayToCheck").value;

    if (!areDatesProvided(dayOff, dayToCheck)) {
        response.textContent = "Por favor, preencha os dois campos.";
        clearResponse();
        return;
    }

    const result = calculateWorkOrLeisure(dayOff, dayToCheck);
    response.textContent = result;
    clearResponse();
});
