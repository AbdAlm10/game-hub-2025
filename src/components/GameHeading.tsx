import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const pageHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;

  return (
    <Heading fontSize="5xl" my={5} as="h1">
      {pageHeading}
    </Heading>
  );
};

export default GameHeading;
