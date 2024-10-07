import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchingResponse } from "../services/api-client";
import platforms from "../data/platforms";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchingResponse<Platforms>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
// useData<Platforms>("/platforms/lists/parents");
