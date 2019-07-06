let calculate = () => {
    let principal = document.loandata.principal.value;
    let interest = document.loandata.interest.value / 100 / 12;
    let payments = document.loandata.years.value * 12;

    let x = Math.pow(1 + interest, payments);
    let monthly = (principal * x * interest) / (x - 1)

    let payment = document.getElementById("payment");
    let total = document.getElementById("total");
    let totalinterest = document.getElementById("totalinterest")

    if (isFinite(monthly)) {
        payment.innerText = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML=((monthly * payments) - principal).toFixed(2);
    }
}