import axios from "axios";

 //Apikey y Url del sitio el cual se va consumir los servicios
 const apiUrl = 'https://api.themoviedb.org/3';
 const apikey = 'api_key=46d9f44bb41a5340ed72c97c55581681';

 // Con estos metodos GET se podran consumir cada una de las categorias
 // de la api themoviedb.

 //Obtener Categoria Peliculas Populares/GET
  export const getPeliPopulars = async () =>{
    const respuesta = await axios.get(`${apiUrl}/movie/popular?${apikey}`);
    return respuesta.data.results;
  };

//Obtener  Categoria Proximas Peliculas/GET
  export const getProxPeli = async () =>{
    const respuesta = await axios.get(`${apiUrl}/movie/upcoming?${apikey}`);
    return respuesta.data.results;
  };

//Obtener Categoria Programas Populares De Televisión/GET
  export const getProPopulars = async () =>{
    const respuesta = await axios.get(`${apiUrl}/tv/popular?${apikey}`);
    return respuesta.data.results;
  };

//Obtener Categoria Peliculas Familiar  En Peliculas/GET
export const getFamPopulars = async () =>{
    const respuesta = await axios.get(`${apiUrl}/discover/movie?${apikey}&with_genres=10751`,);
    return respuesta.data.results;
  };

//Obtener Categoria Documentales En Peliculas/GET
export const getDocPeli = async () =>{
    const respuesta = await axios.get(`${apiUrl}/discover/movie?${apikey}&with_genres=99`,);
    return respuesta.data.results;
  };

//Renderización de otras funciones

//Obtención De Peliculas Por ID
export const getPeli = async id =>{
    const respuesta = await axios.get(`${apiUrl}/movie/${id}?${apikey}`);
    return respuesta.data.results;
  };

//Buscador de contenido por medio de caracter (letra o palabra)

export const BusPeliTv = async (query, type) =>{
    const respuesta = await axios.get(`${apiUrl}/search/${type}?${apikey}&query=${query}`);
    return respuesta.data.results;
  };
