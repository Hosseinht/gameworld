import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f6e5413d9c249f9acbaf44ac5be152e",
  },
});
// const axiosInstance = axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "8f6e5413d9c249f9acbaf44ac5be152e",
//   },
// });
//
// class APIClient<T> {
//   endpoint: string;
//
//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//     // this is an instance of APIClient. it's like self in python
//   }
//
//   getAll() {
//     return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
//     // <T[]> generic type argument
//   }
//
//   post(data: T) {
//     return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
//   }
// }
//
// export default APIClient;
