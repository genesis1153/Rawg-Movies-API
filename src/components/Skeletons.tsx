import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function Skeletons() {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Skeleton height="220px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default Skeletons;
