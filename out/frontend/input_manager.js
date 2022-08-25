import calc from "../backend/calc.js";
var app = document.getElementById("app");
var input = document.createElement("input");
input.id = "input";
input.type = "text";
app === null || app === void 0 ? void 0 : app.appendChild(input);
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        var x = calc(input.value);
        input.value = "";
    }
});
//# sourceMappingURL=input_manager.js.map