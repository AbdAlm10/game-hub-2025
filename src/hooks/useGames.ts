import { useQuery } from "react-query";
import { GameQuery } from "../App";
import { FetchingResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchingResponse<Game>, Error>({
    queryKey: ["game", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchingResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
