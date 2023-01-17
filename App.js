import React from "react";
import Products from "./screens/Products";
import MyStack from './navigator/MyStack'
import {NavigationContainer} from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
