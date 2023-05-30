import * as React from 'react';
import {View ,Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Colores from "../temas/Colores";

// Estas constantes tiene como función dar aviso en caso de que exista un error o haya una falla
// en la señal para abrir la pagina.
const propTypes={
    
    errorText1: PropTypes.string,
    errorText2: PropTypes.string,
}

const defaultProps = {
    errorText1: 'Ok, Hubo Un Error',
    errorText2: 'Verifica Tu Conexión o Refresca',
}
// Esta clase es para que cuando salga una de las alertas salga una forma ordenada.
class Error extends React.PureComponent{
    render(){
        const {errorText1, errorText2} = this.props;
        return(
            <View style= {styles.container}>
                <Text style= {styles.text}>{errorText1}</Text>
                <Text style= {styles.text}>{errorText2}</Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },

    text:{
        fontWeight:'bold',
        color: Colores.warning,
    },
})
    
Error.PropTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;