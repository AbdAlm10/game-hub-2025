import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GaemCardSkeleton = () => {
  return (
    <Card>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GaemCardSkeleton;
