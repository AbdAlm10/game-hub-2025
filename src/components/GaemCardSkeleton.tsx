import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GaemCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton w="300px" h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GaemCardSkeleton;
