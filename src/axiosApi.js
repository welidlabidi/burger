import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://mmm-lekker.firebaseio.com/",
});

export default axiosApi;
