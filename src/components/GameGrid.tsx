import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
    gameQuery: GameQuery;
}

const skeletons = Array.from({ length: 12 }, (_, i) => i + 1);

function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading } = useGames(gameQuery);

    if (error) return <p>{error}</p>;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} p={5}>
            {isLoading &&
                skeletons.map((skeleton) => <Skeletons key={skeleton} />)}

            {data.map((game) => (
                <GameCard game={game} key={game.id} />
            ))}
        </SimpleGrid>
    );
}

export default GameGrid;
