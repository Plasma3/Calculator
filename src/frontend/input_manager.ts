import calc from "../backend/calc.js";

const app = document.getElementById("app");
const input = document.createElement("input");

input.id = "input"; 
input.type = "text";

app?.appendChild(input);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        input.blur();

        let x = calc(input.value);

        input.value = "";
    }
})

