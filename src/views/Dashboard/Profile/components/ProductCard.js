// Chakra imports
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

import { useLDClient } from "launchdarkly-react-client-sdk";

const ProductCard = ({ image, name, category, description, linkName }) => {
  const ldClient = useLDClient();

  const handlePurchaseClick = () => {
    if (linkName === "Purchase") {
      ldClient.track("Purchase Button Click", { cardType: "ProductCard" });
      console.log("Event sent: Purchase Button Click", {
        cardType: "ProductCard",
      });
    }
  };

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
          <Text fontSize="xl" color="white" fontWeight="bold" mb="10px">
            {category}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
            {description}
          </Text>
        </Box>
        <Flex justifyContent="space-between" mt="auto">
          <Link
            bg="inherit"
            py="4px"
            px="8px"
            borderRadius="inherit"
            _hover={{
              textDecoration: "underline",
            }}
            fontSize="xs"
            fontWeight="bold"
            onClick={handlePurchaseClick}
          >
            {linkName}
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
