import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";
// things I added // Kika
import MiniStatistics from "component/MiniStatistics";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

import theme from "theme/theme.js";

import ActiveUsers from "views/Dashboard/Dashboard/components/ActiveUsers";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import SalesOverview from "views/Dashboard/Dashboard/components/SalesOverview";

// LD
import { useFlags } from "launchdarkly-react-client-sdk";

const Dashboard = ({ user, setUser }) => {
  const { devUser } = useFlags();

  const history = useHistory();
  const iconBoxInside = useColorModeValue("white", "white");

  const handleSignOut = () => {
    setUser(null);
    history.push("/signin");
  };

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% )",
        }}
      >
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
          <Box textAlign="center">
            <Heading>Dashboard</Heading>
            <Text mt={4}>Welcome, {user}!</Text>
            <Button mt={4} onClick={handleSignOut}>
              Sign Out
            </Button>
          </Box>
          <PanelContent w="75%">
            <PanelContainer>
              <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <MiniStatistics
                  title={"Today's Moneys"}
                  amount={"$53,000"}
                  percentage={55}
                  icon={
                    <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  }
                />
                <MiniStatistics
                  title={"Today's Users"}
                  amount={"2,300"}
                  percentage={5}
                  icon={
                    <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  }
                />
                <MiniStatistics
                  title={"New Clients"}
                  amount={"+3,020"}
                  percentage={-14}
                  icon={
                    <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  }
                />
                <MiniStatistics
                  title={"Total Sales"}
                  amount={"$173,000"}
                  percentage={8}
                  icon={
                    <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  }
                />
              </SimpleGrid>
              <Grid
                templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
                templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
                gap="24px"
                mb={{ lg: "26px" }}
              >
                <ActiveUsers
                  title={"Active Users"}
                  percentage={23}
                  chart={<BarChart />}
                />
                { devUser ? (
                <SalesOverview
                  title={"Sales Overview"}
                  percentage={25}
                  chart={<LineChart />}
                /> ) : <div />}
              </Grid>
            </PanelContainer>
          </PanelContent>
        </Flex>
      </MainPanel>
    </ChakraProvider>
  );
};

export default Dashboard;
