import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import GameScore from "./GameScore";
import cropImage from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={cropImage(game.background_image)} />
            <CardBody display="flex" flexDirection="column" gap="10px">
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between" alignItems="center">
                    <PlatformIcons
                        platforms={game.parent_platforms.map(
                            ({ platform }) => platform
                        )}
                    />
                    <GameScore score={game.metacritic} />
                </HStack>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    );
}

export default GameCard;
