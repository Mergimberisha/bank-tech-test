const Bank = require('../src/bank.js');

describe('Bank', () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it('should initialize with an empty transaction list', () => {
    expect(bank.transactions).toEqual([]);
  });

  it('should correctly calculate the balance after a deposit', () => {
    bank.deposit(1000, '2023-01-10');
    expect(bank.calculateBalance()).toBe(1000);
  });

  it('should correctly calculate the balance after a withdrawal', () => {
    bank.deposit(1000, '2023-01-10');
    bank.withdraw(500, '2023-01-14');
    expect(bank.calculateBalance()).toBe(500);
  });

  it('should print the statement in reverse chronological order', () => {
    bank.deposit(1000, '10/01/2023');
    bank.deposit(2000, '13/01/2023');
    bank.withdraw(500, '14/01/2023');

    // Capture the console output
    let printedStatement = '';
    const originalConsoleLog = console.log;
    console.log = (output) => {
      printedStatement += output + '\n';
    };

    bank.printStatement();

    console.log = originalConsoleLog; // Restore original console.log

    // Verify the printed statement
    const expectedStatement = `date || credit || debit || balance
    14/01/2023 ||  || 500.00 || 2500.00
    13/01/2023 || 2000.00 ||  || 3000.00
    10/01/2023 || 1000.00 ||  || 1000.00`;
    expect(printedStatement.trim()).toMatch(new RegExp(expectedStatement.trim()));
});
});
