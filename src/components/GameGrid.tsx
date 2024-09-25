import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContauner from "./GameCardContauner";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeletons) => (
          <GameCardContauner key={skeletons}>
            <GameCardSkeleton />
          </GameCardContauner>
        ))}
      {data.map((game) => (
        <GameCardContauner key={game.id}>
          <GameCard game={game} />
        </GameCardContauner>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
