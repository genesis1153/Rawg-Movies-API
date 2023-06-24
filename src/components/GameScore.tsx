import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

function GameScore({ score }: Props) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

    return (
        <Badge fontSize="16px" colorScheme={color} px={2}>
            {score}
        </Badge>
    );
}

export default GameScore;
