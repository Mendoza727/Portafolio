import axios from "axios";

const requestPortafoly = axios.create({
    baseURL: "http://localhost:8080"
});

export default requestPortafoly;