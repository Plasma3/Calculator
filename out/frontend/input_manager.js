"use strict";
const app = document.getElementById("app");
const input = document.createElement("input");
input.id = "input";
input.type = "text";
app?.appendChild(input);
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        console.log(input.value);
    }
});
//# sourceMappingURL=input_manager.js.map