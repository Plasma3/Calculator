"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc_js_1 = __importDefault(require("../backend/calc.js"));
var app = document.getElementById("app");
var input = document.createElement("input");
input.id = "input";
input.type = "text";
app === null || app === void 0 ? void 0 : app.appendChild(input);
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        var x = (0, calc_js_1.default)(input.value);
        input.value = "";
    }
});
//# sourceMappingURL=input_manager.js.map