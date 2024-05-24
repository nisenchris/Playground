import React from "react";
// Chakra imports
import { Box, Image, Badge, Flex, Button } from "@chakra-ui/react";
// LaunchDarkly SDK
import { useLDClient } from "launchdarkly-react-client-sdk";

const PurchaseCard = ({ image, name, description, isNew, onSale }) => {
  // LaunchDarkly client 
  const ldClient = useLDClient();

  const handlePurchaseClick = () => {
    if (ldClient) {
      // Track a custom event in LaunchDarkly
      ldClient.track("Purchase Button Click", { cardType: "PurchaseCard" });
      console.log('Event sent: Purchase Button Click', { cardType: "PurchaseCard" });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
      transition="all 0.3s"
      color="white"
    >
      <Image src={image} alt={name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {isNew && (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          )}
          {onSale && (
            <Badge borderRadius="full" px="2" colorScheme="red" ml="2">
              Sale
            </Badge>
          )}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>
        <Box fontSize="sm" mt="2">
          {description}
        </Box>
        <Flex mt="4" justifyContent="space-between" alignItems="center">
          {/* Handle click event */}
          <Button colorScheme="teal" variant="solid" onClick={handlePurchaseClick}>
            Purchase
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PurchaseCard;
