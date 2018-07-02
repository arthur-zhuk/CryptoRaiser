# CryptoRaiser
CryptoRaiser is an Ethereum DApp service similar to GoFundMe or Kickstarter.

With CryptoRaiser you can create a campaign and have multiple people contribute to it. A manager is able to approve requests within a campaign and finalize it to pay out the campaign creator.

![alt text](https://media.giphy.com/media/37qbIysaPDf77Pnwy0/giphy.gif "CryptoRaiser")

### Usage
To use the DApp please make sure you have **MetaMask** installed. Make sure you are on the **Rinkeby Test Network** and have **Ether** in your account.

## Tech
CryptoRaiser consists of a **React** frontend with an **Ethereum Blockchain** backend. A smart contract written in **Solidity** is deployed to create the campaign and all individual contributions to a campaign consist of separate smart contracts specific to the campaign. **Node.js** is used for custom dynamic routes with the **Next.js** library to allow for **server-side rendering**.