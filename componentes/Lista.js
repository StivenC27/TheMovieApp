import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Tarjet from './Tarjet';

const propTypes={
    title: PropTypes.string,
    content: PropTypes.array,
};

class Lista extends React.PureComponent{
    render(){
        const{navigation, title, content} = this.props;
        return(
            <View style={styles.list}>
             <View>
                <Text style={styles.text}>{title}</Text>
             </View>
            <View>
            <FlatList
            data={content}
            horizontal={true}
            renderItem={({item})=>(
                <Tarjet navigation={navigation} item={item}/>
            )}
            />
            </View>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    list: {
        marginTop: 25,
    },

    text:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 15,
    },
});


Lista.PropTypes=propTypes;
export default Lista;