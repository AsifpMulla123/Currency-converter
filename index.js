const CurrencyFirstEl = document.getElementById('currency-first');

const worthFirstEl = document.getElementById('worth-first');

const CurrencySecondEl = document.getElementById('currency-second');

const worthSecondEl = document.getElementById('worth-second');

const exchangeRateEl = document.getElementById('exchange-rate');

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/e12eb81b390450cd816de460/latest/${CurrencyFirstEl.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[CurrencySecondEl.value]
        exchangeRateEl.innerText = `1 ${CurrencyFirstEl.value} = ${rate + " " + CurrencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
        console.log(data);
    })
    console.log("Called");
}

CurrencyFirstEl.addEventListener('change', updateRate);
CurrencySecondEl.addEventListener('change', updateRate);
worthFirstEl.addEventListener('input', updateRate);