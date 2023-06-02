# Receiving via Delivery Node

In simpler terms, Push Delivery Nodes is a Whitelabel solution to enable any app, either mobile, desktop, or extension, to allow Web3 push notifications to their app.&#x20;

These are decentralized solutions to enable web3 to web2 bridging. They allow any platform (whether centralized or decentralized) to receive communication from **Push storage nodes**, i.e., the nodes validating and indexing all communications and tying them to your wallet address (and multi-chain identity).&#x20;

{% embed url="https://www.youtube.com/watch?v=OlRHL3qd4oY" %}

:::info
The Whitelabel solution of Push delivery nodes can be found at GitHub [here](https://github.com/ethereum-push-notification-service/push-delivery-node)
:::

## Steps for Getting Started With the Delivery Node Module <a href="#4da3" id="4da3"></a>

### Prerequisites

* `MYSQL (Version >= 5.7)`
* `Redis (Version >= 6.0)`
* `Docker (For local setup)`
* `Google FCM Account Setup`

### Step 1: Clone Push Delivery Node Repo

```
  git clone https://github.com/ethereum-push-notification-service/push-delivery-node.git
```

### Step 2: Environment Configuration

\
Refer env sample file. The MYSQL DB credentials and Redis URL needs to be updated. The remaining conf need not be edited as of now.&#x20;

If you use docker-compose for the local setup MYSQL DB and Redis config can be left as it is.

```
# REDIS

REDIS_URL=redis://localhost:6379

# DELIVERY NODE MYSQL DATABASE

DELIVERY_NODE_DB_HOST=localhost
DELIVERY_NODE_DB_NAME=dbname
DELIVERY_NODE_DB_USER=user
DELIVERY_NODE_DB_PASS=pass
DELIVERY_NODE_DB_PORT=3306
```

### Step-3.a Infra Setup: ( Local )

\
The docker-compose will bring up the MYSQL, Redis, and PHPMyAdmin containers for the Delivery Node.

```
docker compose up
```

### Step-3.b (Alternate) Infra Setup: ( Production )

* Host MYSQL and Redis Separately
* Add MYSQL and Redis credentials in the .env file

### Step-4 FCM Project Setup

* Refer [https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)
* Create the firebase-adminsdk.json file in the root folder and add the FCM JSON to this file

### Step-5 Build the Delivery node project

You should then be able to build the project using

```
cd push-delivery-node
npm install
```

### &#x20;Step-6 Start the Delivery node project

\
You should then be able to start the server using the following:

```
cd push-delivery-node
npm start
```

### Step-7 Device Registration

* An endpoint is hosted as part of the Delivery Node Project, which can be used for Device Registration.
* Below is the API to create a mapping between the wallet address and the device token for which the messages need to be delivered.
* \<delivery\_node\_url> is the base URL of the Delivery node you have hosted.

&#x20;  Below is the curl request of this endpoint

```

curl --location --request POST 'https://<delivery_node_url>/apis/v1/pushtokens/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    
    "wallet": "eip155:0x35B84d6848D16415177c64D64504663b998A6ab4",
    "device_token": "device_token",
    "platform": "android"
}'

```

