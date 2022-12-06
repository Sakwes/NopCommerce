# Set Up for Cypress
* To install and run cypress test on your machine, you need to go through the following steps:

1.	Check if you have Node.js already installed. To do this, open cmd and type; <pre><code> node –version or node –v.</pre></code> If you don’t have Node.js installed, you can download and install it [HERE](https://nodejs.org/en/download/)
2.	Once you have Node.js it means you have also NPM (Node packet Manager). You can also check with this command: <pre><code> npm –v </pre></code>
3.	After this, download and install Visual studio code if you don’t have that on your machine.
4.	Create a new folder for Cypress Project.
5.	Open the folder in VS Code.
6.	Open VS Code terminal and run command: <pre><code> npm init -y </pre></code>
7.	Run <pre><code> npm install --save-dev cypress </pre></code>
8.	After installing Cypress, you can now open cypress by typing the command; <pre><code> npx cypress open </pre></code>
9.	Click on the e2e to configure, select browser, and click “Continue”
10.	Once this is done, your test folder will appear under cypress and you can run your test.
