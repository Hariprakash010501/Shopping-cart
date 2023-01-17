import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'
import {  Button, Card, Text } from 'react-native-paper';

const Cart = ({route}) => {
  const [data, setData] = useState([]);
  const [quantity,setQuantity]=useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${route?.params.productid}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  });
  const handPress=()=>{
    if (quantity>0)
    setQuantity((prev)=>prev-1);
  }
  const handChange=()=>{
    setQuantity((prev)=>prev+1)
  }
  const tot=data.price*quantity
    return (
      <>
      <Card style={{margin:'30px'}}>
        <Card.Title title={data.title} subtitle={'$'+data.price} />
        <Card.Actions>
        <Button mode ="outlined" onPress={handPress}>-</Button><Text>{quantity}</Text>
        <Button mode="outlined" onPress={handChange}>+</Button></Card.Actions>
        
      </Card>
      <Text style={{textAlign:'center'}}>Total Amount : {tot}</Text></>
    )}
export default Cart;