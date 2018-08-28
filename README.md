# ETHBerlin Embark competition -September 7-9th, 2018
For attendees of ETHBerlin September 7-9th this repo provides an example of how to build a decnetralised Twitter dApp using Embark, and must be completed to to claim the ETHBerlin Embark competition prize.
## Decentralized Twitter dApp built using Embark by Status
### Instructions to claim the prize
1. [Build the DTwitter demo using Embark](./instructions).
4. Tweet a screenshot of the demo with a profile of your own on your new DTwitter!
5. Include the hashtags `#embark #ETHBerlin`.
6. Come to the Status booth and we'll reward you with SNT using the Status app.

To build the DTwitter demo using Embark (step #1 above), please use the [instructions](./instructions).

### FAQ
1. Can I use `embark simulator`?
    Yes, you can. You can even use `ganache-cli` directly if desired. We are not using for this dApp due to websockets limitations of ganache.
2. Do we have some success stories of people using embark and delivering projects?
    * The Status OKR voting dApp: https://github.com/status-im/contracts/tree/000-snt-voting-dapp
    * Vortex demo using Embark: https://github.com/Horyus/vortex-demo-embark/blob/master/package.json#L23-L35
    * ERC-721 (collectibles) tutorial and demo dApp: https://github.com/status-im/embark-tutorial-erc721. Tutorial docs here: https://github.com/status-im/embark-tutorial-erc721/tree/tutorial-series/tutorial
3. Where can I learn more about the API of the EmbarkJS object?
    * We are currently working on updating the docs, and additionally we are currently making EmbarkJS a library on its own right: https://github.com/embark-framework/EmbarkJS
4. What are the "key" features of Embark?
    * Embark is focused on the trinity of web3 components that can be used to create truly decentralised applications
        * The original trinity of web3, from the ethereum platform perspective, includes consensus, blockchain, and smart contracts. As well as swarm for decentralized storage and whisper for decentralized communication.
    * Embark is a “true” dApp framework to assist the developer in building real dApps. Embark can also be used just for developing contracts as well.
    * Embark is meant to help the developer easily integrate with other decentralized technologies, like storage, communication, and (in 3.2) naming systems.
    * Embark is meant to be both advanced and easy to use
    * Embark has reasonable defaults and tries to make your life easier, but it can always be overridden for configurable for your specific needs
    * Embark has a very plugin-driven architecture, so developers can also extend it to their own needs
    * Integrated debugger - we are currently working on this, and the developer can always use remix as an alternative
### Known issues with this dApp
##### Issues on localhost
1. Create account - hangs with metamask 
    * Cause - most likely non-increasing nonce issue with metamask: https://github.com/MetaMask/metamask-extension/issues/1999)
    * Solution - open issue

##### Issues on testnet (rinkeby)
1. Sometimes errors with the “known transaction” when deploying a contract. 
    * *Cause:* not yet known
    * *Solution:* only solution so far is to increase the `gasPrice` in contracts -> testnet -> deployment. Embark team currently investigating.
2. Getting contract events (tweets in this case) doesn’t work 
    * *Cause:* Metamask known issue “The current provider doesn’t support subscriptions: MetamaskInpageProvider”
    * *Solution:* open issue
3. Websockets errors 
    * *Cause:* known issue with metamask: https://github.com/MetaMask/metamask-extension/issues/1645)
    * *Solution:* open issue
