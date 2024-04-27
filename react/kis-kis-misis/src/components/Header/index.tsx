import React from "react";
import { ChakraProps } from "@chakra-ui/react";
import { Box, Link, Text, UnorderedList, ListItem, Flex, Image } from "@chakra-ui/react";

interface Props extends ChakraProps {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <Box {...props} as="header">
      <Image src="images/img_.svg" h="44px" mb="11px" ml={{ md: "97px", base: "0px" }} w={{ md: "6%", base: "100%" }} />
      <Flex
        mb="5px"
        mr={{ md: "96px", base: "0px" }}
        w={{ md: "47%", base: "100%" }}
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        flexDirection={{ md: "row", base: "column" }}
      >
        <UnorderedList styleType="none" gap="44px" display="flex" flexWrap="wrap">
          <ListItem>
            <Link href="/">
              <Text fontSize="30px">Главная</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text fontSize="30px">Найти ментора</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/Mentor">
              <Text fontSize="30px">Стать ментором</Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Box h="70px" bg="blue_gray.100" w="9%" borderRadius="35px" />
      </Flex>
    </Box>
  );
}
