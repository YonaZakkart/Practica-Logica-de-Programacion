
import axios from 'axios';

export const apiHttpClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})

