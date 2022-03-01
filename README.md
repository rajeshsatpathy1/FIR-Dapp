# FIR DApp #
The project is an online web portal for lodging First Information Report (FIR) using Ethereum Blockchain. 
Ganache is used to set up an Ethereum virual machine and Solidity is used for designing smart contracts on lodging transactions and Metamask wallet is used to connect to Ethereum accounts on the browser.


The web-app was built using MEAN stack framework. MongoDB as NoSQL database, Angular for frontend, Node.js and Express for backend, Metamask to connect to Ethereum accounts for transactions


How to run:

node server: make sure you're in directory capstone/onlinefir and execute following command
```
npm start
```
(or if you have Nodemon installed run following command)
```
Nodemon
```
Run ganache, install truffle and download meta mask plugin in your browser (recommended Chrome).
```
truffle migrate --reset or truffle migrate --network development
```
angular client: make sure you're in directory capstone/onlinefir/angular-src and execute follwing command
```
ng serve
```
