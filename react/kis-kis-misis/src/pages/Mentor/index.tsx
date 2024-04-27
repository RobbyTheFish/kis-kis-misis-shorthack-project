import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Box, Flex, Button, Image, Text, Heading, Container } from "@chakra-ui/react";

export default function Page1Page() {
  return (
    <>
      <Helmet>
        <title>Mentor</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        pb={{ md: "1848px", base: "20px" }}
        gap={{ md: "109px", base: "54px", sm: "81px" }}
        bg="white.A700"
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
          flexDirection={{ base: "column", sm: "row" }}
        />

        {/* profile section */}
        <Container
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="start"
          maxW="1600px"
          px="0px"
          mx="auto"
          p={{ md: "", base: "20px" }}
        >
          <Text fontSize="30px" fontWeight={500}>
            Профиль
          </Text>
          <Flex
            mt="61px"
            w={{ md: "82%", base: "100%" }}
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex gap="25px" flexDirection="column" alignItems="start">
              <Heading size="xs" as="h1" fontSize="35px">
                Екатерина Иванова
              </Heading>
              <Text fontSize="30px" maxWidth="400px"> <p> Middle Frontend Developer <br /> <br />
              <b> Стек:</b> Js, CSS, HTML, Jira <br />
              <b> О себе: </b> работаю фронтом уже более 5 лет и имею опыт в разработке и проектировании интерактивных и привлекательных веб-приложений и сайтов. 

              Я также знакома с такими фреймворками и библиотеками, как React, Vue.js и Bootstrap, и могу помочь студентам, которые хотят углубиться в эти технологии <br />
              <b>Стаж работы:</b> 4 года
              </p>
</Text>
            </Flex>
            <Flex
              gap="31px"
              w={{ md: "56%", base: "100%" }}
              justifyContent="center"
              alignItems="start"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Image
                src="images/img_rectangle_2490.png"
                h="400px"
                w={{ md: "400px", base: "100%" }}
                borderRadius="18px"
              />
            </Flex>
          </Flex>
          <Button
            size="sm"
            colorScheme="blue_gray_100"
            mt="39px"
            alignSelf="center"
            minW="293px"
            borderRadius="20px"
            px={{ base: "20px", sm: "" }}
          >
            Хочу к ментору!
          </Button>

          {/* mentorship list section */}
          <Flex
            mt="436px"
            ml={{ md: "48px", base: "0px" }}
            gap="22px"
            alignSelf="stretch"
            flexDirection={{ md: "row", base: "column" }}
          >
            {[...Array(5)].map((d, index) => (
              <Box
                key={"listrectangle" + index}
                h="292px"
                borderColor="teal.100_01"
                borderWidth="12px"
                borderStyle="solid"
                bg="blue_gray.100"
                w="100%"
                borderRadius="18px"
              />
            ))}
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
