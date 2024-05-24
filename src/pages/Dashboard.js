import React from "react";

// Chakra imports
import { Grid, Flex, SimpleGrid, ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme.js";

// Custom Components
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import AdminNavbar from "components/Navbars/AdminNavbar";
import MiniStatistics from "components/Card/MiniStatistics";

// Chart components
import ActiveUsers from "views/Dashboard/Dashboard/components/ActiveUsers";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import SalesOverview from "views/Dashboard/Dashboard/components/SalesOverview";

// LaunchDarkly SDK to access feature flags
import { useFlags } from "launchdarkly-react-client-sdk";

const Dashboard = () => {
  // Getting LaunchDarkly feature flags
  const { lineChart } = useFlags();

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
          bg="gray.100"
          minHeight="100vh"
        >
          <PanelContent w="75%">
            <AdminNavbar />
            <PanelContainer>
              <SimpleGrid
                columns={{ sm: 1, md: 2, xl: 4 }}
                spacing="24px"
                my="26px"
              >
                {/* Some content for the dashboard: Mini statistics cards */}
                <MiniStatistics
                  title={"Today's Moneys"}
                  amount={"$53,000"}
                  percentage={55}
                  icon={<WalletIcon h={"24px"} w={"24px"} color={"white"} />}
                />
                <MiniStatistics
                  title={"Today's Users"}
                  amount={"2,300"}
                  percentage={5}
                  icon={<GlobeIcon h={"24px"} w={"24px"} color={"white"} />}
                />
                <MiniStatistics
                  title={"New Clients"}
                  amount={"+3,020"}
                  percentage={-14}
                  icon={<DocumentIcon h={"24px"} w={"24px"} color={"white"} />}
                />
                <MiniStatistics
                  title={"Total Sales"}
                  amount={"$173,000"}
                  percentage={8}
                  icon={<CartIcon h={"24px"} w={"24px"} color={"white"} />}
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
                {/* Line Chart component only displays when lineChart flag is enabled */}
                {lineChart ? (
                  <SalesOverview
                    title={"Sales Overview"}
                    percentage={25}
                    chart={<LineChart />}
                  />
                ) : (
                  <div />
                )}
              </Grid>
            </PanelContainer>
          </PanelContent>
        </Flex>
      </MainPanel>
    </ChakraProvider>
  );
};

export default Dashboard;
