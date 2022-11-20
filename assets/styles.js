import {
  faBitcoinSign,
  faDollar,
  faT,
  faDiamond,
  faBars,
  faDrawPolygon,
  faTornado,
  faPesoSign,
  faAtom,
  faU,
  faLitecoinSign
} from '@fortawesome/free-solid-svg-icons';
import {
  faEthereum,
  faDyalog,
  faSquareXing,
  faBitcoin,
  faArtstation,
  faNfcDirectional,
  faStumbleuponCircle,
  faWatchmanMonitoring,
  faFirefox,
} from '@fortawesome/free-brands-svg-icons';

export const getIconFromSymbol = name => {
  const includes = Object.keys(Icons).includes(name.toLowerCase());
  if (!includes) {
    return Icons.dollar;
  }
  return Icons[name.toLowerCase()];
};

export const Icons = {
  btc: {icon: faBitcoin, color: '#f7971b'},
  eth: {icon: faEthereum, color: '#5773e5'},
  doge: {icon: faDyalog, color: '#c3a634'},
  usdt: {icon: faT, color: '#27a47e'},
  bnb: {icon: faDiamond, color: '#f1bb2f'},
  usdc: {icon: faNfcDirectional, color: '#2a77c8'},
  busd: {icon: faBars, color: '#edb60a', rotated: true},
  xrp: {icon: faSquareXing, color: '#34495e'},
  matic: {icon: faDrawPolygon, color: '#2c6eef'},
  trx: {icon: faTornado, color: '#bdc3c7'},
  wbtc: {icon: faBitcoinSign, color: '#f3a548'},
  dot: {icon: faPesoSign, color: '#f10582'},
  avax: {icon: faArtstation, color: '#e74142'},
  ada: {icon: faAtom, color: '#30bcbc'},
  sol: {icon: faStumbleuponCircle, color: '#748ac7'},
  luna: {icon: faWatchmanMonitoring, color: '#ffd83d'},
  shib: {icon: faFirefox, color: '#d8260f'},
  dai: {icon: faDollar, color: '#fdca45'},
  uni: {icon: faU, color: '#eb318f'},
  ltc: {icon: faLitecoinSign, color: '#d1cece'},
  // default
  dollar: {icon: faDollar, color: 'gray'},
};
