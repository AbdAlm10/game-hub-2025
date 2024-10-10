import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? text : `${text.substring(0, limit)}...`;

  return (
    <>
      <Text>
        {summary}{" "}
        <Button
          ml={1}
          size="xs"
          fontWeight="bold"
          onClick={() => setExpanded(!expanded)}
          colorScheme="yellow"
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
