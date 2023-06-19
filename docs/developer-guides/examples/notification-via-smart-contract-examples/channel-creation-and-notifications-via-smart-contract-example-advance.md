# Channel Creation and Notifications via smart contract example (Advance)

Along with the UI one can also use contract to contract interaction to create channel as well as send notification.

Here is an example of an contract that uses Push Core to create channel and Push communicator to send notification whenever the contract receives fund

### Code

```
//SPDX-License-Identifier: UNLICENSED
pragma solidity >0.5.0 <0.9.0;

//EPNS Core Contract Interface
interface IEPNSCoreInterface {
   enum ChannelType {
        ProtocolNonInterest,
        ProtocolPromotion,
        InterestBearingOpen,
        InterestBearingMutual
    }

    function createChannelWithFees(
        ChannelType _channelType,
        bytes calldata _identity,
        uint256 _amount
    )external;


}

//EPNS Comm Contract Interface
interface IEPNSCommInterface {
        function sendNotification(address _channel,
        address _recipient,
        bytes memory _identity)
        external;
}

//ERC20 Interface to approve sending dai
interface IERC20Interface {
    function approve(address spender, uint256 amount) external returns (bool);
}

contract Fund  {
    address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;
    address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;
    address public DAI_ADDRESS = 0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD;
    address  payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform the task");
        _;
    }
  
    //To create channel
    function createChannelWithEPNS(string memory _ipfsHash) public onlyOwner {
        IERC20Interface(DAI_ADDRESS).approve(EPNS_CORE_ADDRESS, 50 ether);
        IEPNSCoreInterface(EPNS_CORE_ADDRESS).createChannelWithFees(
            IEPNSCoreInterface.ChannelType.InterestBearingOpen,
            bytes(string(
            abi.encodePacked(
                "2",
                "+",
                _ipfsHash
            )
        )),
            50 ether
        );
    }

    // To send notification when the contract receives fund
     receive() external payable {
        IEPNSCommInterface(EPNS_COMM_ADDRESS).sendNotification(address(this), address(this), bytes(string(
            abi.encodePacked(
                "1",
                "+",
                "QmSyKMiRvpQpiaUyXR3BmCXjSme6xFNxypD5Jn8GTBAELM"
            )
        )));
    }
    
        
    
    function transferFundToOwner() public payable onlyOwner{
        owner.transfer(address(this).balance);
    }
    
    function checkAmount() public view returns(uint){
        return address(this).balance;
    }
}


```



Note: Make sure you have transferred some DAI to the contract address so that later it will used while creating the channel.

Some of the constants that would be used throughout the code:

```
    address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;
    address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;
    address public DAI_ADDRESS = 0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD;
```

The `createChannelWithEPNS` takes in IPFS hash which contains the channel details as per Push standard. Then the function approves Push Core Contract to spend 50 DAI. At last, it calls the `createChannelWithFees` of Push Core Contract to crate the channel.

After the channel is created, we want to notify all the subscribers whenever funds are sent to the contract. This is where we will use the Push Communicator contract to send notification. The `receive` function is a special function that gets executed whenever ether is sent to the contract. So, here we are calling the `sendNotification` of the communicator contract. The parameters include channel, recipient and the message body in the form of identity bytes.&#x20;
