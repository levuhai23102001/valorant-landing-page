import axios from "axios";
import apiConfigs from "./apiConfigs";

const axiosClient = axios.create({
  baseURL: apiConfigs.baseUrl,
  headers: {
    Accept: "application/json",
  },
});

// axiosClient.interceptors.request(async (config) => config);

// axiosClient.interceptors.response(
//   async (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// );

export default axiosClient;
