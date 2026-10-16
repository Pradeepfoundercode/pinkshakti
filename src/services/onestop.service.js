import API from "./api";

export const getOneStopCenters = async () => {
  const res = await API.get("/one_stop_center.php");
  return res.data;
};