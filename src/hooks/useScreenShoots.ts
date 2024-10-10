import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/Screenshot";

const useScreenShoots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenShoots;
