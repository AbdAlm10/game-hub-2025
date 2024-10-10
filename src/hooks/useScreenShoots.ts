import { useQuery } from "react-query";
import { Screenshot } from "../entities/screenshot";
import APIClient from "../services/api-client";

const useScreenShoots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenShoots;
