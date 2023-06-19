# Token transfer notification via Smart Contract example

Here is an example of a contract that uses Push communicator to send notification whenever the contract receives fund.

## Prerequisites

* Ensure you have created your channel - [create-your-notif-channel](../../create-your-notif-channel/ "mention")
* Ensure you know what are channel delegates - [what-are-channel-delegates.md](../../../concepts/create-your-notif-channel/what-are-channel-delegates.md "mention") [adding-delegates-for-channel.md](../../create-your-notif-channel/adding-delegates-for-channel.md "mention")
* Ensure you know types of notifications to know what you want to send - [notification-payload-types](../../sending-notifications/notification-payload-types/ "mention")&#x20;

### What's going to happen

* We create a channel and copy it's address
* We import interface and function call to trigger notification
* We deploy the contract and add the contract address as delegate
* Watch in 😲 as each transfer now notifies the wallet address about tokens received

### Tutorial time

Push protocol also supports sending notifications to user wallets directly from your smart contract and that too by **only adding 2 lines of extra code to your smart contract** :tada:.

The best way to do it is by creating your channel first > tweaking your smart contract with notification logic and finally adding the deployed contract address as delegate to your channel.

To learn more about how to import interface and the function call of send notification, please see [using-smart-contract.md](../../sending-notifications/using-smart-contract.md "mention")

### Code

```solidity
pragma solidity ^0.6.2;
 
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/ERC20.sol";

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

contract Push is ERC20 {
    // EPNS COMM ADDRESS ON ETHEREUM KOVAN, CHECK THIS: https://docs.epns.io/developers/developer-tooling/epns-smart-contracts/epns-contract-addresses
    address public EPNS_COMM_ADDRESS = 0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;

    constructor ()
        ERC20("Push Token", "PUSH")
        public {
        _mint(msg.sender, 1000 * 10 ** uint(decimals()));
    }

    function transfer(address to, uint amount) override public returns (bool success) {
        address owner = _msgSender();
        _transfer(owner, to, amount);

        //"0+3+Hooray! ", msg.sender, " sent ", token amount, " PUSH to you!"
        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            0x050Ca75E3957c37dDF26D58046d8F9967B88190c, // from channel
            to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        "Tranfer Alert", // this is notificaiton title
                        "+", // segregator
                        "Hooray! ", // notification body
                        addressToString(msg.sender), // notification body
                        " sent ", // notification body
                        uint2str(amount.div(10 ** uint(decimals()))), // notification body
                        " PUSH to you!" // notification body
                    )
                )
            )
        );
        
        return true;
    }

    // Helper function to convert address to string
    function addressToString(address _address) internal pure returns(string memory) {
        bytes32 _bytes = bytes32(uint256(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _string = new bytes(42);
        _string[0] = '0';
        _string[1] = 'x';
        for(uint i = 0; i < 20; i++) {
            _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }
        return string(_string);
    }

    // Helper function to convert uint to string
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
}
```

