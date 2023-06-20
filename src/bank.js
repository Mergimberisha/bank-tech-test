class Bank {
    constructor() {
      this.transactions = [];
    }
  
    deposit(amount, date) {
      const transaction = {
        date,
        credit: amount,
        debit: null,
        balance: this.calculateBalance() + amount
      };
      this.transactions.push(transaction);
    }
  
    withdraw(amount, date) {
      const transaction = {
        date,
        credit: null,
        debit: amount,
        balance: this.calculateBalance() - amount
      };
      this.transactions.push(transaction);
    }
  
    calculateBalance() {
      if (this.transactions.length === 0) {
        return 0;
      }
      return this.transactions[this.transactions.length - 1].balance;
    }
  
    printStatement() {
      console.log("date || credit || debit || balance");
      this.transactions.reverse().forEach(transaction => {
        console.log(
          `${transaction.date} || ${transaction.credit ? transaction.credit.toFixed(2) : ""} || ${transaction.debit ? transaction.debit.toFixed(2) : ""} || ${transaction.balance.toFixed(2)}`
        );
      });
    }
  }
  
  // Example usage
  const bank = new Bank();
  bank.deposit(1000, "10/01/2023");
  bank.deposit(2000, "13/01/2023");
  bank.withdraw(500, "14/01/2023");
  bank.printStatement();
  

  module.exports = Bank;
