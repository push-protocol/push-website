
export const HomeGlassyNotifsList = {
    first: [
        {
            config: {
                id: 'native',
                height: '147px',
                padding: '24px',
                hideonmobile: true 
            },
            header: {
                title: 'home.notification-section.box1.title',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/web-native',
                imagealt: 'home.notification-section.box1.imagealt',
                imagetitle: 'home.notification-section.box1.imagetitle'
            }
        },
        {
            config: {
                id: 'cross-chain',
                height: '169px',
                padding: '24px',
                hideonmobile: false 
            },
            header: {
                title: 'home.notification-section.box2.title',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/cross-chain',
                // videosrc: 'notifs/cross-chain-video',
                imagealt: 'home.notification-section.box2.imagealt',
                imagetitle: 'home.notification-section.box2.imagetitle',
            }
        },
        {
            config: {
                id: 'custom-notif',
                height: '340px',
                padding: '24px',
                hideonmobile: false 
            },
            header: {
                title: 'home.notification-section.box3.title',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'notifs/notif',
                imagealt: 'home.notification-section.box3.imagealt',
                imagetitle: 'home.notification-section.box3.imagetitle'
            }
        },
    ],
    second:[
        {
            config: {
                id: 'lightweight',
                height: '478px',
                padding: '24px',
                hideonmobile: false,
                link: {
                    url: 'https://push.org',
                    linktitle: 'Lightweight Code with Rapid API Integration'
                },

            },
            header: {
                title: 'home.notification-section.box4.title',
                align: 'center',
            },
            body: {
                type: 'codeblock',
                bodytext: 'home.notification-section.box4.bodytext',
                buttontext: 'home.notification-section.box4.buttontext',
                buttonlink: '/docs/notifications/quickstart',
                buttontitle: 'home.notification-section.box4.buttontitle',
                codeblockImg: `notifs/lightweight`,
                // videosrc: 'notifs/lightweight-video',
                imagealt: 'home.notification-section.box4.imagealt',
                imagetitle: 'home.notification-section.box4.imagetitle'
         }
        },
        {
            config: {
                id: 'interoperable',
                height: '202px',
                padding: '24px',
                bg: require('@site/static/assets/website/home/notifs/inter.webp').default,
                bgtitle: 'home.notification-section.box5.bgtitle',
                hideonmobile: true
            },
            header: {
                title: 'home.notification-section.box5.title',
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
                hideonmobile: false 
            },
            header: {
                title: 'home.notification-section.box6.title',
                align: 'left',
                illustration: 'notifs/anti-spam',
                imagealt: 'home.notification-section.box6.iconalt',
                imagetitle: 'home.notification-section.box6.icontitle'
            }, 
        },
        {
            config: {
                id: 'snap',
                height: '321px',
                padding: '24px',
                hideonmobile: false
            },
            header: {
                title: 'home.notification-section.box7.title',
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
            body: {
                type: 'image',
                imagesrc: 'notifs/snap',
                // videosrc: 'notifs/snap-video',
                imagealt: 'home.notification-section.box7.imagealt',
                imagetitle: 'home.notification-section.box7.imagetitle'
            },
            footer: {
                text: 'home.notification-section.box7.footertext'
                
            }
        },
        {
            config: {
                id: 'increase',
                height: '260px',
                padding: '24px',
                hideonmobile: true
            },
            header: {
                title: 'home.notification-section.box8.title',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'notifs/engage',
                videosrc: 'notifs/engage-video',
                imagealt: 'home.notification-section.box8.imagealt',
                imagetitle: 'home.notification-section.box8.imagetitle'
            }
        }
    ]  
}

export const HomeGlassyChatList = {
    first: [
        {
            config: {
                id: 'share',
                height: '439px',
                padding: '24px 24px 0px 24px ',
                hideonmobile: false
            },
            header: {
                title: 'home.chat-section.box1.title',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'chats/share',
                // videosrc: 'chats/share-video',
                imagealt: 'home.chat-section.box1.imagealt',
                imagetitle: 'home.chat-section.box1.imagetitle'
            },
        },
        {
            config: {
                id: 'chat-requests',
                height: '88px',
                padding: '0px 24px',
                hideonmobile: true 
            },
            header: {
                title: 'home.chat-section.box2.title',
                align: 'left',
                illustration: 'chats/requests',
                subheader: 'home.chat-section.box2.subheader',
                iconalt: 'home.chat-section.box2.iconalt',
                icontitle: 'home.chat-section.box2.icontitle'
            }, 
        },
        {
            config: {
                id: 'secure',
                height: '132px',
                padding: '24px',
                hideonmobile: true 
            },
            header: {
                title: 'home.chat-section.box3.title',
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
                hideonmobile: false,
                link: {
                    url: 'https://push.org',
                    linktitle: 'Lightweight Code with Rapid API Integration'
                },
            },
            header: {
                title: 'home.chat-section.box4.title',
                align: 'center',
            },
            body: {
                type: 'codeblock',
                bodytext: 'home.chat-section.box4.bodytext',
                buttontext: 'home.chat-section.box4.buttontext',
                buttonlink: 'https://push.org',
                buttontitle: 'home.chat-section.box4.buttontitle',
                codeblockImg: `chats/lightweight`,
                imagealt: 'home.chat-section.box4.imagealt',
                imagetitle: 'home.chat-section.box4.imagetitle'
         }
        },
        {
            config: {
                id: 'hyperscalable',
                height: '237px',
                padding: '24px',
                bg: require('@site/static/assets/website/home/chats/hyper@3x.webp').default,
                bgtitle: 'home.chat-section.box5.bgtitle',
                // bgvideosrc: 'chats/hyper-video',
                hideonmobile: false
            },
            header: {
                title: 'home.chat-section.box5.title',
                align: 'left',
            },
            after: {
                message: 'home.chat-section.box5.afterMessage',
                alignment: 'right'
            }
        },
        {
            config: {
                id: 'plug-play',
                height: '237px',
                // padding: '24px 24px 0px 24px',
                padding: '24px',
                hideonmobile: false
            },
            header: {
                title: 'home.chat-section.box6.title',
                align: 'left',
            },
            body: {
                type: 'image',
                imagesrc: 'chats/plug-play',
                imagealt: 'home.chat-section.box6.imagealt',
                imagetitle: 'home.chat-section.box6.imagetitle'
                
            },
        },
    ],
    third: [
        {
            config: {
                id: 'chain-agnostic',
                height: '76px',
                padding: '0px 24px',
                hideonmobile: true 
            },
            header: {
                title: 'home.chat-section.box7.title',
                align: 'left',
                illustration: 'chats/chain-agnostic',
                subheader: 'home.chat-section.box7.subheader',
                iconalt: 'home.chat-section.box7.imagealt',
                icontitle: 'home.chat-section.box7.imagetitle'
            }, 
        },
        {
            config: {
                id: 'token-gated',
                height: '315px',
                padding: '24px',
                hideonmobile: false
            }, 
            body: {
                type: 'image',
                imagesrc: 'chats/token-gated',
                imagealt: 'home.chat-section.box8.imagealt',
                imagetitle: 'home.chat-section.box8.imagetitle'
            },
            footer: {
                text: 'home.chat-section.box8.footertext'
            }
        },
        {
            config: {
                id: 'e2e',
                height: '76px',
                padding: '0px 24px',
                hideonmobile: false 
            },
            header: {
                title: 'home.chat-section.box9.title',
                align: 'left',
                illustration: 'chats/e2e',
                subheader: 'home.chat-section.box9.subheader',
                iconalt: 'home.chat-section.box9.imagealt',
                icontitle: 'home.chat-section.box9.imagetitle'
            }, 
        },
        {
            config: {
                id: 'web3-standard',
                height: '169px',
                padding: '24px',
                hideonmobile: true 
            },
            header: {
                title: 'home.chat-section.box10.title',
                align: 'left'
            }, 
            body: {
                type: 'image',
                imagesrc: 'chats/web-standard',
                // videosrc: 'chats/web-standard-video',
                imagealt: 'home.chat-section.box10.imagealt',
                imagetitle: 'home.chat-section.box10.imagetitle'
            }
        },
    ]  
   }
  
