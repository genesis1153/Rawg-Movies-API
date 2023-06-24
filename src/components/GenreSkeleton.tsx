import {
    HStack,
    ListItem,
    Skeleton,
    SkeletonText,
    Text,
} from "@chakra-ui/react";

function GenreSkeleton() {
    return (
        // <List>
        <ListItem paddingY={1}>
            <HStack>
                <Skeleton width="32px" height="32px" borderRadius="6px" />
                <Text>
                    <SkeletonText />
                </Text>
            </HStack>
        </ListItem>
        // </List>
    );
}

export default GenreSkeleton;
