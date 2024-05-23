import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Portal,
  ChakraProvider,
} from "@chakra-ui/react";

// christian - kika mios
import AdminNavbar from "components/Navbars/AdminNavbar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

import theme from "theme/theme.js";

const LandingPage = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100%)",
        }}
      >
        <Flex
          flexDirection="column"
          pt={{ base: "120px", md: "75px" }}
          bg="gray.200"
        >
          <PanelContent w="75%">
            <AdminNavbar/>
            <PanelContainer>
              <Box
                textAlign="center"
                p={8}
                bg="white"
                boxShadow="md"
                rounded="lg"
              >
                <Heading as="h1" size="2xl" mb={4}>
                  Welcome to Our App
                </Heading>
                <Text fontSize="lg" mb={6}>
                  This is the landing page. Learn more about our app and its
                  features.
                </Text>
                <Box>
                  <Link to="/signin">
                    <Button colorScheme="blue" mr={4}>
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button colorScheme="green">Dashboard</Button>
                  </Link>
                </Box>
              </Box>
            </PanelContainer>
          </PanelContent>
        </Flex>
      </MainPanel>
    </ChakraProvider>
  );
};

export default LandingPage;
