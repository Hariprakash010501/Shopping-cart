import React, {useState, useEffect} from 'react'
import {  Button, Card, Text } from 'react-native-paper';

const SingleItem = ({route,navigation}) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${route?.params.productid}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      });
  });
  return(<Card>
        <Card.Cover source={item.image} resizeMode="contain" style={{backgroundColor:'#fff'}} />
         <Card.Title title={item.title} subtitle={'$'+item.price} />
        <Card.Content>
          <Text variant="bodyMedium" style={{textAlign:'justify'}}>{item.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={()=>navigation.navigate('cart',{productid:item.id})}>Add To Cart</Button>
        </Card.Actions>
      </Card>);
}

export default SingleItem;