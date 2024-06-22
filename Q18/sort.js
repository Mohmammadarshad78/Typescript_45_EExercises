var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ctv = ["china", "denmark", "usa", "brazil", "argentina"];
console.log("orignal order", ctv);
console.log("alphabatical order:", __spreadArray([], ctv, true).sort());
console.log("still in orignal order:", ctv);
console.log("reverse order:", __spreadArray([], ctv, true).reverse());
console.log("still in orignal order:", ctv);
console.log("orignal array reserved:", ctv.reverse());
console.log("back to orignal order:", ctv.reverse());
console.log("sorted in alphabatcal order:", ctv.sort());
console.log("orignal array reserved again:", ctv.reverse());
