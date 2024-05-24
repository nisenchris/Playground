import React from "react";
import { Flex, ChakraProvider } from "@chakra-ui/react";

// Components and Layouts
import AdminNavbar from "components/Navbars/AdminNavbar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "theme/theme.js";
import Products from "components/Card/Products";

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
          bg="gray.800"
          color="white"
          minHeight="100vh"
        >
          <PanelContent>
            <AdminNavbar />
            <PanelContainer w="100%">
              <Products
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
