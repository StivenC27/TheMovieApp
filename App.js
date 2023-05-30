import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './componentes/MainNav';



const  App = () => {
  return (
    <NavigationContainer>
      <MainNav></MainNav>
    </NavigationContainer>
  );
}
export default App