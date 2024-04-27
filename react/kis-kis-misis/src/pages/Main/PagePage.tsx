import React from "react";
import { Helmet } from "react-helmet";
import Columnview from "../../components/Columnview";
import Header from "../../components/Header";
import {
  Text,
  Box,
  Flex,
  SimpleGrid,
  Button,
  Input,
  Heading,
  Container,
} from "@chakra-ui/react";
import { data } from ".";

export default function PagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      {/* main layout section */}
      <Flex
        pb={{ md: "1376px", base: "20px" }}
        gap={{ md: "113px", base: "56px", sm: "84px" }}
        bg="white.A700_01"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* header section */}
        <Header
          display="flex"
          bgGradient="linear-gradient(90deg, #a3a5d5,#b2a6ce,#d3b7b7,#d1c9a8,#a5d9ca,#a6a6d4)"
          alignSelf="stretch"
          justifyContent="space-between"
          alignItems="start"
          gap="20px"
          p={{ base: "20px", sm: "22px" }}
          flexDirection={{ md: "row", base: "column" }}
        />

        {/* content section */}
        <Container
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxW="1690px"
          px="0px"
          mx="auto"
          p={{ md: "", base: "20px" }}
        >
          <Heading size="s" as="h1" fontSize="55px">
            Найди своего ментора
          </Heading>
          <Text
            size="s"
            color="gray.700_01"
            mt="93px"
            textAlign="center"
            fontSize="35px"
            w={{ md: "76%", base: "100%" }}
          >
            <>
              Начинать в одиночку всегда непросто. Первый хакатон,
              собеседование, стажировка — с этим тебе поможет совет опытного
              наставника. <br />
              <br />
              Здесь ты сможешь найти своего ментора — в прошлом такого же
              студента ИКН, но уже набравшегося опыта и готового поделиться им с
              тобой
              <br />
            </>
          </Text>
          <Button
            borderRadius="25px"
            color="teal.400"
            mt="38px"
            fontSize="36px"
            fontWeight={600}
            borderWidth="2px"
            borderStyle="solid"
            bg="white.A700"
            boxShadow="xs"
            flexDirection="row"
            h="60px"
            minW="250px"
            px={{ base: "20px", sm: "33px" }}
            sx={{
              "border-image":
                "linear-gradient(90deg, #a3a5d5,#b2a6ce,#d3b7b7,#d1c9a8,#a5d9ca,#a6a6d4) 1",
            }}
          >
            Хочу!
          </Button>
          <Heading mt="146px" fontSize="45px">
            Наши менторы
          </Heading>

          {/* mentor search section */}
          <Flex
            mt="66px"
            gap={{ md: "105px", base: "52px", sm: "78px" }}
            alignSelf="stretch"
            flexDirection="column"
          >
            <Box>
              <Flex gap="21px" flexDirection="column" alignItems="start">
                <Input
                  placeholder={`Стек, направление, компания...`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  color="gray.700"
                  fontFamily="Montserrat"
                  fontSize="24.5px"
                  borderColor="black.900"
                  borderWidth="1px"
                  bg="white.A700_01"
                  alignSelf="stretch"
                  h="76px"
                  px={{ base: "20px", sm: "35px" }}
                  borderRadius="9px"
                />
                <Flex
                  gap="10px"
                  w={{ md: "96%", base: "100%" }}
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flex={1}
                    flexDirection="row"
                    h="50px"
                    w="100%"
                    px={{ base: "20px", sm: "31px" }}
                    borderRadius="25px"
                    alignSelf="stretch"
                  >
                    Аналитика
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flex={1}
                    flexDirection="row"
                    h="50px"
                    w="100%"
                    px="13px"
                    borderRadius="25px"
                    alignSelf="stretch"
                  >
                    UI/UX Design
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="255px"
                    px="11px"
                    borderRadius="25px"
                  >
                    Data Science/ML
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="154px"
                    px="14px"
                    borderRadius="25px"
                  >
                    Frontend
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="79px"
                    px="16px"
                    borderRadius="25px"
                  >
                    QA
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flex={1}
                    flexDirection="row"
                    h="50px"
                    w="100%"
                    px="16px"
                    borderRadius="25px"
                    alignSelf="stretch"
                  >
                    Базы данных
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="152px"
                    px="16px"
                    borderRadius="25px"
                  >
                    Backend
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="130px"
                    px="15px"
                    borderRadius="25px"
                  >
                    Docker
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="blue.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="130px"
                    px="17px"
                    borderRadius="25px"
                  >
                    Mobile
                  </Button>
                </Flex>
                <Flex gap="11px">
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="red.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="262px"
                    px="11px"
                    borderRadius="25px"
                  >
                    Трудоустройство
                  </Button>
                  <Button
                    color="black.900"
                    fontSize="28px"
                    borderColor="red.300"
                    borderWidth="2px"
                    borderStyle="solid"
                    bg="white.A700_01"
                    flexDirection="row"
                    h="50px"
                    minW="165px"
                    px="16px"
                    borderRadius="25px"
                  >
                    Хакатоны
                  </Button>
                </Flex>
              </Flex>
            </Box>

            {/* mentor profiles section */}
            <SimpleGrid
              gap="55px"
              columns={{ md: 5, base: 1, sm: 3 }}
              justifyContent="center"
            >
              {data.map((d, index) => (
                <Columnview
                  {...d}
                  key={"Data1" + index}
                  w="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                />
              ))}
            </SimpleGrid>
          </Flex>
          <Text
            mt="84px"
            ml={{ md: "514px", base: "0px" }}
            fontSize="30px"
            fontWeight={500}
            alignSelf="start"
          >
            Больше — в разделе Найти ментора
          </Text>
          <Box
            h="347px"
            mt="305px"
            ml={{ md: "8px", base: "0px" }}
            alignSelf="start"
            bg="blue_gray.100"
            w="41%"
            borderRadius="20px"
          />
          <Box
            h="347px"
            mt="59px"
            mr={{ md: "36px", base: "0px" }}
            alignSelf="end"
            bg="blue_gray.100"
            w="41%"
            borderRadius="20px"
          />

          {/* mentor resources section */}
          <Flex
            mt="62px"
            gap="49px"
            w={{ md: "96%", base: "100%" }}
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="30px">Материалы от менторов</Text>
            <Flex
              gap="66px"
              alignSelf="stretch"
              flexDirection={{ md: "row", base: "column" }}
            >
              {[...Array(3)].map((d, index) => (
                <Flex
                  key={"Data2" + index}
                  gap="43px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    h="347px"
                    bg="blue_gray.100"
                    alignSelf="stretch"
                    borderRadius="20px"
                  />
                  <Text fontSize="30px">Материалы от менторов</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
