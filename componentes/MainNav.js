import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Pantallas/Inicio';
import BarraNavegacion from './BarraNavegacion';
import Buscar from '../pantallas/Buscar';
import Detalles from '../pantallas/Detalles';

const Stack = createStackNavigator()
class MainNav extends React.PureComponent{
    render(){
        return(
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen 
                 name = "Inicio"
                 component={Inicio}
                 options={{
                    headerTransparent:true,
                    header:({navigation}) => (
                        <BarraNavegacion navigation={navigation} main={true} />
                    )
                 }}
                 /> 
                 <Stack.Screen 
                 name = "Detalles"
                 component={Detalles}
                 options={{
                    headerTransparent:true,
                    header:({navigation}) => (
                        <BarraNavegacion navigation={navigation} main={false} />
                    )
                 }}
                 />
                 <Stack.Screen 
                 name = "Búsqueda"
                 component={Buscar}
                 options={{
                    headerTransparent:true,
                    header:({navigation}) => (
                        <BarraNavegacion navigation={navigation} main={false} />
                    )
                 }}
                 />


            

            </Stack.Navigator>
            
        )
    }
}
export default MainNav