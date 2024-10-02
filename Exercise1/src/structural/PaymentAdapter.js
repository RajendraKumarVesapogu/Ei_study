"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePaymentAdapter = exports.StripePayment = exports.PayPalPayment = void 0;
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.makePayment = function (amount) {
        console.log("Payment of $".concat(amount, " made using PayPal."));
    };
    return PayPalPayment;
}());
exports.PayPalPayment = PayPalPayment;
var StripePayment = /** @class */ (function () {
    function StripePayment() {
    }
    StripePayment.prototype.processPayment = function (amount) {
        console.log("Payment of $".concat(amount, " made using Stripe."));
    };
    return StripePayment;
}());
exports.StripePayment = StripePayment;
var StripePaymentAdapter = /** @class */ (function () {
    function StripePaymentAdapter(stripePayment) {
        this.stripePayment = stripePayment;
    }
    StripePaymentAdapter.prototype.makePayment = function (amount) {
        this.stripePayment.processPayment(amount);
    };
    return StripePaymentAdapter;
}());
exports.StripePaymentAdapter = StripePaymentAdapter;
