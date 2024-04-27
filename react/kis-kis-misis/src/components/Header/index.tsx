// import React from "react";
// import { ChakraProps } from "@chakra-ui/react";
// import { Box, Link, Text, UnorderedList, ListItem, Flex, Image } from "@chakra-ui/react";

// interface Props extends ChakraProps {
//   className?: string;
// }

// export default function Header({ ...props }: Props) {
//   return (
//     <Box {...props} as="header">
//       <Image src="images/img_.svg" h="44px" mb="11px" ml={{ md: "97px", base: "0px" }} w={{ md: "6%", base: "100%" }} />
//       <Flex
//         mb="5px"
//         mr={{ md: "96px", base: "0px" }}
//         w={{ md: "47%", base: "100%" }}
//         justifyContent="space-between"
//         alignItems="center"
//         gap="20px"
//         flexDirection={{ md: "row", base: "column" }}
//       >
//         <UnorderedList styleType="none" gap="44px" display="flex" flexWrap="wrap">
//           <ListItem>
//             <Link href="/">
//               <Text fontSize="30px">Главная</Text>
//             </Link>
//           </ListItem>
//           <ListItem>
//             <Link href="#">
//               <Text fontSize="30px">Найти ментора</Text>
//             </Link>
//           </ListItem>
//           <ListItem>
//             <Link href="/Mentor">
//               <Text fontSize="30px">Стать ментором</Text>
//             </Link>
//           </ListItem>
//         </UnorderedList>
//         <Box h="40px" bg="blue_gray.100" w="9%" borderRadius="35px" />
//       </Flex>
//     </Box>
//   );
// }


import React from "react";
import { ChakraProps } from "@chakra-ui/react";
import { Link, Image, Text, UnorderedList, ListItem, Flex, Container, Box } from "@chakra-ui/react";

interface Props extends ChakraProps {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <Box {...props} as="header">
      <Container
        mt="10px"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        maxW="1629px"
        gap="20px"
        px="0px"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
      >
        <Image src="images/img_header_logo.svg" h="44px" w="96px" />
        <Flex gap="48px" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
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
              <Link href="Mentor">
                <Text fontSize="30px">Стать ментором</Text>
              </Link>
            </ListItem>
          </UnorderedList>
          <Link href="Input">
            <Image src="images/img_icon_user.svg" h="33px" alignSelf="start" w={{ md: "auto", base: "100%" }} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
