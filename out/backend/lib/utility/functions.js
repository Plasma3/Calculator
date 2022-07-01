"use strict";
function clone(instance) {
    const copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
}
//# sourceMappingURL=functions.js.map