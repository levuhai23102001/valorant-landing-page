import axiosClient from "./axiosClient";

export const categories = {
  sideArm: "EEquippableCategory::Sidearm",
  smg: "EEquippableCategory::SMG",
  shotgun: "EEquippableCategory::Shotgun",
  rifle: "EEquippableCategory::Rifle",
  sniper: "EEquippableCategory::Sniper",
  heavy: "EEquippableCategory::Heavy",
  melee: "EEquippableCategory::Melee",
};

const valorantAPI = {
  getAgentsList: () => {
    const url = "agents/";
    return axiosClient.get(url);
  },
  getAgentDetails: (id) => {
    const url = "agents/" + id;
    return axiosClient.get(url);
  },
  getWeaponsList: () => {
    const url = "weapons/";
    return axiosClient.get(url);
  },
  getPlayerCards: () => {
    const url = "playercards/";
    return axiosClient.get(url);
  },
};

export default valorantAPI;
