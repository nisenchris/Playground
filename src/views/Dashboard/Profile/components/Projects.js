// Chakra imports
import {
  Flex,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import imageDNDDragonTalk from "assets/img/DnD_Articles_DragonTalk_1.avif";
import imageDNDVirtualPlayWeekends from "assets/img/dnd_vpw_othermedia.avif"
import imageTomTotenbergSwift from "assets/img/TomTotenbergSwift.jpeg"
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = ({ title, description }) => {
  // Chakra color mode

  return (
    <Card p="16px" my="24px" bg="gray.700">
      <CardHeader p="12px 5px" mb="12px">
        <Flex direction="column">
          <Text fontSize="lg" color="white" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px">
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(3, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap="24px"
        >
          <ProjectCard
            image={imageDNDDragonTalk}
            category={"Dragon Talk"}
            description={
              "D&D owns the airwaves! Get the latest news and gamer humor from the official D&D podcast."
            }
            buttonName={"Read More"}
          />
          <ProjectCard
            image={imageDNDVirtualPlayWeekends}
            category={"Virtual Play Weekends"}
            description={
              "Connect with your friends around the world and play D&D with some of the best Dungeon Masters anywhere!"
            }
            buttonName={"Read More"}
          />
          <ProjectCard
            image={imageTomTotenbergSwift}
            category={"D&D with Tom Swift"}
            description={
              "Join our D&D campaign with a GM who will shake it off, lead you through wildest dreams, love stories with dragons, and ensure you belong with us in this enchanted adventure!"
            }
            buttonName={"Purchase"}
          />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Projects;
