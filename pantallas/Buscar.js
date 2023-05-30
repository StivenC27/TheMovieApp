import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BusPeliTv } from '../servicios/servicio'; 
import Tarjet from '../componentes/Tarjet';
import Error from '../componentes/Error';

const Buscar = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [buscarresultados, setBuscarResultados] = useState();
  const [error, setError] = useState(false);

  const onSubmit = query => {
    Promise.all([BusPeliTv(query, 'movie'), BusPeliTv(query, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setBuscarResultados(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'BUSCA UNA PELICULA O SHOW DE TV'}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search-outline'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchItems}>
          {/* Para el resultado de la búsqueda */}
          {buscarresultados && buscarresultados.length > 0 && (
            <FlatList
              numColumns={3}
              data={buscarresultados}
              renderItem={({item}) => (
                <Tarjet navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}

          {/* Esto es para Cuando no se encuentran resultados visibles */}
          {buscarresultados && buscarresultados.length == 0 && (
            <View style={styles.noResults}>
              <Text>NO ES POSIBLE ENCONTRAR ESTE RESULTADO POR ESTE CRITERIO</Text>
              <Text>DEBERIAS PROBAR CON OTRA PALABRA DIFERENTE.</Text>
            </View>
          )}

          {/* Cuando no se ha realizado una búsqueda */}
          {!buscarresultados && (
            <View style={styles.empty}>
              <Text>DEBES ESCRIBIR ALGO PARA INICIAR LA BUSQUEDA</Text>
            </View>
          )}

          {/* Error */}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    padding: 5,
  },

  noResults: {
    paddingTop: 20,
  },
});

export default Buscar;