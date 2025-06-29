import axios from "axios";
const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    // part: "snippet",
    // q: "music", // yoki siz qidirayotgan kalit so'z
    maxResults: "50",
    type: "video", // faqat video natijalar
  },
  headers: {
    // "x-rapidapi-key": "24622a75c0mshccfc8af04de72dfp1b4b21jsn20467146d0cf",
    "x-rapidapi-key": "d58915f8d5mshd76afd63c662f2bp117063jsnd963bb61e30a",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// async awit
export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options);
    return response.data;
  },
};
