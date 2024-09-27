const USD = 5.43;
const EUR = 6.07;
const GBP = 7.27;
const JPY = 0.036;
const CAD = 4.07;
const AUD = 3.94; 

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
    const hasInvalidCharactersRegex = /[^\d.,]+/g;
    amount.value = amount.value.replace(hasInvalidCharactersRegex, "");
});

form.onsubmit = (evento) => {
    evento.preventDefault();
    console.log("Evento onsubmit acionado");

    console.log("Valor do campo amount:", amount.value);
    console.log("Valor do campo currency:", currency.value);

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
        case "JPY":
            convertCurrency(amount.value, JPY, "¥");
            break;
        case "CAD":
            convertCurrency(amount.value, CAD, "C$");
            break;
        case "AUD":
            convertCurrency(amount.value, AUD, "A$");
            break;
        default:
            console.log("Selecione uma moeda");
    }
};

function convertCurrency(amount, price, symbol) {
    console.log("Convertendo", amount, "com a taxa", price);
    
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
        
        let total = amount * price;

        if(isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        total = formatCurrencyBRL(total).replace("R$", "");
        result.textContent = `${total} Reais`;

        footer.classList.add("show-result");
        console.log("Resultado:", total);
    } catch (error) {
        footer.classList.remove("show-result");
        alert("Não foi possível converter.");
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
