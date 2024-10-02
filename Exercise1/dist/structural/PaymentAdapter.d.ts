export interface PaymentGateway {
    makePayment(amount: number): void;
}
export declare class PayPalPayment implements PaymentGateway {
    makePayment(amount: number): void;
}
export declare class StripePayment {
    processPayment(amount: number): void;
}
export declare class StripePaymentAdapter implements PaymentGateway {
    private stripePayment;
    constructor(stripePayment: StripePayment);
    makePayment(amount: number): void;
}
