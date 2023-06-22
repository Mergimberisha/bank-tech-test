# Bank Tech Test

Technical Test for Makers

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### To install dependencies, run tests, and run the project, you can follow these steps:

First install the dependencies
```
npm install
```

To run the file:
```
cd src
node bank.js
```

To run the tests open a new terminal and make sure you are in the bank-tech-test file:
```
cd test
jest
```

### Output of running the program

```
➜  src git:(main) ✗ node  bank.js 
date || credit || debit || balance
14/01/2023 ||  || 500.00 || 2500.00
13/01/2023 || 2000.00 ||  || 3000.00
10/01/2023 || 1000.00 ||  || 1000.00
```

### Output of running the test

```
 test git:(main) ✗ jest
  console.log
    date || credit || debit || balance

      at Bank.log [as printStatement] (src/bank.js:34:15)

  console.log
    14/01/2023 ||  || 500.00 || 2500.00

      at log (src/bank.js:36:17)
          at Array.forEach (<anonymous>)

  console.log
    13/01/2023 || 2000.00 ||  || 3000.00

      at log (src/bank.js:36:17)
          at Array.forEach (<anonymous>)

  console.log
    10/01/2023 || 1000.00 ||  || 1000.00

      at log (src/bank.js:36:17)
          at Array.forEach (<anonymous>)

 PASS  ./bank.test.js
  Bank
    ✓ should initialize with an empty transaction list (2 ms)
    ✓ should correctly calculate the balance after a deposit
    ✓ should correctly calculate the balance after a withdrawal
    ✓ should print the statement in reverse chronological order

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.407 s
Ran all test suites.
```

### My Approach
- I started by understanding the requirements. Read and analyse the acceptance criteria provided. Understand the sequence of events and the expected output.
- Determine the responsibilities of each class based on the requirements. In this case, I considered having a Transaction class responsible for storing individual transaction details, and a Bank class responsible for managing the collection of transactions and printing the statement.
- Create tests to verify the behavior of the Bank class. Write test cases for depositing funds, withdrawing funds, calculating the balance, and printing the statement. Ensure that the expected results match the given acceptance criteria.
- Create a Transaction class with properties such as date, credit, debit, and balance. These properties will be used to represent individual transactions
- Create a Bank class with the necessary methods to handle deposits, withdrawals, balance calculation, and statement printing. You can refer to the original Bank class code you provided for reference
- Run the tests to validate the implementation of the Bank class. Ensure that all the tests pass and provide the expected results