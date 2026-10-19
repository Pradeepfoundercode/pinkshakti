import API from "./api";

export const getDistricts = async () => {
  const res = await API.get("/getDistricts.php");
  return res.data;
};

export const getZipcodes = async (districtId) => {
  const res = await API.get(`/getZipcodes.php?district_id=${districtId}`);
  return res.data;
};

export const getPoliceStations = async (districtId) => {
  const res = await API.get(`/getPoliceStations.php?district_id=${districtId}`);
  return res.data;
};


export const getProblems = async () => {
  const res = await API.get("/getProblems.php");
  return res.data;
};

export const storeCityScan = async (payload) => {
  const res = await API.post("/store_city_scan.php", payload);
  return res.data;
};
