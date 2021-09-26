const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const checkbox = document.querySelector(".checkbox");
const check1 = "@";
const check2 = ".com";

btn.addEventListener("click", () => {
    let value = input.value;
    if (value.includes(check1) && value.includes(check2) && checkbox.checked == true) {
        input.style.color = "#038000";
        input.style.backgroundColor = "#9E9E9E";
        input.disabled = true;
    } else {
        input.style.color = "#FF0000";
        input.disabled = false;
        input.addEventListener("input", () => {
            let newValue = input.value;
            if (newValue == value) {
                return;
            } else {
                input.style.color = "#2f2f2f";
            }
        });
    }
});