import {Text, useColorScheme, View} from 'react-native';
import {getIconFromSymbol} from '../assets/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const numWithComas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Item = ({symbol, name, price, changePercentage, currencySymbol, rank}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorGreen: string = isDarkMode ? '#4ade80' : '#16a34a';
  const colorRed: string = isDarkMode ? '#f87171' : '#dc2626';

  const decimalPoint = 2;
  const iconDetails = getIconFromSymbol(symbol);
  return (
    <View className="flex flex-row items-center justify-between space-y-1 rounded-md p-2">
      <View className="flex flex-row items-center justify-between space-x-4">
        <Text className={`${rank < 10 ? 'mr-2' : ''}`}>{rank}</Text>
        <View className={`${iconDetails.rotated ?? false ? '-rotate-45' : ''}`}>
          <FontAwesomeIcon
            icon={iconDetails.icon}
            size={32}
            color={iconDetails.color}
          />
        </View>
        <View className="flex flex-col items-start justify-center">
          <Text className="text-sm text-gray-900 dark:text-white">{name}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {symbol}
          </Text>
        </View>
      </View>
      <View className="flex flex-col items-end justify-center">
        <Text className="text-sm text-gray-900 dark:text-white">
          {`${currencySymbol} ${numWithComas(price.toFixed(decimalPoint))}`}
        </Text>
        <View className="flex flex-row items-center justify-between space-x-1">
          <FontAwesomeIcon
            color={changePercentage < 0.0 ? colorRed : colorGreen}
            icon={changePercentage < 0.0 ? faCaretDown : faCaretUp}
          />
          <Text
            className={`text-sm ${
              changePercentage < 0
                ? 'text-red-600 dark:text-red-400'
                : 'text-green-600 dark:text-green-400'
            }`}>
            {`${Math.abs(changePercentage.toFixed(decimalPoint))}%`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
