# CryptoTracker
A simple real-time crypto price tracker for investors.

## Features
- Real-time price tracking
- Currency conversion
- Simple design

# Dependency
- [CoinCapAPI](https://docs.coincap.io/)
- [TailwindCSS](https://www.npmjs.com/package/nativewind)
- [FontAwesome](https://fontawesome.com/v5/docs/web/use-with/react-native)

# Installation

### 1. Android Studio, NodeJS and Git
We need to setup [Android Studio](https://developer.android.com/studio/install), [NodeJS](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)

### 2. Install CryptoTracker
Start with cloning this repo ```git clone https://github.com/Htrap19/CryptoTracker```.

```sh
npm install --save
npm start
npm run android
```

# Methodology
Starting with CoinCapAPI, using 2 major endpoints
1. api.coincap.io/v2/rates <- To get all the rates(currencey bank rate prices).
2. api.coincap.io/v2/assets <- To get all the assets(currencies) ordered by rank.

And the (2)nd endpoint is called every 1sec time interval to update the prices.<br/>
The prices are standardized by ($)USD, but we can use (1)st endpoint to convert USD to any currency.<br />
**Note**: Prices might be not perfectly accurate due to high inflation in Sudan.<br />
To convert a price from USD to any currencey using (1)st endpoint:<br/>
E.g:
- Bitcoin price from USD to SDG: ```bitcoin.priceUsd / sdg.rateUsd``` to get bitcoin price in SDG.
- Ethereum price frmo USD to SDG: ```ethereum.priceUsd / sdg.rateUsd``` to get ethereum price in SDG.
- etc...

And this applies to all the assets. General formula is asset.priceUsd divided by rate.rateUsd.
