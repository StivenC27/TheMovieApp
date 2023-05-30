import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Image, Dimensions, ActivityIndicator, Text, View, Modal, Pressable,} from 'react-native';
import PlayButton from '../componentes/PlayButton';
import StarRating from 'react-native-star-rating';
import { getPeli } from '../servicios/servicio';
import dateFormat from 'dateformat';

// Aqui se van a consumir los detalles de la pelicula mediante el UseState
const placeholderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;
const Detalles = ({route, navigation}) =>{
    const movieId = route.params.movieId;
    const [peliculaDetalle, setPeliculaDetalle] = useState();
    const [loaded, setLoaded] = useState(false);
    const [visiblemodal, setVisibleModal] = useState(false);

    useEffect(() => {
        getPeli(movieId).then(movieData =>{
            setPeliculaDetalle(movieData);
            setLoaded(true);
        });
    }, [movieId]);

    // shownvideo para mostrar el modal

    const Shownvideo = () => {
        setVisibleModal(!modalvisible);
    };
    
// Para detener el modal

    const Stopvideo = () => {
        setVisibleModal(!modalvisible);
    };
    

    //Aqui se retornara la ruta que se esta consumiendo del api themovie.
    return (
        <React.Fragment>
            {loaded && (
                <View>
                    <ScrollView>
                        <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={peliculaDetalle.poster_path 
                          ? {
                                uri:'https://image.tmdb.org/t/p/w500' + peliculaDetalle.poster_path,
                            }
                           : placeholderImage
                        }
                    />   
                    <View style = {styles.container}>
                    <View style = {styles.PlayButton}>
                        <PlayButton handlePress={Shownvideo}/>
                    </View>    
                    <Text style = {styles.movieTitle}>{peliculaDetalle.title}</Text>
                    {peliculaDetalle.genres &&(
                        <View style = {styles.genresContainer}>
                            {peliculaDetalle.genres.map(genre =>{
                                return(
                                    <Text style = {styles.genre} key={genre.id}>
                                        {genre.name}
                                    </Text>    
                                );
                            })}
                    </View>
                                )}
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    starSize={30}
                                    rating={peliculaDetalle.vote_average / 2}
                                    fullStarColor={'gold'}
                                />
                                <Text style={styles.overview}>{peliculaDetalle.overview}</Text>

                                <Text style={styles.release}>
                                    {'Release date: ' +
                                    dateFormat(peliculaDetalle.release_date, 'mmmm dS, yyyy')}
                                </Text>
                                </View>
                            </ScrollView>
                            <Modal
                                supportedOrientations={['portrait', 'landscape']}
                                animationType="slide"
                                visible={visiblemodal}>
                                <View style={styles.videoModal}>
                                
                                {/* <VideoD onClose={videoShown} /> */}
                                {/* <VideoPlayer
                                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}/> */}

                                <Pressable>
                                <Text> Debería Ser Un Modal Con El Reproductor Si Hubiese Acceso Al Video</Text>
                                <ButtonStop handlePress={Stopvideo} />
                                </Pressable>
                                
                                </View>
                            </Modal>
                            </View>
                        )}
                        {!loaded && <ActivityIndicator size="large" />}
                        </React.Fragment>
                    );
                    };

                    const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    image: {
                        height: height / 2.5,
                    },
                    movieTitle: {
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 10,
                    },
                    genresContainer: {
                        flexDirection: 'row',
                        alignContent: 'center',
                        marginTop: 20,
                        marginBottom: 20,
                    },
                    genre: {
                        marginRight: 10,
                        fontWeight: 'bold',
                    },
                    overview: {
                        padding: 15,
                    },
                    release: {
                        fontWeight: 'bold',
                    },
                    PlayButton: {
                        position: 'absolute',
                        top: -25,
                        right: 20,
                    },
                    videoModal: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    });

                    export default Detalles;

                                    


                    