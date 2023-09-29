import { A, Span } from "@site/src/utils/SharedStyling";
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import "../../css/custom.css";

const AMod = styled(A)`
  color: #575D73;
  font-weight: 400;
  text-decoration: underline;
`;

type FaqItems = {
    title: string;
    description: JSX.Element;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    OpenSvg: React.ComponentType<React.ComponentProps<'svg'>>;
}

const Faq: FaqItems[] = [
    {
        title: 'What is Push?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc).
                Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users
            </>
        ),
    },
    {
        title: 'How do I contact customer support?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                 Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc).
            </>
        ),
    },
    {
        title: 'What is Push trying to solve?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                Push is building the communication layer for Web3, using which any dApp, smart contracts or backend can send any real time communications (such as notifications, chats, video and more) that are tied directly to a user's wallet address (aka web3 usernames).
            
                 This addresses a major gap in the web3 infrastructure, and improving the everyday experience for blockchain users. The notifications (or any other communications) are off-chain, gasless for all scenarios except when a smart contract sends them (in which case the smart contract pays a slightly higher gas fees for the payload that is sent on blockchain).
                While communications are encrypted and secure, they utilize Push open network which means any dApp or crypto wallet can easily integrate them making the lives of all web3 users a lot easier and more akin to web2 UX where apps (or protocols) communicate with their users whenever something of importance occurs or is about to occur for them.
            </>
        ),
    },
    {
        title: 'How can I use Push as an end-user?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                   Connect to the <AMod href="https://app.push.org/#/channels" target={"_blank"}>Push dApp</AMod> & opt-in to channels to get notifications for protocols that are relevant to you. Channels are protocols that activate themselves on Push protocol to send notification.
                    
                   You can receive notifications from any crypto frontends that have already integrated Push. Alternatively, you can use via <AMod href="https://app.push.org/#/channels"  target={"_blank"}>Push dApp</AMod>, <AMod href="https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg" target={"_blank"}>browser extension</AMod>, and mobile app (<AMod href="https://play.google.com/store/apps/details?id=io.epns.epns&pli=1" target={"_blank"}>Android</AMod> & <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target={"_blank"}>iOS</AMod>) in case your favorite wallet or dApp doesn't have Push support yet.
                    
                   Push recently launched a wallet-to-wallet communication product called Push Chat which is in alpha stage. Reach out to us on <AMod href="https://discord.com/invite/pushprotocol" target={"_blank"}>Discord</AMod> to get exclusive Push Chat access.
            </>
        ),
    },
    {
        title: 'What are the web3 communication products launched by Push?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'Do I have to pay to send notifications?',
        Svg: require('@site/static/assets/docs/addicon.svg').default,
        OpenSvg: require('@site/static/assets/docs/minusicon.svg').default,
        description: (
            <>
                No, Push doesn’t take any fees for you to send notification. Although, there is a nominal charge of 50 PUSH required during Channel creation, which is put in place to prevent spamming.
            </>
        ),
    },
]

function FAQCard({ title, Svg, OpenSvg, description }: FaqItems) {
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };
    return (
        <div className="App" style={{width:' 100%;'}}>
            <div style={{width:'100%'}}>
                <button
                    className={`question-section ${active}`}
                    onClick={toggleAccordion}
                >
                    <div>
                        <div className="question-align">
                            <h4 className="question-style spacing-small">
                                {title}
                            </h4>
                            {active ? (
                                <OpenSvg className="icon" />
                            ) : (
                                <Svg className="icon" />
                            )}
                        </div>
                        <div
                            ref={contentRef}
                            className={active ? `answer answer-divider` : `answer`}
                        >
                            <p className="answer-style">{description}</p>
                        </div>
                    </div>
                </button>
            </div>
            
            <hr style={{ maxWidth: "100%", margin: "auto", backgroundColor: "#fffff", marginBottom: "30px" }} />
          
        </div>
    )
}



export default function FAQ() {
    return (
        <div style={{ gap: "30px" }}>
            {Faq.map((props, idx) => (
                <FAQCard key={idx} {...props} />
            ))}
        </div>
    )
}
