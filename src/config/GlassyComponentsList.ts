export const GridComponentsList = {
   notification: {
    first: [
        {
            config: {
                id: 'native',
                height: '147px',
                padding: '24px',
                hideOnMobile: true 
            },
            header: {
                title: 'Web3 Native',
            //     tags: [
            //         { title: 'Smart Contract',
            //           background: '#D98AEC',
            //           color: '#0D0D0F',
            //           border: '1px solid rgba(255, 255, 255, 0.05)'
            //         },
            //         { title: 'Gasless',
            //           color: '#635F7C',
            //           border: '1px solid #343244'
            //         },
            //         { title: 'Off-Chain',
            //           color: '#635F7C',
            //           border: '1px solid #343244'
            //         }
            //       ],
                  align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/web-native',
                alt: 'Cross-chain Notifications'
            }
        },
        {
            config: {
                id: 'cross-chain',
                height: '169px',
                padding: '24px',
                hideOnMobile: false 
            },
            header: {
                title: 'Cross-chain \nNotifications',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/cross-chain',
                alt: 'Cross-chain Notifications'
            }
        },
        {
            config: {
                id: 'custom-notif',
                height: '340px',
                padding: '24px',
                hideOnMobile: false 
            },
            header: {
                title: 'Customize Notification \nPreferences',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/notif',
                alt: 'Customize Notification Preferences'
            }
        },
    ],
    second:[
        {
            config: {
                id: 'lightweight',
                height: '478px',
                padding: '24px',
                hideOnMobile: false
            },
            header: {
                title: 'Lightweight Code with Rapid API Integration',
                align: 'center',
            },
            body:{
                type: 'codeblock',
                bodyText: '<4 mins',
                buttonText: 'Start Building',
                buttonLink: 'https://push.org',
                codeblockImg: `notifs/lightweight`,
         }
        },
        {
            config: {
                id: 'interoperable',
                height: '202px',
                padding: '24px',
                bg: require('@site/static/assets/website/home/notifs/inter.webp').default,
                hideOnMobile: true
            },
            header: {
                title: 'Interoperable \nNotifications',
                align: 'left',
            }
        }
    ],
    third: [
        {
            config: {
                id: 'anti-spam',
                height: '76px',
                padding: '0px 24px',
                hideOnMobile: false 
            },
            header: {
                title: 'Anti-Spam',
                align: 'left',
                illustration: 'notifs/anti-spam'
            }, 
        },
        {
            config: {
                id: 'snap',
                height: '321px',
                // padding: '24px 0px',
                padding: '24px',
                bg: require('@site/static/assets/website/home/notifs/snap@3x.webp').default,
                hideOnMobile: false
            },
            header: {
                title: 'Push Snap',
                theme: 'hue',
                align: 'left',
                icon: 'notifs/starIcon',
                highlight: 
                { 
                    title: 'NEW',
                    color: '#D98AEC',
                    border: '1px solid #D98AEC',
                    fontSize: '9px'

                },
            }, 
            // body: {
            //     type: 'image',
            //     imagesrc: 'notifs/snap',
            //     alt: 'Push Snap'
            // },
            footer: {
                text: 'Receive Notifications \nin MetaMask'
                
            }
        },
        {
            config: {
                id: 'increase',
                height: '260px',
                padding: '24px',
                // bg: require('@site/static/assets/website/home/notifs/engage@4x.png').default,
                hideOnMobile: true
            },
            header: {
                title: 'Increase \nEngagement',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'notifs/engage',
                alt: 'Increase  Engagement'
            }
        }
    ]  
   },
   chat:{
    first: [
        {
            config: {
                id: 'share',
                height: '439px',
                padding: '24px 24px 0px 24px ',
                hideOnMobile: false
            },
            header: {
                title: 'Share Images, Gifs, \nand Reactions',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'chats/share',
                alt: 'Share Images'
            },
        },
        {
            config: {
                id: 'chat-requests',
                height: '88px',
                padding: '0px 24px',
                hideOnMobile: true 
            },
            header: {
                title: 'Chat Requests',
                align: 'left',
                illustration: 'chats/requests',
                subheader: 'PRIVATE AND ANTI SPAM'
            }, 
        },
        {
            config: {
                id: 'secure',
                height: '132px',
                padding: '24px',
                hideOnMobile: true 
            },
            header: {
                title: 'Secure, Instant, and \nVerifiable Payments',
                tags: [
                    {   
                        title: 'COMING SOON',
                        background: 'transparent',
                        color: '#D98AEC',
                        border: '1px solid #D98AEC',
                        fontSize: '9px'
                    }, 
                  ],
                  align: 'left'
            }, 
        },
    ],
    second: [
        {
            config: {
                id: 'lightweight-code',
                height: '446px',
                padding: '24px',
                hideOnMobile: false
            },
            header: {
                title: 'Lightweight Code with Rapid API Integration',
                align: 'center',
            },
            body:{
                type: 'codeblock',
                bodyText: '<2 mins',
                buttonText: 'Start Building',
                buttonLink: 'https://push.org',
                codeblockImg: `chats/lightweight`,
         }
        },
        {
            config: {
                id: 'hyperscalable',
                height: '237px',
                padding: '24px',
                bg: require('@site/static/assets/website/home/chats/hyper@3x.webp').default,
                hideOnMobile: false
            },
            header: {
                title: 'Hyperscalable \nGroups',
                align: 'left',
            },
            after: {
                message: '*Other Chat Apps: 1024 Members',
                alignment: 'right'
            }
        },
        {
            config: {
                id: 'plug-play',
                height: '237px',
                padding: '24px 24px 0px 24px',
                hideOnMobile: false
            },
            header: {
                title: 'Plug and Play \nChat Components',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'chats/plug-play',
                alt: 'Plug and Play'
            },
        },
    ],
    third: [
        {
            config: {
                id: 'chain-agnostic',
                height: '76px',
                padding: '0px 24px',
                hideOnMobile: true 
            },
            header: {
                title: 'Chain Agnostic',
                align: 'left',
                illustration: 'chats/chain-agnostic',
                subheader: 'SUPPORTS ALL EVM CHAINS'
            }, 
        },
        {
            config: {
                id: 'token-gated',
                height: '315px',
                padding: '24px',
                hideOnMobile: false
            },
            header: {
            }, 
            body: {
                type: 'image',
                imagesrc: 'chats/token-gated',
                alt: 'Create Token'
            },
            footer: {
                text: 'Create Token, NFT, \nGeo Gated Groups'
            }
        },
        {
            config: {
                id: 'e2e',
                height: '76px',
                padding: '0px 24px',
                hideOnMobile: false 
            },
            header: {
                title: 'E2E Encryption',
                align: 'left',
                illustration: 'chats/e2e',
                subheader: 'END-TO-END (E2EE)'
            }, 
        },
        {
            config: {
                id: 'web3-standard',
                height: '169px',
                padding: '24px',
                hideOnMobile: true 
            },
            header: {
                title: 'Supports any \nWeb3 Standard',
                    // tags: [
                    //   { title: 'Wallet',
                    //     background: '#D98AEC',
                    //     color: '#0D0D0F',
                    //     border: '1px solid #D98AEC'
                    //   },
                    //   { title: 'NFT',
                    //     color: '#635F7C',
                    //     border: '1px solid #343244'
                    //   },
                    //   { title: 'Cross-chain',
                    //     color: '#635F7C',
                    //     border: '1px solid #343244'
                    //   },
                    //   { title: 'Chain Specific Address',
                    //     color: '#635F7C',
                    //     border: '1px solid #343244'
                    //   },
                    // ],
                  align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'chats/web-standard',
                alt: 'Cross-chain Notifications'
            }
        },
    ]  
   }
  }
  
