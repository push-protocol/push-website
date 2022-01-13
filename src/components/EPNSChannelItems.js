import React from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { ItemH } from "components/SharedStyling";

import Loader from "react-loader-spinner";

import config from "config/config";
import EPNSHelperAPI from "helpers/EPNSHelperAPI";

import EPNSChannelItem from "components/EPNSChannelItem";

const DEFAULT_CHANNELS_FIRST_ROW = [
  "0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",
  "0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",
  "0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",
  "0x983110309620D911731Ac0932219af06091b6744",
  "0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",
];
// const DEFAULT_CHANNELS_SECOND_ROW = [
//   "0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",
//   "0xb754601d2C8C1389E6633b1449B84CcE57788566",
// ];

// Create
function EPNSChannelItems({ numberOfChannels }) {
  const [epnsInteactable, setEPNSInteractable] = React.useState(null);
  const [channelsLoaded, setChannelsLoaded] = React.useState(true);
  const [channels, setChannels] = React.useState(DEFAULT_CHANNELS_FIRST_ROW);
  // const [secondChannels, setSecondChannels] = React.useState(
  //   DEFAULT_CHANNELS_SECOND_ROW
  // );

  React.useEffect(() => {
    if (numberOfChannels) {
      // Create contract first
      let epns;

      if (!epnsInteactable) {
        epns = createEPNSContract();
        setEPNSInteractable(epns);
      }
    }
  }, [numberOfChannels]);

  // React.useEffect(() => {
  //   if (epnsInteactable) {
  //     // Just assign ids to channels
  //     EPNSHelperAPI.getTotalNumberOfChannels(epnsInteactable.contract).then(
  //       (totalChannelsCount) => {
  //         let channelsDummy = [];
  //         for (
  //           let i = totalChannelsCount - 1;
  //           i > totalChannelsCount - 1 - numberOfChannels;
  //           i--
  //         ) {
  //           channelsDummy.push({ channelID: i, loaded: true });
  //         }
  //         setChannels(channelsDummy);
  //         setChannelsLoaded(true);
  //       }
  //     );
  //   }
  // }, [epnsInteactable]);

  const createEPNSContract = () => {
    // Call Helper function to get interactableContracts
    const epns = EPNSHelperAPI.getInteractableContracts(
      config.web3MainNetwork, // Network for which the interactable contract is req
      {
        // API Keys
        etherscanAPI: config.etherscanAPI,
        infuraAPI: null, //config.infuraAPI,
        alchemyAPI: config.alchemyAPI,
      },
      null, // Private Key of the Wallet
      config.deployedContract, // The contract address which is going to be used
      config.deployedContractABI // The contract abi which is going to be useds
    );
    return epns;
  };

  // RENDER
  return (
    <ItemH
      style={{ flexDirection: "column" }}
      margin="0px 20px"
      self="stretch"
      align="stretch"
      width="100%"
    >
      {!channelsLoaded && (
        <Loader type="Oval" color="#e20880" height={32} width={32} />
      )}
      <ItemH>
        {channels.map(function (item, id) {
          return (
            <EPNSChannelItem
              channelID={item}
              loaded={true}
              key={id}
              epnsContract={epnsInteactable?.contract}
            />
          );
        })}
      </ItemH>
      {/* <ItemH margin="40px 0px">
        {secondChannels.map(function (item, id) {
          return (
            <EPNSChannelItem
              channelID={item}
              loaded={true}
              key={id}
              epnsContract={epnsInteactable?.contract}
            />
          );
        })}
      </ItemH> */}
    </ItemH>
  );
}

// css style

// Export Default
export default EPNSChannelItems;
