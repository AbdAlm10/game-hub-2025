import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const pageHeading = `${platform?.name || ""} ${genre?.name || ""} Game`;

  return (
    <Heading fontSize="5xl" my={5} as="h1">
      {pageHeading}
    </Heading>
  );
};

export default GameHeading;
