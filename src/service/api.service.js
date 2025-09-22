import axios from "axios";
const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // "x-rapidapi-key": "24622a75c0mshccfc8af04de72dfp1b4b21jsn20467146d0cf",
    // "x-rapidapi-key": "d58915f8d5mshd76afd63c662f2bp117063jsnd963bb61e30a",
    // "x-rapidapi-key": "2974865791mshb0991e9feef6a8cp1f4d3djsnffeb620410da",
    // "x-rapidapi-key": "e7688fe659msh335565d267fb4cdp19b5dfjsn4d869b500079",
    "x-rapidapi-key": "92d503a4dbmshb36628873cdc61dp119d60jsnb1f250bc95cf",
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
