export const GridComponentsList = {
   notification: {
    first: [
        {
            title: 'Web3 Native',
            tags: [
              { title: 'Smart Contract',
                background: '#D98AEC',
                color: '#0D0D0F',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              },
              { title: 'Gasless',
                color: '#635F7C',
                border: '1px solid #343244'
              },
              { title: 'Off-Chain',
                color: '#635F7C',
                border: '1px solid #343244'
              }
            ],
            height: '147px',
            module: 'default',
            mobile: false
        },
        {
            title: 'Cross-chain \nNotifications',
            srcref: 'cross-chain',
            srcMargin:'24px 0 0 0',
            height: '169px',
            module: 'default',
            mobile: true
        },
        {
            title: 'Customize Notification \nPreferences',
            srcref: 'notif',
            srcMargin: '48px auto 0 auto',
            height: '340px',
            module: 'default',
            mobile: true
        },
       
    ],
    second:[
        {
            title: 'Lightweight Code with Rapid API Integration',
            header: '<4 mins',
            buttonText: 'Start building',
            srcref: 'subscribe',
            height: '478px',
            module: 'main',
            mobile: true
        },
        {
            title: 'Interoperable \nNotifications',
            bgImage: require('@site/static/assets/website/grids/notifications/inter.png').default,
            height: '202px',
            module: 'bg',
            mobile: false
        },
    ],
    third:[
        {
            title: 'Anti Spam',
            icon: 'spam',
            height: '76px',
            module: 'row',
            mobile: true
        },
        {
            srcref: 'snap',
            title: 'Receive Notifications \nin MetaMask',
            height: '321px',
            srcMargin: '24px 0',
            imageTop: true,
            module: 'default',
            mobile: false
        },
        
       
        {
            title: 'Increase \nEngagement',
            srcref: 'engage',
            height: '260px',
            module: 'default',
            mobile: false
        }
    ]  
   }
  }
  
