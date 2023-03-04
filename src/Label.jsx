import React from "react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
const Label = ({text}) => {
  return (
    <div>
      <HStack spacing={4}>
        {["sm", "md", "lg"].map((size) => (
          <Tag
            size={size}
            key={size}
            borderRadius="full"
            variant="solid"
            colorScheme="gray"
            opacity={0.4}
          >
            <TagLabel>{text}</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </HStack>
    </div>
  );
};

export default Label;
