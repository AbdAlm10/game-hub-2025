import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import Genres from "../data/Genres";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: Genres.length, results: Genres },
  });

export default useGenres;
