import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: Genres } = useGenres();
  const genre = Genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: Platform } = usePlatforms();
  const platform = Platform?.results.find((p) => p.id === gameQuery.platformId);

  const pageHeading = `${platform?.name || ""} ${genre?.name || ""} Game`;

  return (
    <Heading fontSize="5xl" my={5} as="h1">
      {pageHeading}
    </Heading>
  );
};

export default GameHeading;
