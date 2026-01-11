class PayPalStrategy {
  constructor() {}
  pay(amount) {
    console.log(`Paying $${amount}.`);
  }
}
class CreditCardStrategy {
  constructor() {}

  pay(amount) {
    console.log(`Paying $${amount * 2}.`);
  }
}
class BankTransferStrategy {
  constructor() {}
  pay(amount) {
    console.log(`Paying $${amount}.`);
  }
}

module.exports = { PayPalStrategy, CreditCardStrategy, BankTransferStrategy };
