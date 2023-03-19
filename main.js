form.addEventListener('submit', function (e) {
    e.preventDefault();

    let amount = document.querySelector("#amount").value;
    let tips = document.querySelector("#tips").value;
    let tipsamount = document.querySelector("#tipsamount");
    let display = document.querySelector(".display");

    let calc = tips/100*amount;
    let calc1 = parseInt(amount) + calc;

        tipsamount.value = calc;
        document.querySelector("#total").value = calc1;
        display.style.display = "block";
});