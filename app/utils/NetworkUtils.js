import axios from 'axios';

const baseURL = 'https://api.jikan.moe/v3'

class NetworkUtils {
  static axiosInstance = axios.create({
    baseURL: `${baseURL}`,
  });
}

export default NetworkUtils;