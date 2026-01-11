const {
  PayPalStrategy,
  CreditCardStrategy,
  BankTransferStrategy,
} = require("./strategies");

class PaymentProcessor {
  processPayment(amount) {
    this.strategy.pay(amount);
  }

  setStrategy(strategy) {
    console.log(strategy.constructor.name);
    console.log(strategy.constructor);
    console.log(strategy instanceof PayPalStrategy);
    this.strategy = strategy;
  }
}

module.exports = PaymentProcessor;
