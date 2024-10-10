import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const DefnitionItem = ({ title, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dt" color="gray.600" fontWeight="bold" fontSize="md">
        {title}
      </Heading>
      <Text as="dd">{children}</Text>
    </Box>
  );
};

export default DefnitionItem;
