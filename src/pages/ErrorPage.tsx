import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse;

  return (
    <>
      <Navbar />
      <Box p={5}>
        <Heading>OOps!</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpect error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
