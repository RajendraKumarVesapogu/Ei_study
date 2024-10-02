import { User } from './behavioral/Observer';
import { NotificationService } from './behavioral/Observer';
import { CommandInvoker, SaveCommand } from './behavioral/Command';
import { Logger } from './creational/Logger';
import { NotificationFactory } from './creational/NotificationFactory';
import { StripePaymentAdapter, PayPalPayment, StripePayment } from './structural/PaymentAdapter';
import { BasicUser, AdminUser } from './structural/UserDecorator';

// Behavioral Pattern
const user1 = new User("Alice");
const notificationService = new NotificationService();
notificationService.subscribe("system-update", user1);
notificationService.notify("system-update", "New feature released!");

// Command Pattern
const saveCommand = new SaveCommand();
const commandInvoker = new CommandInvoker(saveCommand);
commandInvoker.executeCommand();

// Singleton Logger
const logger = Logger.getInstance();
logger.log('App started');

// Factory Pattern
const emailNotification = NotificationFactory.createNotification("email");
emailNotification.sendNotification("Welcome to our system!");

// Adapter Pattern
const payPalPayment = new PayPalPayment();
payPalPayment.makePayment(100);

const stripePaymentAdapter = new StripePaymentAdapter(new StripePayment());
stripePaymentAdapter.makePayment(200);

// Decorator Pattern
const basicUser = new BasicUser();
const adminUser = new AdminUser(basicUser);
console.log(adminUser.getPermissions());
