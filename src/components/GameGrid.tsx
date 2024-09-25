import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContauner from "./GameCardContauner";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selcetedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selcetedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selcetedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
    </>
  );
};

export default GameGrid;
