import API from "./api";

export const getContactUs = async () => {
  const res = await API.get("/contact-us-details.php");
  return res.data;
};

export const submitContactUs = async (payload) => {
  const res = await API.post("/contact-submit.php", payload);
  return res.data;
};