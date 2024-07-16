import {React, useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import product_data from './products.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const renderProducts = ({item}) => <ProductCard products={item} />;
  const screenWidth = useWindowDimensions().width;
  let columnNumber = 1;
  if (screenWidth > 400) columnNumber = 2;
  if (screenWidth > 600) columnNumber = 3;
  if (screenWidth > 800) columnNumber = 4;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE {screenWidth}</Text>
      <View>
        <TextInput style={styles.search_text} placeholder="Ara..." />
      </View>
      <FlatList
        key={`flatList${columnNumber}`}
        numColumns={columnNumber}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_text: {
    fontSize: 40,
    color: '#800080',
    fontWeight: 'bold',
    margin: 10,
  },
  search_text: {
    borderRadius: 5,
    backgroundColor: '#eceff1',
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
});

export default App;
