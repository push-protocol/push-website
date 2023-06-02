# Receiving via AWS SNS

SNS module for Push Delivery Nodes allows any developer to receive notifications, chats, or any other form of web3 communication directly to the platform they are building with the help of webhooks.

Hosted SNS Module is a mid-level solution that eliminates all the heavy load of running a node or syncing information and gives you webhooks that you implement to start receiving notifications, chats, or any other web3 communication in your software.



## 3 Steps for Getting Started With Hosted SNS Module <a href="#4da3" id="4da3"></a>

Integrating the SNS module into your code takes less than 10 mins and contains just 3 steps:

**Step 1:** Implement a webhook to listen to [`AWS SNS`](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples.html). Here’s a boilerplate along with specs to get you npm installed and running: [https://github.com/ethereum-push-notification-service/push-sns-boilerplate](https://github.com/ethereum-push-notification-service/push-sns-boilerplate)

**Step 2:** You will need to open an endpoint either at a dedicated IP that listens to SNS or, if you are testing locally, have to expose the public endpoint for which tons of software is available.\
\
_**Hint:**_** ** For testing locally, You can also use [ngrok](https://ngrok.com/download) to expose the public endpoint. If you use this with the boilerplate, the port needs to be 6000. The ngrok URL is now the SNS endpoint required in step 3.

:::info
**Important:** Once you set up this, you need to contact us by either shouting / tagging us on [Discord](https://discord.com/invite/YVPB99F9W5) or reaching out via the [contact form](mailto:support@epns.io). We need this as the SNS module requires whitelisting of your webhook endpoint.
:::

## Push SNS Boilerplate

[This](https://github.com/ethereum-push-notification-service/epns-sns-boilerplate) boilerplate can be used as a starting point to consume the feeds from the Push SNS Topic.



Here’s a timelapse of how everything works… see you on the other side 😃

<!-- ![](../../.gitbook/assets/1\_q0kbnXZqlt8a-Pfzi8uVIQ.gif) -->

\


## SNS Sample Messages <a href="#4da3" id="4da3"></a>

### &#x20;     Subscription Confirmation

&#x20;       This is a one-time message confirming if the SNS subscription is successful.



### &#x20;      Notification      &#x20;

&#x20;       These are the actual notifications which need to be delivered to the end users.

```
{
    Type: 'Notification',
    MessageId: '62918f56-9bce-5497-a23e-d422c782a01d',
    TopicArn: 'arn:aws:sns:us-east-1:293359341249:dev-epns-notifications',
    Message: '{"sid":121,"users":["0x35B84d6848D16415177c64D64504663b998A6ab4"],"payload":{"apns":{"payload":{"aps":{"category":"withappicon","mutable-content":1,"content-available":1}},"fcm_options":{"image":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx"}},"data":{"app":"Shunya","sid":"121","url":"https://shunya.fi/","acta":"https://shunya.fi","aimg":"https://shunya.fi/_nuxt/img/shunya.cfece51.png","amsg":"Your portfolio is up by 0.08% since yesterday.","asub":"Assets Daily","icon":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx","type":"3","epoch":"1660554419","appbot":"0","hidden":"0","secret":""},"android":{"notification":{"icon":"@drawable/ic_stat_name","color":"#e20880","image":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx","default_vibrate_timings":true}},"notification":{"body":"Your portfolio is up by 0.08% since yesterday.","title":"Shunya - Assets Daily"}},"epoch":"1660554419","topic":"Notification","subtopic":"Channel"}',
    Timestamp: '2022-08-15T14:37:00.408Z',
    SignatureVersion: '1',
    Signature: 'iqnfhnF/SsQYaqVrhAjWlCFWYoeMSftRLRrkkxje3CppCNm/CATg13ljIz0tChVa7OJEoaVI/tpUERiuhZ9wxuGmDI6ReaGORam4Yda4CC0HqfitqYG8M0AamScXgiqN9hgcGHbbitYQWWIp2vmFKC+P1j9Hq9Lz19fBlHz1/9hJwHlRfKDADqh1I15wERZZGGUu//Z+S6bnJ9k2JrektKDNRukSihSU1u07563RirE+EJ6TCxQGUY4GzuuwlOu6vj9ESsVE4mBdfxnmNLsZoVBl87KHg7/z9Uh1IJTqkdRyN5+XXg4XDE1puYr9qypfhk8abmZQIrn5obrHDe+ZBQ==',
    SigningCertURL: 'https://sns.us-east-1.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem',
    UnsubscribeURL: 'https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:293359341249:dev-epns-notifications:cc473de2-b46e-462c-95d4-178580487a26'
}
```



**The Message** is the field in the above JSON is the actual notification sent from the Push in JSON stringified format.



\
**Message**

When converted to JSON, a sample message looks like the one below.

```
{
	"sid": 121,
	"users": ["0x35B84d6848D16415177c64D64504663b998A6ab4"],
	"sender": "0x35B84d6848D16415177c64D64504663b998A6ab4",
	"payload": {
		"data": {
			"app": "Shunya",
			"sid": "121",
			"url": "https://shunya.fi/",
			"acta": "https://shunya.fi",
			"aimg": "https://shunya.fi/_nuxt/img/shunya.cfece51.png",
			"amsg": "Your portfolio is up by 0.08% since yesterday.",
			"asub": "Assets Daily",
			"icon": "https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx",
			"type": "3",
			"epoch": "1660554419",
			"appbot": "0",
			"hidden": "0",
			"secret": ""
		},
		"notification": {
			"body": "Your portfolio is up by 0.08% since yesterday.",
			"title": "Shunya - Assets Daily"
		}
	},
	"epoch": "1660554419",
	"topic": "Notification",
	"subtopic": "Channel"
}
```

\


* **sid** - unique id from the push
* **users** - list of wallet addresses for which the notification needs to be delivered
* **payload** - an actual payload that needs to be delivered to the user's device
* **epoch** - timestamp when the payload is generated
* **topic** - the type of payload, i.e. Notification, Chat etc
* **subtopic** - mode of delivery, i.e. Channel or User level



\
