
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const SalesTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Monthly Sales Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Month</Th>
            <Th>Sales</Th>
            <Th isNumeric>Revenue</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>January</Td>
            <Td>1,000</Td>
            <Td isNumeric>$50,000</Td>
          </Tr>
          <Tr>
            <Td>February</Td>
            <Td>1,200</Td>
            <Td isNumeric>$60,000</Td>
          </Tr>
          <Tr>
            <Td>March</Td>
            <Td>1,500</Td>
            <Td isNumeric>$75,000</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Month</Th>
            <Th>Sales</Th>
            <Th isNumeric>Revenue</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;