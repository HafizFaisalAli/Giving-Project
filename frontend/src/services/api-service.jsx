import axios from "axios";

const Client = axios.create({
  baseURL: "/api",
});

export default Client;
