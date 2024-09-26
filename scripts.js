const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (evento) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, )
        
    }
}

function convertCurrency(amount, price, symbol) {

}