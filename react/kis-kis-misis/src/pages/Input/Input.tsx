import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
// import { Text, Button, Flex, Input, Container } from "@chakra-ui/react";
import { Link, Input, Text, UnorderedList, ListItem, Flex, Container, Button } from "@chakra-ui/react";

export default function Page1Page() {
  return (
    <>
      <Helmet>
        <title>Input</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        pb={{ md: "auto", base: "20px" }}
        gap={{ md: "181px", base: "90px", sm: "135px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* navigation bar section */}
        <Header
          display="flex"
          bgGradient="linear-gradient(90deg, #a3a5d5,#b2a6ce,#d3b7b7,#d1c9a8,#a5d9ca,#a6a6d4)"
          alignSelf="stretch"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          p={{ base: "20px", sm: "30px" }}
        />

        {/* login form section */}
        <Container
          gap={{ md: "9px", base: "47px", sm: "70px" }}
          display="flex"
          w="100%"
          flexDirection="column"
          maxW="1000px"
          px="0px"
          mx="auto"
          p={{ md: "", base: "20px" }}
        >
          <Flex pl="50px" pr="56px" flexDirection="column" alignItems="start" px={{ md: "", base: "43%" }}>
            <Text size="xl" fontSize="50px">
              Вход
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Input placeholder={`Логин`} px={{ base: "20px", sm: "" }} borderColor="#000000" minH="50px" />
            <Input placeholder={`Пароль`} mt="30px" px={{ base: "20px", sm: "" }} borderColor="#000000" minHeight="50"/>
            <Flex mt="40px" gap="20px" flexDirection="column" alignItems="start">
              <Button
                color="#000000"
                size="xl"
                colorScheme="purple_100"
                fontFamily="Montserrat"
                borderColor="#ECCBEF"
                borderWidth="3px"
                minW="130px"
                minH="40px"
                fontSize="20px"
                borderRadius="8px"
                px={{ base: "20px", sm: "" }}
              >
                Войти
              </Button>
              <Button
              color="#000000"
              size="xl"
              colorScheme="purple_100"
              fontFamily="Montserrat"
              borderColor="#ECCBEF"
              borderWidth="3px"
              minW="100px"
              minH="20px"
              fontSize="20px"
              borderRadius="8px"
              px={{ base: "20px", sm: "" }}
              >
                <Link href="Registration">Зарегистрироваться</Link>
              </Button>
              <Text size="md" color="indigo.900" fontFamily="Montserrat" fontSize="20px">
                Забыли пароль?
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
