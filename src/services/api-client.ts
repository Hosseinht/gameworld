import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f6e5413d9c249f9acbaf44ac5be152e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T[]>>(this.endpoint, config)
      .then((res) => res.data);
    // <T[]> generic type argument
  }
}

export default APIClient;
