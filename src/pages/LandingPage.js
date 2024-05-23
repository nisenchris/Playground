import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Portal,
  Grid,
  ChakraProvider,
} from "@chakra-ui/react";

// Components and Layouts
import AdminNavbar from "components/Navbars/AdminNavbar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "theme/theme.js";
import Projects from "views/Dashboard/Profile/components/Projects";

const LandingPage = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <MainPanel
        w={{
          base: "100%",
          xl: "100%",
        }}
      >
        <Flex
          flexDirection="column"
          pt={{ base: "120px", md: "75px" }}
          bg="gray.800" // Set the background to dark
          color="white" // Set text color to white for better contrast
          minHeight="100vh" 
        >
          <PanelContent>
            <AdminNavbar />
            <PanelContainer w="100%">
              <Projects
                title={"BEGIN YOUR ADVENTURE!"}
                description={
                  "Dungeons & Dragons takes you and your friends on epic journeys. Become characters you create, battle deadly foes, uncover secrets, find treasure, and make memories that last a lifetime."
                }
              />
            </PanelContainer>
          </PanelContent>
        </Flex>
      </MainPanel>
    </ChakraProvider>
  );
};

export default LandingPage;
