import React from "react";
import { ChakraProps } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

interface Props extends ChakraProps {
  className?: string;
  dynamicproperty2?: string;
  dynamicproperty3?: string;
}

export default function Columnview({
  dynamicproperty2 = "Имя Фамилия ",
  dynamicproperty3 = "Js, CSS, HTML",
  ...props
}: Props) {
  return (
    <Box {...props}>
      <Box h="292px" bg="blue_gray.100" alignSelf="stretch" borderRadius="18px" />
      <Text mt="53px" fontSize="30px">
        {dynamicproperty2}
      </Text>
      <Text mt="21px" fontSize="30px">
        {dynamicproperty3}
      </Text>
    </Box>
  );
}
