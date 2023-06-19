# Using Smart Contract

Push contracts are designed to act as a communication middleware for your smart contracts which ensures that even smart contracts can communicate with the wallet addresses (ie: web3 users).

### How to send notification from smart contract?

Ensure that you know the contract address of Push Communication smart contract based on the blockchain and network from which you are sending the communication out.&#x20;

For example: Staging Ethereum contract address is `0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC` while Staging Polygon contract address is `0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa`. List of all smart contract and their environment is available here :point_right: [Push Smart Contracts](../../developer-tooling/push-smart-contracts/ "mention")

Start by importing the Push Comm Contract Interface :point_down:

```solidity
// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}
```

Ensure your channel is up and running by following this guide [Creating a Channel](../create-your-notif-channel/ "mention"). Note down your channel address which you need to put in the code below as **YOUR\_CHANNEL\_ADDRESS**.

Next call the function `sendNotification(address _channel, address _recipient, bytes calldata _identity)` and pass the address of the channel, recipient and the identity based on your needs.

```solidity
IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(
</strong>   YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
    to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
    bytes(
        string(
            // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations 
            abi.encodePacked(
                "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                "+", // segregator
                "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                "+", // segregator
                "Title", // this is notificaiton title
                "+", // segregator
                "Body" // notification body
            )
        )
    )
);
```

The last step is to go back to your channel and add the smart contract address as a delegate ensuring notifications sent by your smart contract are routed through your channel and presented to your users. Learn about [Adding Delegates For Channel](../create-your-notif-channel/adding-delegates-for-channel.md "mention").

:::info
Example of Token Transfer Notification can be found here :point_right: [Token Transfer Notification via Smart Contract example](../examples/notification-via-smart-contract-examples/token-transfer-notification-via-smart-contract-example.md "mention")
:::
