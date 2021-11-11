import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    flex: 2,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    marginVertical: 10,
    marginLeft: 26,
  },
});

export default styles;
