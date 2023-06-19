---
description: >-
  Brief overview of all the imperative functionalities of the Push Core smart
  contract version1.5
---

# Methods - Core

### **Only Admin Setter Functions**

**1**. **setEpnsCommunicatorAddress**

```solidity
function setEpnsCommunicatorAddress(address _commAddress) externalonlyPushChannelAdmin() {};
```

| Arguments           |        Type      |      Description                                 |
| ------------------- | ---------------- | ------------------------------------------------ |
| _**\_commAddress**_ |    _address_     | Address of the             communicator protocol |

_**Description:**_

* Allows only the Push Channel Admin to set the Push Communicator smart contract's address

**2.setGovernanceAddress(address)**

```
function setGovernanceAddress(address _governanceAddress)
        external
        onlyPushChannelAdmin
    {}
```

| Argument                  | Type    | Description                        |
| ------------------------- | ------- | ---------------------------------- |
| _**\_governanceAddress**_ | address | Address of the Governance protocol |

**Description:**

* Allows only the Push Channel Admin to set the Governance address

**3. setFeeAmount**

```solidity
function setFeeAmount(uint256 _newFees) externalonlyGovernance() {};
```

| Argument        | Type    | Description                    |
| --------------- | ------- | ------------------------------ |
| _**\_newFees**_ | uint256 | new Fee Amount in the protocol |

**CheckPoints:**

* Can only be called via Governance contract
* The **\_newFees** argument being passed must be greater than Zero and less than Channel creation fees.

**Description:**

* Sets the FEE\_AMOUNT to a new fee amount

**4. setMinChannelCreationFees**

```solidity
function setMinChannelCreationFees(uint256 _newFees)
        external
        onlyGovernance
    {}
```

| Argument        | Type    | Description                               |
| --------------- | ------- | ----------------------------------------- |
| _**\_newFees**_ | uint256 | new Channel Creation fees in the protocol |

**CheckPoints:**

* Can only be called via Governance contract
* The **\_newFees** argument being passed must be greater than or equal to the existing minimum pool contribution amount. (MIN\_POOL\_CONTRIBUTION).

**Description:**

* Sets the Channel Creation fees to a new fee amount.

**5. transferPushChannelAdminControl**

```solidity
function transferPushChannelAdminControl(address _newAdmin)
        external
        onlyPushChannelAdmin
    {}
```

| Argument         | Type    | Description              |
| ---------------- | ------- | ------------------------ |
| _**\_newAdmin**_ | address | address of the new Admin |

**CheckPoints:**

* Can only be called by the current Push Channel Admin.
* _**\_newAdmin**_ address being passed as an argument must be a valid address.
* _**\_newAdmin**_ address being passed as an argument must not be the already existing Push Channel Admin's address

**Description:**

* Changes the Push Channel admin's address to a new Address.

### **Core Functionalities**

**6. createChannelWithPUSH**

```solidity
function createChannelWithPUSH(
        ChannelType _channelType,
        bytes calldata _identity,
        uint256 _amount,
        uint256 _channelExpiryTime
    )
        external
        whenNotPaused
        onlyInactiveChannels(msg.sender)
        onlyUserAllowedChannelType(_channelType)
    {}
```

| Arguments                 | Type    | Description                                                           |
| ------------------------- | ------- | --------------------------------------------------------------------- |
| _**\_channelType**_       | Enum    | Represents the type of Channel being created                          |
| _**\_identity**_          | bytes   | Identity bytes of the Channel.                                        |
| _**\_amount**_            | uint256 | Total amount of PUSH being deposit                                    |
| _**\_channelExpiryTime**_ | uint256 | The time when the channel will expire and will be ready for deletion. |

**CheckPoints:**

* Contract should not be paused.
* Channel must already be in an **INACTIVE STATE**, i.e., _Channel is not already created on the protocol_
* Channel type being passed as an argument must be of a valid type. That is any of these four types:

1. InterestBearingOpen,
2. InterestBearingMutual,
3. TimeBound
4. TokenGaited

* Total amount of PUSH being deposited for Channel Creation must be greater than or equal to Channel creation fees, which is currently **50 PUSH.**

_**Description**:_

* Channel's state is changed from **Inactive to Active state**
* All the imperative information of the channel such as the _channel's creation block number, total amount of PUSH deposited, channel's type, etc_ are stored.
* Stores channel expiry time if it’s a timebound channel if not then the value stays 0.
* Total **Channel count** of the protocol is incremented by 1.
* Emits out an _**AddChannel()**_ event with the _Channel's address, Channel's Type and its Identity._

**7. deactivateChannel**

```solidity
function deactivateChannel()
        external
        whenNotPaused
        onlyActivatedChannels(msg.sender)
    {};
```

**CheckPoints:**

* Channel must already be in an **ACTIVE STATE**.
* The contract shouldn’t be paused.

**Description:**

* Channel's state is changed from **ACTIVE to DEACTIVATED state**
* Minimum Pool Contribution of 1 PUSH token is deducted from the pool contribution of the channel.
* The remaining amount of PUSH after fee deduction is refunded back to the Channel Owner.
* The refunded amount is also subtracted from the Pool funds of the protocol.
* Imperative on-chain details about the channel like _channel state, new Channel pool contribution, new Channel weight, etc_ are updated in the contract
* Emits out a _**DeactivateChannel()**_ event with the _Channel's address, Total Refund amount value_

**8. reactivateChannel**

```solidity
function reactivateChannel(uint256 _amount)
        external
        whenNotPaused
        onlyDeactivatedChannels(msg.sender)
    {
```

| Argument       | Type    | Description                                                     |
| -------------- | ------- | --------------------------------------------------------------- |
| _**\_amount**_ | uint256 | PUSH amount to be deposited for the reactivation of the channel |

**CheckPoints:**

* Contract should not be paused.
* Channel must already be in a **DEACTIVATED STATE**.
* Total amount of PUSH being deposited for Channel Reactivation must be greater than or equal to **50 PUSH**

**Description:**

* Channel's state is changed from **DEACTIVATED to ACTIVE state**
* The Fee amount is deducted from the received amount and added to Protocol Pool Fees.
* The remaining amount of PUSH after fee deduction is added to Protocol Pool fund.
* Channel's new pool contribution and weight is updated.
* Imperative on-chain details about the channel like _channel state, new Channel pool contribution, new Channel weight, etc_ are updated in the contract.
* Emits out a _**ReactivateChannel()**_ event with the _Channel's address, Total Deposited amount value_

**9. blockChannel**

***

```solidity
function blockChannel(address _channelAddress)
        external
        whenNotPaused
        onlyPushChannelAdmin
        onlyUnblockedChannels(_channelAddress)
    {}
```

| Argument               | Type    | Description                                 |
| ---------------------- | ------- | ------------------------------------------- |
| _**\_channelAddress**_ | address | Address of the target channel to be blocked |

**CheckPoints:**

* Contract should not be paused.
* Caller of the function should only be the Push Channel Admin
* Channel must not already be in a **BLOCKED** state

**Description:**

* Channel's state is changed to **BLOCKED** state.
* Once blocked, the channel address cannot be reactivated.
* The pool contribution of the respective channel is deducted from Pool funds and added to pool fees.
* Channel's pool contribution & weight are updated to new values and no refund shall be given to the Channel owner when blocked.
* Emits out a _**ChannelBlocked()**_ event with the _Channel's address_.

**10. verifyChannel**

```solidity
function verifyChannel(address _channel)
        public
        onlyActivatedChannels(_channel)
    {}
```

| Argument        | Type    | Description                               |
| --------------- | ------- | ----------------------------------------- |
| _**\_channel**_ | address | The address of the channel to be verified |

**CheckPoints:**

* The channel to be verified must be in an **ACTIVE** state, i.e., the channel must not be _blocked, inactive or deactivated_.
* The caller of this function should already be a verified channel or the Push Channel Admin.
* The target channel must not already be verified.

**Description:**

* Target channel is marked as a verified channel.
* The Verifier's address of the target channel is stored in the channel's struct. This determines the type of verification tag the target channel has.
* For instance: If the Channel was verified directly by Push Channel Admin, it will have a \*\*Primary Verification Tag.\*\*If the Channel was verified by any other verified channel, it will have a **Secondary Verification Tag.**
* Emits out an _**ChannelVerified()**_ event with the _Channel's address and the Verifier's Address_

**11. unverifyChannel**

```jsx
function unverifyChannel(address _channel) public {}
```

| Argument        | Type    | Description                                                    |
| --------------- | ------- | -------------------------------------------------------------- |
| _**\_channel**_ | address | The address of the channel whose verification shall be revoked |

**CheckPoints:**

* The caller of this function must be the **Verifier** of the target channel or the **Push Channel Admin** itself

**Description:**

* Marks the target channel as **Unverified**.
* Emits out an _**ChannelVerificationRevoked()**_ event with the _Channel's address and address that revoked the verification tag of the channel._

**12. updateChannelMeta**

```solidity
function updateChannelMeta(
        address _channel,
        bytes calldata _newIdentity,
        uint256 _amount
    ) external whenNotPaused onlyChannelOwner(_channel)
   {}
```

| Arguements          | Type    | Description                          |
| ------------------- | ------- | ------------------------------------ |
| _**\_channel**_     | address | address of the channel               |
| _**\_newIdentity**_ | bytes   | New Identity bytes of the Channel.   |
| _**\_amount**_      | uint256 | amount needed to upgrade the channel |

**CheckPoints:**

* Contract should not be paused.
* This function must be called only by the Owner of the channel that is being updated

_**Description:**_

* Allows Channel Owner to update their Channel Description or any imperative detail.
* The amount needed is the product channel creation fees and the number of times this particular channel has been updated. This approach makes it difficult to abuse the update channel feature.
* Adds the amount received to the Protocol Fees.
* Emits out an _**UpdateChannel()**_ event with the _Channel's address and The New Identity bytes of the Channel_

### **Getter Functions**

**13. getChannelState**

```solidity
function getChannelState(address _channel)
        external
        view
        returns (uint256 state)
    {}
```

| Argument        | Type    | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| _**\_channel**_ | address | address of the channel whose state is required |

_**Description:**_

* Returns the current state of the Channel.
* The returned value can be interpreted as:

```
         0 -> INACTIVE,
         1 -> ACTIVATED
         2 -> DeActivated By Channel Owner,
         3 -> BLOCKED by pushChannelAdmin/Governance
```

**14. getChannelVerification**

```solidity
function getChannelVerfication(address _channel)
        public
        view
        returns (uint8 verificationStatus)
    {}
```

| Argument        | Type    | Description                                             |
| --------------- | ------- | ------------------------------------------------------- |
| _**\_channel**_ | address | address of the channel whose verification tag is needed |

_**Description:**_

* Returns the verification tag of the channel's address passed in the argument.
* If the target channel is currently not verified by anyone, the function returns **0**.
* If the target channel was verified by the Push Channel admin itself, the function returns **1**. It means the channel has a **Primary verification tag**.
* If the target channel was verified by any other verified channel, the function returns **2**. It means the channel has a **Secondary verification tag**. _Note: It's quite important to keep the following Channel Verification procedure of Push Core in mind:_
* _If a Channel (C-A) with **Secondary verification tag** verifies other channels in the protocol but **later gets unverified by the Push Channel Admin**, all the other channels that were verified by that specific channel **'C-A**' get unverified as well._ For instance,

> 1.Push Channel Admin verifies Channel A - Primary Verification&#x20;
>
> 2.Channel A verifies Channel B, C & D - Secondary Verification
>
> 3.Push channel admin revokes the verification of Channel A
>
> 4.Channel B, C, & D are unverified as well

**15. destroyTimeBoundChannel**

```
function destroyTimeBoundChannel(address _channelAddress)
        external
        whenNotPaused
        onlyActivatedChannels(_channelAddress)
    {}
```

| Argument         | Type    | Description                                             |
| ---------------- | ------- | ------------------------------------------------------- |
| \_channelAddress | address | address of the channel whose verification tag is needed |

**CheckPoints:**

* The contract should not be paused.
* Only activated channels can be deleted.

_**Description:**_

* It first checks the expiry date of the given channel, if the expiry time is reached then the owner can proceed to delete.
* The owner gets a refund of the channel’s amount in pool funds.
* But the limited time for the refund is only 14 days from the day channel expires, if the owner doesn’t delete the channel within 14 days then the admin gets the power to delete the channel.
* When the channel is deleted by the admin then the amount to be refunded is not refunded but gets deducted from the pool fund and gets added to pool fees.
* Calls unsubscribe with necessary channels.
* Deletes the channel completely, making it possible to create a new channel with the same address.

**16. &#x20;addSubGraph**

```
function addSubGraph(bytes calldata _subGraphData)
        external
        onlyActivatedChannels(msg.sender)
    {}
```

| Argument       | Type  | Description                                                  |
| -------------- | ----- | ------------------------------------------------------------ |
| \_subGraphData | bytes | basically a combination of the Subgraph ID and Poll Interval |

**Checkpoints**

* Channel should be active.

**Description**

* This function shall simply allow users to pass _subGraph data,_  in the form of bytes, which is basically a combination of the _Subgraph ID and Poll Interval._  It emits out the event with the msg.sender and the _bytes_  value.
