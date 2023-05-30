import React, {useEffect,useState} from "react";
import { ActivityIndicator, View, StyleSheet, Dimensions, ScrollView, Slider } from "react-native";
import {getPeliPopulars, getProxPeli, getProPopulars, getFamPopulars, getDocPeli} from '../servicios/servicio'
import { SliderBox } from "react-native-image-slider-box";
import react from "react";
import Lista from '../componentes/Lista';
import Error from '../componentes/Error';

const dimensiones = Dimensions.get ('screen')

const Inicio = ({navigation}) =>{
    /* Estos son los hooks para las diferentes categorias */
    const [Imagenes_Peliculas, setimagenes_peliculas] = useState();
    const [Peliculas_Populares, setpeliculas_populares] = useState();
    const [Tv_Popular, settv_popular] = useState();
    const [Peliculas_Familiares, setpeliculas_familiares] = useState();
    const [Peliculas_Documentales, setpeliculas_documentales] = useState();

    /* Estos son los hooks para los estados de carga y errores */
    const [Error, seterror] = useState(false);
    const [Loaded, setloaded] = useState(false);
    
    const getData= ()=>{
        return Promise.all([
            geteliPopulars(),
            getProxPeli(), 
            getProPopulars(),
            getFamPopulars(), 
            getDocPeli(),
        ])
    }

    useEffect(() =>{
        getData()
        .then(
            ([
                PeliPopularsData,
                ProxPeliData, 
                ProPopularsData,
                FamPopularsData, 
                DocPeliData,

            ]) => {
                const Imagenes_PeliculasArray = []
                ProxPeliData.forEach(movie =>{
                    Imagenes_PeliculasArray.push(
                    'https://image.tmdb.org/t/p/w500'+movie.poster_path,
                    )
                })

                /*Aqui se modificaran los estados de las categorias */
                setimagenes_peliculas(Imagenes_PeliculasArray);
                setpeliculas_populares(PeliPopularsData);
                settv_popular(ProPopularsData);
                setpeliculas_familiares(FamPopularsData);
                setpeliculas_documentales(DocPeliData);
            }
        )
        .catch(()=>{
            seterror(true)
        })
        .finally(()=>{
            setloaded(true)

        })
    },[])

    return(
        <react.Fragment>
            {/* PROXIMAS PELICULAS */}
            {Loaded && !Error && (
                <ScrollView>
                    {Imagenes_Peliculas &&(
                        <View style = {styles.sliderContainer}>
                            <SliderBox
                                images={Imagenes_Peliculas}
                                dotStyle={styles.sliderStyle}
                                SliderBoxHeight={dimensiones.height /1.5}
                                autoplay={true}
                                circleLoop={true}
                            />
                            </View>
                    )}

                    {/* PELICULAS POPULARES */}
                    {Peliculas_Populares && (
                        <View style={styles.carousel}>
                            <Lista
                                navigation={navigation}
                                title={"PELICULAS POPULARES ENTRE EL PUBLICO"}
                                content={Peliculas_Populares}
                        />      
                        </View>
                    )}

                    {/* PROGRAMAS POPULARES DE TELEVISIÓN */}
                    {Tv_Popular && (
                        <View style={styles.carousel}>
                            <Lista 
                                navigation={navigation}
                                title={"PROGRAMAS POPULARES DE TELEVISIÓN"}
                                content={Tv_Popular}
                        />      
                        </View>
                    )}

                    {/* PELICULAS FAMILIARES*/}
                    {Peliculas_Familiares && (
                        <View style={styles.carousel}>
                            <Lista
                                navigation={navigation}
                                title={"PELICULAS FAMILIARES"}
                                content={Peliculas_Familiares}
                        />      
                        </View>
                    )}

                    {/* PELICULAS DOCUMENTALES */}
                    {Peliculas_Documentales && (
                        <View style={styles.carousel}>
                            <Lista
                                navigation={navigation}
                                title={"DOCUMENTALES"}
                                content={Peliculas_Documentales}
                        />      
                        </View>
                    )}
                </ScrollView>

            )}
            {!Loaded && <ActivityIndicator size='large'/>}
            {Error &&<Error/>}
        </react.Fragment>


    )

}




const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },

    sliderStyle:{
        height: 0,
    },

    carousel:{
        flex: 1,
        justifyContent:'center',
        alighItems: 'center',
    }
});
export default Inicio