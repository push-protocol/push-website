---
description: >-
  This guide explains how to create your very own hello world channel on top of
  the showrunners scaffold. Do read Setup Showrunners incase you haven't as the
  guide is dependent on it.
---

# Hello World Channel

Please ensure that you have correctly installed showrunners using the [**Setup Showrunners**](how-to-setup-showrunners.md) guide before proceeding forward.

## Setting up Hello World Channel

Hello World channel exists to simply demonstrate how easy it is to send notifications in Web3. To setup the channel, you will need to do the following things.

1. Ensure that you have [**created your channel**](../../developer-guides/create-your-notif-channel/) and make a note of the private key used for the same.&#x20;
2. Head to `src/sample_showrunners` from the git clone of **push-showrunners-framework** which you had done earlier.
3. Copy the folder `helloWorld` and drop it in `src/showrunners` folder.
   1. You might notice that the showrunners has already moved to complain about `helloWorldKeys.json` not containing the correct private key.\
      `{` \
      &#x20;   `"PRIVATE_KEY_NEW_STANDARD_1":` \
      &#x20;   `{` \
      &#x20;       `"PK": "YOUR_CHANNEL_PRIVATE_KEY_HERE",` \
      &#x20;       `"CHAIN_ID": "CHAIN_ID_HERE"`\
      &#x20;   `},` \
      `}`\
      ``&#x20;
4. Simply copy and paste the private key of your channel instead of `YOUR_CHANNEL_PRIVATE_KEY_HERE` and you should be presented with the following screen.\
   \
   For `CHAIN_ID_HERE`, You will need to paste the multi chain id format, current supported formats are:

{% tabs %}
{% tab title="Ethereum Goerli Testnet" %}
`"CHAIN_ID": "eip155:5"`\
``\
``**Note:** Use `eip155:5` if you deployed your channel on Ethereum Goerli Testnet\


:::info
Will only work if .env also has SHOWRUNNERS\_ENV=staging
:::
{% endtab %}

{% tab title="Polygon Mumbai Testnet" %}
`"CHAIN_ID": "eip155:80001"`\
``\
``**Note:** Use `eip155:80001` if you deployed your channel on Matic Mumbai Testnet\


:::info
Will only work if .env also has SHOWRUNNERS\_ENV=staging
:::
{% endtab %}

{% tab title="Ethereum Mainnet" %}
`"CHAIN_ID": "eip155:1"`\
``\
``**Note:** Use `eip155:1` if you deployed your channel on Ethereum Mainnet\


:::info
Will only work if .env also has SHOWRUNNERS\_ENV=prod
:::
{% endtab %}

{% tab title="Polygon Mainnet" %}
`"CHAIN_ID": "eip155:137"`\
``\
``**Note:** Use `eip155:137` if you deployed your channel on Polygon\


:::info
Will only work if .env also has SHOWRUNNERS\_ENV=prod
:::
{% endtab %}
{% endtabs %}

<!-- ![](<../../.gitbook/assets/Screen Shot 2022-05-09 at 1.10.56 PM.png>) -->

Congrats, your channel is setup and good to go. Let's look at what components of your channel folders enable what functionality next!
