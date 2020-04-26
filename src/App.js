import './assets/fonts/fonts.css';

import React from 'react';
import logo from './logo.svg';
import bg from './bg.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg} className="App-bg" alt="bg" />

        <div className="App-inner">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>About Ethereum Push Notification System(EPNS)</h1>
          <p>
            The EPNS protocol is a way to send notifications out to users of different dApps (or potentially all users of Ethereum itself) via Web, Mobile (push notifications) or Web3 Providers.</p>
          <p>
          EPNS was conceptualized and ideated for <a href="https://ethglobal.online/" target="_blank">EthGlobal Hack Money 2020</a>. During the 30 day virtual hackathon, we will try to build, design, and deliver a working EPNS app.
          </p>

          <div className="App-footer">
            <p><b>Coming Soon! In the meanwhile, follow our story:</b></p>
            <a
              className="App-link"
              target="_blank"
              href="https://github.com/ethereum-push-notification-system"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>

            <a
              className="App-link"
              target="_blank"
              href="https://medium.com/@epnsdapp"
            >
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </a>

            <a
              className="App-link"
              target="_blank"
              href="https://twitter.com/@harshrajat"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
