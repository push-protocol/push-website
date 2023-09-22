# Channel Creation Process on Smart Contract

The creation of channels as well as storing all the imperative details about a channel is _**handled only by the Push Core protocol on the Ethereum blockchain.**_

:::info
> _**Note:** While Channel Creation can only happen on Ethereum blockchain, the Communicator contract is designed to be deployed on multiple chains, thus allowing multi-chain behavior._
:::

### How does Channel Creation Work?

In order to create a new channel using the Push CoreV1, the [**\_createChannel**](https://docs.push.org/developers/developer-tooling/epns-smart-contracts/epns-core-protocol/methods#core-functionalities)**()** function of the smart contract is used. The function can be seen below:

Channel Creation mainly requires 4 crucial actions:

1. **Checkpoints and Validations:**<br/>
   _a. A channel must not be in an **Active** state before the channel creation process starts._<br/>
   _b. Channel addresses that are already in a **blocked** state should never be allowed to create channels again._<br/>
   _c. The amount of PUSH being deposited for channel creation must be above the minimum threshold, etc._
2. **Deposit of Channel Creation Fee:** <br/>
   Creating a channel on Push Core requires a channel creation fee of at least 50 PUSH, which the Channel Owner must deposit.<br/><br/>
   The contract charges only 10 PUSH as the **Protocol Fees** during channel creations, while the remaining is stored as the channel owner's pool contribution in the contract. In case a channel owner chooses to deactivate their channel, the pool contribution amount is refunded back.
3. **Storing imperative Channel data:** <br/>Once the deposited amount is handled properly, the significant details like the channel’s _pool contribution, state, weight, the channel creation block number as well as the total number of channels in the protocol,_ etc, are updated and stored on-chain.
4. **Subscribing to important channels:** <br/>
   As per the current architecture of the protocol, the new channel being created must subscribe to 3 important channels right at the time of its creation:<br/>
   **a**. _**EPNS Alerter Channel**_<br/>
   **b. **_**Push Channel Admin**_<br/>
   _**c. Channel owners must subscribe to its own channel as well.**_

Once all the above-mentioned steps are completed successfully, the channel’s state is activated and it's all set for you to start [sending notifications](https://docs.push.org/developers/developer-zone/sending-notifications) 🔔.
