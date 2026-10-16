import API from "./api";

export const getSocialMediaContent = async () => {
  const res = await API.get("/social_media_content.php");
  return res.data;
};
