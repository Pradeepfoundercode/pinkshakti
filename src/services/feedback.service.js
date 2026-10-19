import API from "./api";

export const submitFeedback = async (payload) => {
  const res = await API.post("/feedback_store.php", payload);
  return res.data;
};
