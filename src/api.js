import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID jTqJrmqSGfR7G34drptLndy0nXKzZ4P1YB6g7znA_tE"
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default searchImages;
