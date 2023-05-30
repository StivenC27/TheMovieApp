import * as React from 'react';
import {View, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Colores from '../temas/Colores';

const propTypes={
    main: PropTypes.bool,
}
const defaultProps ={
    main: false,
}

// En esta clase se renderizara la navegación del icono de busqueda.

class BarraNavegacion extends React.PureComponent{
    state = {}
    render (){
        const {navigation, main} = this.props
        return(
            <SafeAreaView>
                {main ?(
        <View style = {styles.mainNav}>

           <Image
            style={style.logo}
            source={require('../assets/favicon.png')}
           /> 
           <TouchableOpacity onPress={() => {
            navigation.navigate('BUSQUEDA');
           }}>
            <Icon name = {'search-outline'} size={25} color={Colores.sucess}/>
           </TouchableOpacity>
        </View>
    ) : (   
        <View>
          <TouchableOpacity
          onPress={()=>{
            navigation.goback();
          }}>
            <Icon name = {'chevron.back'} size={35} color={Colores.white}/>
          </TouchableOpacity>
        </View>  
    )}      
            </SafeAreaView>
        )
    }
}

BarraNavegacion.PropTypes = propTypes;
BarraNavegacion.defaultProps = defaultProps;

export default BarraNavegacion;