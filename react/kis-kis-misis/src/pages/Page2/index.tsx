import React from "react";
import { Helmet } from "react-helmet";
import { Box, Flex, Text, Heading, Image, Container } from "@chakra-ui/react";

export default function Page2Page() {
  return (
    <>
      <Helmet>
        <title>Lesson 1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* goal overview section */}
      <Flex
        borderColor="blue.300_01"
        borderWidth="8px"
        borderStyle="solid"
        bg="white.A700"
        w="100%"
        justifyContent="center"
        py={{ md: "54px", base: "20px" }}
      >
        {/* card section */}
        <Container mt="7px" mb="46px" display="flex" flexDirection="column" px="0px" p={{ md: "", base: "20px" }}>
          {/* card header section */}
          <Flex
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Heading size="md" as="h1" fontSize="90px">
              Ваша карточка цели
            </Heading>
            <Image src="images/img_close.svg" h="51px" mt="20px" w={{ md: "52px", base: "100%" }} />
          </Flex>

          {/* card image section */}
          <Box mt="44px" borderColor="indigo.300" borderWidth="8px" borderStyle="solid" borderRadius="28px">
            <Image src="images/img_image_208.png" h={{ md: "626px", base: "auto" }} w="100%" borderRadius="28px" />
          </Box>

          {/* goal description section */}
          <Flex mt="30px" gap="26px" flexDirection="column" alignItems="start">
            <Flex gap="24px" flexWrap="wrap">
              <Text size="undefined" />
              <Text size="undefined" />
            </Flex>
            <Heading fontSize="70px">
              <Heading as="span" color="black.900">
                Моя цель:&nbsp;
              </Heading>
              <Heading as="span" color="black.900" fontWeight={400}>
                <>
                  к июлю 2024 года собрать <br />
                  компанию для поездки на Горный Алтай &nbsp;
                </>
              </Heading>
            </Heading>
          </Flex>

          {/* progress section */}
          <Box mt="92px">
            <Flex gap="14px" flexDirection="column">
              <Flex justifyContent="space-between" alignItems="start" flexWrap="wrap" gap="20px">
                <Heading mt="6px" fontSize="70px">
                  Прогресс
                </Heading>
                <Text size="s" color="gray.700" fontFamily="Montserrat" fontSize="70px">
                  75%
                </Text>
              </Flex>
              <Flex borderColor="blue.300_01" borderWidth="8px" borderStyle="solid" bg="white.A700" borderRadius="27px">
                <Box
                  h="54px"
                  borderColor="blue.300_01"
                  borderWidth="8px"
                  borderStyle="solid"
                  bg="blue.300_01"
                  w="70%"
                  borderRadius="27px"
                />
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
}
