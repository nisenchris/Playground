// Chakra imports
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ image, name, category, description, buttonName }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex
      direction="column"
      height="100%"
      borderRadius="15px"
      overflow="hidden"
    >
      <Box
        mb="20px"
        position="relative"
        borderRadius="15px"
        height="200px"
        overflow="hidden"
      >
        <Image
          src={image}
          borderRadius="15px"
          height="100%"
          width="100%"
          objectFit="cover"
        />
        <Box
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          borderRadius="15px"
        ></Box>
      </Box>
      <Flex direction="column" flex="1" justify="space-between">
        <Box>
          <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
            {name}
          </Text>
          <Text fontSize="xl" color={textColor} fontWeight="bold" mb="10px">
            {category}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
            {description}
          </Text>
        </Box>
        <Flex justifyContent="space-between" mt="auto">
          <Button
            variant="outline"
            colorScheme="teal"
            minW="110px"
            h="36px"
            fontSize="xs"
            px="1.5rem"
          >
            {buttonName}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
