import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CirticScore from "./CirticScore";
import Emojes from "./Emojes";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack mb={3} justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms?.map((p) => p.platform)}
          />
          <CirticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}> {game.name}</Link>

          <Emojes rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
