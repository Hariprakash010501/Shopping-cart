import Products from '../screens/Products'
import SingleItem from '../screens/SingleItem'
import Cart from '../screens/Cart';
import {createStackNavigator} from '@react-navigation/stack'
import BottomTab from './BottomTab'

const Stack = createStackNavigator();

const MyStack = () => {
  return(
    <Stack.Navigator>
     <Stack.Screen name="bottom" component={BottomTab} options={{ title:"My App", headerShown:false}}/>
      <Stack.Screen name="home" component = {Products} />
      <Stack.Screen name="singleitem" component = {SingleItem} />
      <Stack.Screen name="cart" component = {Cart} />
    </Stack.Navigator>
  )
}

export default MyStack;
