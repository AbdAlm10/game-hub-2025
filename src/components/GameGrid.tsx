import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GaemCardSkeleton from "./GaemCardSkeleton";
import GameCardContauner from "./GameCardContauner";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContauner>
              <GaemCardSkeleton key={skeletons} />
            </GameCardContauner>
          ))}
        {data.map((game) => (
          <GameCardContauner>
            <GameCard key={game.id} game={game} />
          </GameCardContauner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
