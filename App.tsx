/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // StyleSheet,
  Text,
  useColorScheme,
  View,
  // useColorScheme,
} from 'react-native';
import Item from './components/Item';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [assets, setAssets] = useState<any[]>();
  const [rates, setRates] = useState<any[]>();
  const [selectedRateIdx, setSelectedRateIdx] = useState<number>(0);

  const isDarkMode = useColorScheme() === 'dark';
  const statusBarColor = isDarkMode ? '#111827' : '#f3f4f6';

  useEffect(() => {
    fetch('https://api.coincap.io/v2/rates')
      .then((res) => res.json())
      .then((finalRes) => {
        setRates(finalRes?.data);
        finalRes?.data.map((rate: any, index: number) => {
          if (rate.symbol === 'SDG') {
            setSelectedRateIdx(index);
          }
        });
      });
    const handler = setInterval(() => {
      fetch('https://api.coincap.io/v2/assets?limit=20')
        .then((res) => res.json())
        .then((finalRes) => {
          setAssets(finalRes?.data);
          // clearInterval(handler);
        });
    }, 1000);

    return () => {
      clearInterval(handler);
    };
  }, []);

  // @ts-ignore
  // @ts-ignore
  return (
    <SafeAreaView className="min-h-screen bg-gray-100 py-1 dark:bg-gray-900">
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView>
        <View className="mb-4 flex flex-row items-center justify-between py-4 pl-4">
          <Text className="text-xl text-gray-900 dark:text-white">
            Crypto Tracker
          </Text>
          <Picker
            selectedValue={selectedRateIdx}
            style={{flex: 0.6}}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedRateIdx(itemIndex);
            }}>
            {rates?.map((rate, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={`${rate.symbol} - ${rate.id}`}
                  value={index}
                />
              );
            })}
          </Picker>
        </View>
        <View className="mb-4 rounded-xl bg-white p-2 shadow-xl dark:bg-gray-800">
          {assets?.map((asset, index) => {
            return (
              <Item
                key={index}
                symbol={asset.symbol}
                name={asset.name}
                rank={asset.rank}
                currencySymbol={rates?.[selectedRateIdx].currencySymbol ?? ''}
                price={
                  parseFloat(asset.priceUsd) /
                  parseFloat(rates?.[selectedRateIdx].rateUsd)
                }
                changePercentage={parseFloat(asset.changePercent24Hr)}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
