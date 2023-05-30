import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colores from '../temas/Colores';


// En esta clase se ejecutara el boton play para iniciar la pelicula
class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'caret-forward-outline'} size={27} color={Colores.sucess} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 48,
    width: 48,
    padding: 9,
    backgroundColor: Colores.primary,
  },
});

export default PlayButton;