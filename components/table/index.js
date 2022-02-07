import React, { useState, useEffect } from "react";

import {
  Grid,
  GridItem,
  Code,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Heading,
  Flex,
  Text,
  Textarea,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
function TableBody() {
  return (
  
     <Grid templateColumns="repeat(12, 1fr)" gap={6} mt={5} mb={0}>
    
          <GridItem colStart={1} colEnd={12} w="100%" h="10" mb={0}>
          <Center>
            identifyClient Method is responsible for generating first response
      
          </Center>
          

          <Box mt={10}>
            <Table variant="simple">
              <TableCaption>Response Keys and Description</TableCaption>
              <Thead>
                <Tr>
                  <Th>Keys</Th>
                  <Th>Values</Th>
                  <Th isNumeric>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>userId</Td>
                  <Td>null/value</Td>
                  <Td isNumeric>If you are registered with zlick you will recive a unique Id</Td>
                </Tr>
                <Tr>
                  <Td>challengeId</Td>
                  <Td>string</Td>
                  <Td isNumeric>It is used to detect the billing of a specific user</Td>
                </Tr>
                <Tr>
                  <Td>contentId</Td>
                  <Td>String</Td>
                  <Td isNumeric>Purchased content or product name</Td>
                </Tr>
                <Tr>
                  <Td>hasAccessRights</Td>
                  <Td>Boolean</Td>
                  <Td isNumeric> Shows if user has access to content</Td>
                </Tr>
                <Tr>
                  <Td>authMethod</Td>
                  <Td>String</Td>
                  <Td isNumeric>It shows which authentication method is availble</Td>
                </Tr>
                <Tr>
                  <Td>allowedMethods</Td>
                  <Td>Object</Td>
                  <Td isNumeric>Shows allowed access </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Keys</Th>
                  <Th>Values</Th>
                  <Th isNumeric>Description</Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
        </GridItem>
      </Grid>
  
  );
}
export default TableBody;
