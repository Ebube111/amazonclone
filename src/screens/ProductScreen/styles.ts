import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 22,
    fontFamily: 'font-mono',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    lineHeight: 18,
  },
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default styles;
