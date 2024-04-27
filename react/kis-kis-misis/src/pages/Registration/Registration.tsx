import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Box, Flex, Button, Text, Switch, Input } from "@chakra-ui/react";

export default function Page2Page() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <Flex
        pb={{ md: "auto", base: "20px" }}
        gap={{ md: "181px", base: "90px", sm: "135px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
        // justifyContent="center"
      >
        <Flex
          pb={{ md: "562px", base: "20px" }}
          gap={{ md: "162px", base: "81px", sm: "121px" }}
          bg="white.A700"
          w={{ md: "81%", base: "100%" }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={{ md: "", base: "20px" }}
        >
          {/* header section */}
          <Header
            display="flex"
            bgGradient="linear-gradient(90deg, #a3a5d5,#b2a6ce,#d3b7b7,#d1c9a8,#a5d9ca,#a6a6d4)"
            alignSelf="stretch"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            p={{ base: "20px", sm: "30px" }}
          />
          <Flex
            pl="50px" pr="56px"  px={{ md: "", base: "80%" }}
            gap={{ md: "154px", base: "77px", sm: "115px" }}
            w={{ md: "81%", base: "100%" }}
            flexDirection="column"
            alignItems="center"
          >
            {/* registration section */}
            <Flex
              gap={{ md: "86px", base: "43px", sm: "64px" }}
              alignSelf="stretch"
              flexDirection="column"
              alignItems="center"
            >
              <Text size="xl" fontSize="50px">
                Регистрация
              </Text>
              <Flex flexDirection="column">
                <Input placeholder={`Имя`} px={{ base: "20px", sm: "" }} borderColor="#000000" fontSize="20px" minW="1000px"/>
                <Input placeholder={`Фамилия`} mt="30px" px={{ base: "20px", sm: "" }} borderColor="#000000"fontSize="20px"/>
                <Input placeholder={`Адрес электронной почты`} mt="30px" px={{ base: "20px", sm: "" }} borderColor="#000000"fontSize="20px"/>
                <Input placeholder={`Придумайте пароль`} mt="30px" px={{ base: "20px", sm: "" }} borderColor="#000000"fontSize="20px"/>
                <Input placeholder={`Повторите пароль`} mt="30px" px={{ base: "20px", sm: "" }} borderColor="#000000"fontSize="20px"/>
              </Flex>
            </Flex>

            {/* role selection section */}
            <Flex
              w={{ md: "400px", base: "100%" }}
              justifyContent="space-between"
              alignItems="center"
              gap="15px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Text size="xl" fontSize="30px"fontFamily="Montserrat">
                Студент
              </Text>
              <Switch />
              <Text size="xl" mb="1px" fontFamily="Montserrat" fontSize="30px" alignSelf="end">
                Ментор
              </Text>
            </Flex>

            {/* registration button section */}
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
              Зарегистрироваться
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
