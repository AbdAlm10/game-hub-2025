import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CirticScore from "./CirticScore";
import DefnitionItem from "./DefnitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefnitionItem title={"Platforms"}>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefnitionItem>

      <DefnitionItem title="Metascore">
        <CirticScore score={game.metacritic} />
      </DefnitionItem>

      <DefnitionItem title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefnitionItem>

      <DefnitionItem title="Publisher">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefnitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
