import React from 'react';
import { lineChartData } from '../variables/charts';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';

const SalesTable = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex direction='column' alignSelf='flex-start'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            Sales Data
          </Text>
          <Text fontSize='md' fontWeight='medium' color='gray.400'>
            Monthly sales data for the year
          </Text>
        </Flex>
      </CardHeader>
      <Box w='100%' h='100%' ps='8px'>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                {months.map((month, index) => (
                  <Th key={index}>{month}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {lineChartData.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.name}</Td>
                  {data.data.map((value, idx) => (
                    <Td key={idx}>{value}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default SalesTable;