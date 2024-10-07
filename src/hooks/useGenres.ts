import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchingResponse } from "../services/api-client";
import Genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchingResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: Genres.length, results: Genres },
  });

export default useGenres;
