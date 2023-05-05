import axiosClient from "./axiosClient";

const valorantAPI = {
  getAgentsList: () => {
    const url = "agents/";
    return axiosClient.get(url);
  },
  getAgentDetails: (id) => {
    const url = "agents/" + id;
    return axiosClient.get(url);
  },
};

export default valorantAPI;
