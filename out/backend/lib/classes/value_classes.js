"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRational = exports.ValueInteger = exports.Value = void 0;
var Value = /** @class */ (function () {
    function Value() {
    }
    return Value;
}());
exports.Value = Value;
var ValueInteger = /** @class */ (function (_super) {
    __extends(ValueInteger, _super);
    function ValueInteger(number) {
        var _this = _super.call(this) || this;
        _this.number = number;
        _this.number = number;
        return _this;
    }
    return ValueInteger;
}(Value));
exports.ValueInteger = ValueInteger;
var ValueRational = /** @class */ (function (_super) {
    __extends(ValueRational, _super);
    function ValueRational() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValueRational;
}(Value));
exports.ValueRational = ValueRational;
//# sourceMappingURL=value_classes.js.map