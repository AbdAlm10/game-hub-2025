import axios, { AxiosRequestConfig } from "axios";

export interface FetchingResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8ed7838a1ca64dfd86390f3ad841b21a",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchingResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
