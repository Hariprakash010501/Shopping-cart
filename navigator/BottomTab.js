import React from 'react'
import Products from '../screens/Products'
import Cart from '../screens/Cart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Entypo} from '@expo/vector-icons'
import MyStack from './MyStack'

const MyTab = createBottomTabNavigator();

const BottomTab = () => {
  return(<MyTab.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
  >
    <MyTab.Screen name="My App" component={Products} 
      options={{
        tabBarLabel: "Products",
        tabBarIcon: ({color, size}) => 
          <Ionicons name="home" color={color} size={size} />
      }}
    />
    <MyTab.Screen name="cart" component={Cart} 
      options={{
        tabBarLabel: "Cart",
        tabBarIcon: ({color, size}) => 
          <Ionicons name="cart" color={color} size={size} />
      }}    
    />
       
  </MyTab.Navigator>)
}

export default BottomTab;