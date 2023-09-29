---
description: >-
  Explains the different types of Data types and access controls used in the
  Push Comm smart contract
---

# Types & Modifiers - Comm



### A. Storage Variables

```solidity
  address public governance;
  address public pushChannelAdmin;
  uint256 public chainID;
  uint256 public usersCount;
  bool public isMigrationComplete;
  address public EPNSCoreAddress;
  string public chainName;
  string public constant name = "EPNS COMM V1";

```

### B. STRUCT

```solidity
struct User {
        bool userActivated;

        bool publicKeyRegistered;

        uint256 userStartBlock;

        uint256 subscribedCount;

        mapping(address => uint8) isSubscribed;

        mapping(address => uint256) subscribed;

        mapping(uint256 => address) mapAddressSubscribed;
    }
```

The **User** struct in the Push Communicator smart contract stores all the crucial data of a particular user on the smart contract

*   **userActivated**

    &#x20;Depicts whether or not a user is ACTIVE
*   **publicKeyRegistered**

    Returns TRUE if the user's PUBLIC KEY has been registered in the communicator
*   **userStartBlock**

    Represents the block number when the user was added to the protocol
*   **subscribedCount**

    Keeps trakc of the total number of channels a user is subscribed to\*\*
*   **isSubscribed**

    Keeps track of whether or not a user is subscribed to a specific channel address.
*   **subscribed**

    Maps channel address to ID
*   **mapAddressSubscribed**

    Maps ID to Channel Address

### C. MODIFIERS

*   **onlyPushChannelAdmin()**

    Only allows Push Channel Admin to access the function
*   **onlyEPNSCore()**

    Only allows EPNS Core Contract to access a particular function

    Specifically used in the **subscribeViaCore()** fucnti
*   **sendNotifViaSignReq()**

    Ensures that all the necessary checkpoints before sending notification from EPNS Communicator is passed.

    Used in the **sendNotifBySig()** function.

### D. MAPPINGS

*   **users**

    `mapping(address => User) public users;`

    Maps a user's address to the User struct
*   **nonces**

    `mapping(address => uint256) public nonces;`

    Keeps track of the nonce of a specific address

    Specifically used in the Meta transaction functions
*   **mapAddressUsers**

    `mapping(uint256 => address) public mapAddressUsers;`

    Maps ID to User's address

    Updated in the **\_addUser()** function of the protocol
*   **userToChannelNotifs**

    `mapping(address => mapping(address => string)) public userToChannelNotifs;`

    Keeps track the user's Notification settings for a specific channel
*   **delegatedNotificationSenders**

    `mapping(address => mapping(address => bool)) public delegatedNotificationSenders;`

    Keeps track of valid delegate notification sender for a particular channel
