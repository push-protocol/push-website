---
description: >-
  Explains the different types of Data types and access controls used in the
  Push Core smart contract
---

# Types & Modifiers - Core

**A. Storage Variables**

```jsx
    string public constant name = "EPNS_CORE_V1.5";
    address public pushChannelAdmin;
    address public governance;
    address public daiAddress;
    address public aDaiAddress;
    address public WETH_ADDRESS;
    address public epnsCommunicator;
    address public UNISWAP_V2_ROUTER;
    address public PUSH_TOKEN_ADDRESS;
    address public lendingPoolProviderAddress;

    uint256 public REFERRAL_CODE;
    uint256 ADJUST_FOR_FLOAT;
    uint256 public channelsCount;

    //  @notice Helper Variables for FSRatio Calculation | GROUPS = CHANNELS
    uint256 public groupNormalizedWeight;
    uint256 public groupHistoricalZ;
    uint256 public groupLastUpdate;
    uint256 public groupFairShareCount;

    // @notice Necessary variables for Keeping track of Funds and Fees
    uint256 public CHANNEL_POOL_FUNDS;
    uint256 public PROTOCOL_POOL_FEES;
    uint256 public ADD_CHANNEL_MIN_FEES;
    uint256 public FEE_AMOUNT;
    uint256 public MIN_POOL_CONTRIBUTION;
```

**A.1 To keep track of FUNDS and FEES in Push Core**

**CHANNEL\_POOL\_FUNDS:**

* Keeps track of the PUSH tokens that are claimable to the channel owners whenever they deactivate or delete the channel.
* The amount of PUSH token added to this variable is the remaining amount after deducting the **PROTOCOL\_POOL\_FEES** from the amount that a user sends while creating or reactivating a channel.
* For example, you sent 50 tokens to create a channel, then 10 tokens will be added to **PROTOCOL\_POOL\_FEES**, and the remaining 40 is added to **CHANNEL\_POOL\_FUNDS**.

**PROTOCOL\_POOL\_FEES:**

* A small fee amount is deducted by the core smart contract for any imperative transaction like _channel creation, channel reactivation, channel detail modification,_ and others.
* As of now, the protocol fee is set to be equal to **10 PUSH tokens**. This value, however, can be changed by the community later using on-chain governance.
* Simply deducted from the same amount that a channel creator chooses to stake in the protocol. For example, if you chose to stake 50 PUSH during channel creation, 10 of those 50 PUSH tokens go into Protocol Fee Pool, while the remaining goes into Channel Pool Funds that are claimable by channel owners anytime they choose to deactivate their channel.

**ADD\_CHANNEL\_MIN\_FEES:**

* The minimum amount of PUSH that is required for creating or reactivating a channel.
* The current value of this state variable is **50 PUSH.**
* Can be updated only via on-chain governance using the _**setMinChannelCreationFees()**_ function.
* Can never be below **50 PUSH**

**FEE\_AMOUNT:**

* Represents the deactivation fee charged to a channel owner when the channel is Deactivated.
* The current value of this state variable is **10 PUSH.**
* Can be updated only via on-chain governance using the _setFeeAmount()_ function.

**MIN\_POOL\_CONTRIBUTION:**

* Represents the constant value of 1 PUSH used for the calculation of a channel's weight in the protocol.
* This amount is deducted from the channel pool contribution at the time of deactivating a channel and the remaining amount is refunded to the user.

**A.2 Storage variables for FSRatio Calculation**

* The concept of adjusting the fair share of channels is no longer being used by the protocol, That’s why these variables have no significance from version 1.5 onwards.
* These variables are only present in the contract to avoid storage collisions, as our contracts are upgradeable.
* Below are the uses of these variables in version 1. No longer needed in Version 1.5

### **B. STRUCTS**

```solidity
struct Channel {
        ChannelType channelType;

        uint8 channelState;

        address verifiedBy;

        uint256 poolContribution;

        uint256 channelHistoricalZ;

        uint256 channelFairShareCount;

        uint256 channelLastUpdate;

        uint256 channelStartBlock;

        uint256 channelUpdateBlock;

        uint256 channelWeight;
        
        uint256 expiryTime;
    }
```

The **Channel** struct in the Push Core smart contract stores every crucial data about the channels that are created on the core contract.



* **ChannelType**
  * Denotes the type of channel being created.
  * A Channel can be any of the 6 available types:
    1. ProtocolNonInterest
    2. ProtocolPromotion&#x20;
    3. InterestBearingOpen&#x20;
    4. InterestBearingMutual&#x20;
    5. Timebound&#x20;
    6. TokenGaited
* **channelState**
  * Symbolizes the current state of a particular channel.
  *   A channel can have any of the following states:&#x20;

      1. _INACTIVE - 0_&#x20;
      2. _ACTIVE - 1_&#x20;
      3. _DEACTIVATED - 2_&#x20;
      4. _BLOCKED - 3_


*   **verifiedBy**

    * Denotes the address of the verifier of the Channel


* **poolContribution**
  * Denotes the total amount of PUSH deposited by the channel owner during Channel Creation.
  * Pool contribution is calculated by deducting the **FEE\_AMOUNT** from the amount user sends at the time of channel creation or reactivation.
* **channelLastUpdate**
  * The last update block number. It was used to calculate the fair share ratio, but now it just stores the last update block number
* **channelStartBlock**
  * Represents the block number when a specific channel was created
* **channelUpdateBlock**
  * Represents the block number that depicts when a channel was updated
* **channelWeight**
  * Represents the individual weight to be applied as per pool contribution.
* **expiryTime;**
  * The timestamp at which the channel gets expired and can be deleted by the owner

### **C. MODIFIERS**

* **onlyPushChannelAdmin()**
  * Only allows Push Channel Admin to access the function
* **onlyGovernance()**
  * Only allows Governance contract to access the function
* **onlyInactiveChannels()**
  * Only for channels that are currently in an **INACTIVE** state
  * Used in the following function:
  * **createChannelWithFees()**
* **onlyActivatedChannels()**
  * Only for channels that are currently in an **ACTIVE** state
  * Used in the following functions:
  * **createChannelSettings()**
  * **deactivateChannel()**
  * **verifyChannel()**
* **onlyDeactivatedChannels()**
  * Only for channels that are neither in **BLOCKED** state nor **INACTIVE**
  * Used in the following function:
  * **reactivateChannel()**
* **onlyUnblockedChannels()**
  * Only for channels that are currently in a **BLOCKED** state
  * Used in the following function:
  * **blockChannel()**
* **onlyChannelOwner()**
  * Only for the owner of a particular channel
  * Used in the following function:
  * **updateChannelMeta()**
* **onlyUserAllowedChannelType()**
  * Ensures that the channel type passed as an argument while creating a channel is a valid channel type
  * Used in the following function:
  * **createChannelWithFees()**

### **D. MAPPINGS**

* **channels**
  * `mapping(address => Channel) public channels;`
  * Maps a channel's address to its Struct
* **channelById**
  * `mapping(uint256 => address) public channelById;`
  * Maps the uint256 ID of a particular channel to its address.
  * Updated in the **\_createChannel()** function.
* **channelNotifSettings**
  * `mapping(address => string) public channelNotifSettings;`
  * Keeps track of the notification settings selected by a channel
  * Updated in the **createChannelSettings()** function.
* **nonces**
  * `mapping(address => uint256) public nonces;`
  * Used to keep track of how many times a user signed a message.
  * Used in off-chain signature verification.
  * increments every time a user signs a message
* **channelUpdateCounter**
  * `mapping(address => uint256) public channelUpdateCounter;`
  * Tracks the update count of a channel, i.e. how many times a channel is being updated.
  * Used to determine the price of updating a channel. More the update count more the price.
* **usersRewardsClaimed**
  * `mapping(address => uint256) public usersRewardsClaimed;`
  * tracks the rewards a user has claimed.
  * not implemented in V1.5 but will be implemented in V2

**E. ENUMS**

The EPNS Core smart contract includes 2 main ENUMS.

**ChannelType**

```solidity
 enum ChannelType {    
    ProtocolNonInterest,    
    ProtocolPromotion,
    // highlight-start
    InterestBearingOpen 
    InterestBearingMutual,
    // highlight-end
    Timebound,
    TokenGaited
} 
```

* This represents the type of channel being created.
* it can be any one of the 6 types:
  1. ProtocolNonInterest,
  2. ProtocolPromotion,
  3. InterestBearingOpen,
  4. InterestBearingMutual,
  5. Timebound,
  6. TokenGaited

**ChannelAction**

```solidity
enum ChannelAction {  
   ChannelRemoved,   
   ChannelAdded,   
   ChannelUpdated 
}
```

* This enum has no use in V1.5 as this was mainly used while calculating the fair share of channels. This is only present in V1.5 to avoid storage collisions.
* It was used to represent the different channel actions that occur in the protocol.
* There could be 3 main channel actions:
* ChannelAdded: _When a channel is created and added to the protocol_
* ChannelRemoved: _When a channel is blocked and removed from the protocol_
* ChannelUpdated: _When a channel is either deactivated or reactivated_

#### Deprecated State Variables

* **groupNormalizedWeight**
* **groupHistoricalZ**
* **groupLastUpdate**
* **groupFairShareCount**
* **channelHistoricalZ**
* **channelFairShareCount**
