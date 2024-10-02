"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./behavioral/Observer");
var Observer_2 = require("./behavioral/Observer");
var Command_1 = require("./behavioral/Command");
var Logger_1 = require("./creational/Logger");
var NotificationFactory_1 = require("./creational/NotificationFactory");
var PaymentAdapter_1 = require("./structural/PaymentAdapter");
var UserDecorator_1 = require("./structural/UserDecorator");
// Behavioral Pattern
var user1 = new Observer_1.User("Alice");
var notificationService = new Observer_2.NotificationService();
notificationService.subscribe("system-update", user1);
notificationService.notify("system-update", "New feature released!");
// Command Pattern
var saveCommand = new Command_1.SaveCommand();
var commandInvoker = new Command_1.CommandInvoker(saveCommand);
commandInvoker.executeCommand();
// Singleton Logger
var logger = Logger_1.Logger.getInstance();
logger.log('App started');
// Factory Pattern
var emailNotification = NotificationFactory_1.NotificationFactory.createNotification("email");
emailNotification.sendNotification("Welcome to our system!");
// Adapter Pattern
var payPalPayment = new PaymentAdapter_1.PayPalPayment();
payPalPayment.makePayment(100);
var stripePaymentAdapter = new PaymentAdapter_1.StripePaymentAdapter(new PaymentAdapter_1.StripePayment());
stripePaymentAdapter.makePayment(200);
// Decorator Pattern
var basicUser = new UserDecorator_1.BasicUser();
var adminUser = new UserDecorator_1.AdminUser(basicUser);
console.log(adminUser.getPermissions());
