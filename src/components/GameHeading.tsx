import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    return (
        <Heading as="h1" marginLeft={5} marginTop={7}>
            {`${gameQuery.platform?.name || ""} ${
                gameQuery.genre?.name || ""
            } Games`}
        </Heading>
    );
};

export default GameHeading;
