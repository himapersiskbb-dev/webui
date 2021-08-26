import axios from "axios";

const strapi = axios.create({
  baseURL: process.env.VUE_APP_MAIN_URL,
});

export default strapi;
