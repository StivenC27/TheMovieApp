import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colores from '../temas/Colores';

// Igual que en PlayButton aqui se ejecutara la renderización de el boton pata parar la pelicula
class ButtonStop extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'chevron-back-circle-sharp'} size={30} color={Colores.danger} />
      </Pressable>
    );
  }
}s

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 47,
    width: 47,
    padding: 8,
    backgroundColor: Colores.primary,
  },
});

export default ButtonStop;