"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePaymentAdapter = exports.StripePayment = exports.PayPalPayment = void 0;
class PayPalPayment {
    makePayment(amount) {
        console.log(`Payment of $${amount} made using PayPal.`);
    }
}
exports.PayPalPayment = PayPalPayment;
class StripePayment {
    processPayment(amount) {
        console.log(`Payment of $${amount} made using Stripe.`);
    }
}
exports.StripePayment = StripePayment;
class StripePaymentAdapter {
    constructor(stripePayment) {
        this.stripePayment = stripePayment;
    }
    makePayment(amount) {
        this.stripePayment.processPayment(amount);
    }
}
exports.StripePaymentAdapter = StripePaymentAdapter;
//# sourceMappingURL=PaymentAdapter.js.map