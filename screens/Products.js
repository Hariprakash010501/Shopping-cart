import React, { useState, useEffect } from "react";
import { FlatList ,TouchableOpacity} from "react-native";
import { Button, Card, Text } from "react-native-paper";

const Products = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity  onPress={()=> navigation.navigate('singleitem',{productid:item.id})} >
      <Card style={{margin:'30px'}}>
        <Card.Title title={item.title} subtitle={'$'+item.price} />
        <Card.Actions>
          <Button  onPress={()=> navigation.navigate('cart',{productid:item.id})}>ADD</Button>
        </Card.Actions>
      </Card> </TouchableOpacity>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default Products;