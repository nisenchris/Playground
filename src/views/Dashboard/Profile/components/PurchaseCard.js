import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const ProductCard = ({ image, name, description, isNew, onSale }) => {

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
          <Button colorScheme="teal" variant="solid">
            Purchase
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
