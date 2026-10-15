import API from "./api";

export const getGalleryImage = async () => {
  const res = await API.get("/gallary_content.php");
  return res.data;
};