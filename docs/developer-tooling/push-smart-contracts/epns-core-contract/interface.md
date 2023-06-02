# Interface

### Interface contracts connected to Push Contract

Push contract interacts with PUSH token and communicator contract with the help of these interfaces

```solidity
interface IPUSH {
  function born() external view returns(uint);
  function totalSupply() external view returns(uint);
  function resetHolderWeight(address holder) external;
  function returnHolderUnits(address account, uint atBlock) external view returns (uint);
}
```

```solidity
interface IEPNSCommV1 {
  function subscribeViaCore(address _channel, address _user) external returns(bool);
  function unSubscribeViaCore(address _channel, address _user) external returns (bool);
}

```