export interface PaymentGateway {
    makePayment(amount: number): void;
}

export class PayPalPayment implements PaymentGateway {
    makePayment(amount: number): void {
        console.log(`Payment of $${amount} made using PayPal.`);
    }
}

export class StripePayment {
    processPayment(amount: number): void {
        console.log(`Payment of $${amount} made using Stripe.`);
    }
}

export class StripePaymentAdapter implements PaymentGateway {
    private stripePayment: StripePayment;

    constructor(stripePayment: StripePayment) {
        this.stripePayment = stripePayment;
    }

    makePayment(amount: number): void {
        this.stripePayment.processPayment(amount);
    }
}
