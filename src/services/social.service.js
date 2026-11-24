import API from "./api";

// Direct Axios call with no caching - runs fresh on every page refresh
export const getSocialMediaContent = async () => {
  const res = await API.get("/social_media_content.php");
  return res.data;
};
