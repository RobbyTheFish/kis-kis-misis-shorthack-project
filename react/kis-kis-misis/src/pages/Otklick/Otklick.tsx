import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Box, Text, Flex, Heading, Image, Button, Container } from "@chakra-ui/react";

export default function PagePage() {
  return (
    <>
      <Helmet>
        <h1>Otklick</h1>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* responses section */}
      <Flex
        pb={{ md: "2049px", base: "20px" }}
        gap={{ md: "118px", base: "59px", sm: "88px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* header navigation section */}
        <Header
          display="flex"
          bgGradient="linear-gradient(90deg, #a3a5d5,#b2a6ce,#d3b7b7,#d1c9a8,#a5d9ca,#a6a6d4)"
          alignSelf="stretch"
          justifyContent="center"
          alignItems="end"
          p={{ base: "20px", sm: "30px" }}
        />

        {/* responses overview section */}
        <Container w="100%" maxW="1648px" px="0px" mx="auto" p={{ md: "", base: "20px" }}>
          {/* active responses section */}
          <Flex flexDirection="column" alignItems="start">
            <Text fontSize="30px" fontWeight={500}>
              Отклики
            </Text>
            <Box h="4px" mt="45px" bg="blue_gray.100_01" alignSelf="stretch" w="100%" />
            <Flex
              mt="16px"
              ml={{ md: "14px", base: "0px" }}
              w={{ md: "88%", base: "100%" }}
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex
                w={{ md: "40%", base: "100%" }}
                justifyContent="space-between"
                alignItems="start"
                gap="20px"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Box h="100px" bg="blue_gray.100" w="19%" borderRadius="50px" />
                <Flex mt="7px" gap="8px" flexDirection="column" alignItems="start">
                  <Heading as="h1" fontSize="35px">
                    Даниил Сергеев
                  </Heading>
                  <Text fontSize="30px" fontWeight={500}>
                    <Text as="span" color="black.900_01">
                      Запрос:&nbsp;
                    </Text>
                    <Text as="span" color="black.900_01" fontWeight={400}>
                      есть вопрос по HTML
                    </Text>
                  </Text>
                </Flex>
              </Flex>
              <Button
                borderColor="blue.300"
                color="#000000"
                borderWidth="2px"
                minW="187px"
                borderRadius="25px"
                px={{ base: "20px", sm: "" }}
              >
                К анкете
              </Button>
            </Flex>
            <Box mt="22px" alignSelf="stretch">
              <Flex gap="19px" flexDirection="column">
                <Box h="4px" bg="blue_gray.100_01" />
                <Flex
                  gap="39px"
                  w={{ md: "96%", base: "100%" }}
                  alignItems="start"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Box h="100px" bg="blue_gray.100" w="7%" borderRadius="50px" />
                  <Box flex={1} alignSelf="stretch">
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Flex gap="14px" flexDirection="column" alignItems="start">
                        <Heading fontSize="35px">Даниил Сергеев</Heading>
                        <Text fontSize="30px" fontWeight={500}>
                          <Text as="span" color="black.900_01">
                            Запрос:&nbsp;
                          </Text>
                          <Text as="span" color="black.900_01" fontWeight={400}>
                            хочу научиться писать на React, опыта пока не...
                          </Text>
                        </Text>
                      </Flex>
                      <Flex mb="10px" alignSelf="end" alignItems="start">
                        <Button
                          borderColor="blue.300"
                          borderWidth="2px"
                          color="#000000"
                          minW="187px"
                          borderRadius="25px"
                          px={{ base: "20px", sm: "" }}
                        >
                          К анкете
                        </Button>
                        <Image src="images/img_checkmark.svg" h="31px" mt="7px" ml="48px" />
                        <Image src="images/img_close.svg" h="31px" mt="7px" ml="17px" w="31px" />
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
                <Box h="4px" bg="blue_gray.100_01" />
              </Flex>
            </Box>
            <Flex mt="10px" ml={{ md: "14px", base: "0px" }} w={{ md: "97%", base: "100%" }}>
              <Flex
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  w={{ md: "62%", base: "100%" }}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Box h="100px" bg="blue_gray.100" w="11%" borderRadius="50px" />
                  <Flex gap="16px" flexDirection="column" alignItems="start">
                    <Heading as="h3" fontSize="35px">
                      Даниил Сергеев
                    </Heading>
                    <Text fontSize="30px" fontWeight={500}>
                      <Text as="span" color="black.900_01">
                        Запрос:&nbsp;
                      </Text>
                      <Text as="span" color="black.900_01" fontWeight={400}>
                        хочу научиться писать на React, опыта пока не...
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
                <Flex mb="16px" alignSelf="end" alignItems="start">
                  <Button
                    borderColor="blue.300"
                    borderWidth="2px"
                    color="#000000"
                    backdropBlur="FFFFFF"
                    minW="187px"
                    borderRadius="25px"
                    px={{ base: "20px", sm: "" }}
                  >
                    К анкете
                  </Button>
                  <Image src="images/img_checkmark.svg" h="31px" mt="7px" ml="48px" />
                  <Image src="images/img_close.svg" h="31px" mt="7px" ml="17px" w="31px" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Box h="4px" mt="28px" bg="blue_gray.100_01" />

          {/* completed responses section */}
          <Flex mt="143px" flexDirection="column" alignItems="start">
            <Text fontSize="30px" fontWeight={500}>
              Завершенные
            </Text>
            <Box h="4px" mt="49px" bg="blue_gray.100_01" alignSelf="stretch" w="100%" />
            <Flex
              mt="16px"
              ml={{ md: "14px", base: "0px" }}
              gap="39px"
              w={{ md: "98%", base: "100%" }}
              alignItems="start"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box h="100px" bg="blue_gray.100" w="6%" borderRadius="50px" />
              <Box mt="7px" flex={1} alignSelf="stretch">
                <Flex flexDirection="column" alignItems="start">
                  <Heading fontSize="35px">Даниил Сергеев</Heading>
                  <Flex
                    mt="-4px"
                    position="relative"
                    alignSelf="stretch"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text mt="13px" fontSize="30px" fontWeight={500}>
                      <Text as="span" color="black.900_01">
                        Запрос:&nbsp;
                      </Text>
                      <Text as="span" color="black.900_01" fontWeight={400}>
                        есть вопрос по HTML
                      </Text>
                    </Text>
                    <Text size="xs" color="gray.500" fontSize="28px">
                      Принято
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Box h="4px" mt="22px" bg="blue_gray.100_01" alignSelf="stretch" w="100%" />
            <Flex
              mt="19px"
              ml={{ md: "14px", base: "0px" }}
              gap="39px"
              w={{ md: "98%", base: "100%" }}
              alignItems="start"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box h="100px" bg="blue_gray.100" w="6%" borderRadius="50px" />
              <Flex flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                <Heading as="h3" fontSize="35px">
                  Даниил Сергеев
                </Heading>
                <Flex
                  mt="-2px"
                  position="relative"
                  alignSelf="stretch"
                  justifyContent="space-between"
                  alignItems="start"
                  flexWrap="wrap"
                  gap="20px"
                >
                  <Text mt="17px" fontSize="30px" fontWeight={500}>
                    <Text as="span" color="black.900_01">
                      Запрос:&nbsp;
                    </Text>
                    <Text as="span" color="black.900_01" fontWeight={400}>
                      хочу научиться писать на React, опыта пока не...
                    </Text>
                  </Text>
                  <Text size="xs" color="gray.500" fontSize="28px">
                    Отклонено
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Box h="4px" mt="19px" bg="blue_gray.100_01" alignSelf="stretch" w="100%" />
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
