import * as React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/placeholder.png')

const propTypes = {
    item: PropTypes.object,
};

class Tarjet extends React.PureComponent{
    render(){
        const {navigation, item} = this.props;
        return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Detalle',{movieId: item.id})}
            style={styles.container}>
            <Image 
            resizeMode = "cover"
            style={styles.image}
            source={
               item.poster_path
               ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
               : placeholderImage 
            } 
            />
            {item.poster_path && (
              <Text style={styles.movieName}>{item.title}</Text>
            )}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        position:'relative',
        alignItems:'center',
        height: 198,
        marginBottom: 7,
    },

    image:{
        height: 199,
        width: 118,
        borderRadius: 18,
    },

    movieName:{
        position: 'absolute',
        width: 98,
        top: 9,
        textAlign: 'center'
    },
});

Tarjet.PropTypes=propTypes;
export default Tarjet;