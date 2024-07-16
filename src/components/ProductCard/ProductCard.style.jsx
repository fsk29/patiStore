import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card_container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('window').width / 2 - 20,
  },
  'card_container:last-child': {
    width: '100%',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  price: {
    marginTop: 3,
    fontSize: 16,
    color: '#808080',
  },

  stock: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 18,
    marginTop: 5,
  },
});
