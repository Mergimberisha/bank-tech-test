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
```npm install```

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