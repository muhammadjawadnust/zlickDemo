import React, { useState, useEffect } from "react";
// import Script from 'next/script'
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
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { ChevronRightIcon } from "@chakra-ui/icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import TableBody from "../table/index";
// import AlertDialogBox from "../dialoug/index"

function Body() {
  const [Purchase, SetPurchase] = useState(false);
  const [Subscription, Setsubscription] = useState(false);
  const [payload, SetPayload] = useState();
  const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()
    const finalRef = React.useRef()
  

  const PurchasePayload = `{
        "productName": "123", // name of product that is configured on Zlick
        "token": "Token", // client token provided by Zlick
        "clientUserId": "456" // Optional: Your own system's userID
      }`;
  const SubscriptionPayload = `{
        "contentId": "123", // (Required) Your content ID
        "amount": 20, // (Required) Purchase price in change (cents, cross, pennies etc. )
        "token": "clientToken", // (Required) client token provided by Zlick
        "clientUserId": "456", // Optional: Your own system's userID
        "referenceName": "ARTICLE-4076" // Optional: A reference name that will be visible for this product in Zlick Portal
      }
      `;
  const handlePurchaseClick = () => {
    SetPurchase(!Purchase);
    Subscription && Setsubscription(false);
    SetPayload(PurchasePayload);
  };
  const handleSubscriptionClick = () => {
    Setsubscription(!Subscription);
    Purchase && SetPurchase(false);
    SetPayload(SubscriptionPayload);
  };
  const prettyPrint = () => {
    var ugly = document.getElementById("myTextArea").value;
    var obj = JSON.parse(ugly);
    var pretty = JSON.stringify(obj, undefined, 4);
    document.getElementById("myTextArea").value = pretty;
  };
  const HandleExecute = async () => {
      console.log("into handle execute");
      setIsOpen(true);
     
    //   <AlertDialogBox/>
    // let token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50SWQiOiIxMjMiLCJhbW91bnQiOjIwLCJ0b2tlbiI6IjQyYTZhOTJhMGVmYjQ4MTcyMjM4NWZkZjBmNGYwNzBiIiwiY2xpZW50VXNlcklkIjoiNDU2In0.P1G0Ua3ENakESg1TNWLwwiQh-oa9_F6huyf_xFiAwC8";
    // const identifyResponse = await zlick.identifyClient(token);
    // console.log(identifyResponse);
  };
  return (
      <>
    <Box>

      <Box >
        <Center size={21} color="#808080" fontWeight={50} alignContent="center">
          To help you start follow the steps
        </Center>
      </Box>
    
      <Grid templateColumns="repeat(12, 1fr)" gap={6} mt={5}>
        <GridItem colStart={1} colEnd={3} w="100%" h="10">
          <Button
            ml="30%"
            colorScheme="teal"
            size="lg"
            rightIcon={<ChevronRightIcon />}
          >
            Step 1
          </Button>
        </GridItem>
        <GridItem colStart={3} colEnd={9} w="100%" h="10">
          <Box border="1px" borderColor="gray.200" borderRadius="20px">
            <Text size='md' ml={5}>
              Almost all of the methods below use JWT tokens as function inputs.
            </Text>
            <Text ml={5}>
            Instructions to generate these are below
            </Text>
            <Text ml={5}>
              To start you must have the Token and Secret. If you don not have
              currently any request at
              <Code>
                <a>support@zlick.it</a>
              </Code>
            </Text>
            <Input
              display="inline-block"
              alignItems="left"
              mt={5}
              ml={10}
              mr={5}
              placeholder="42a6a92a0efb481722385fdf0f4f070b"
              w="40%"
            />
            <Input
              display="inline-block"
              alignItems="left"
              mt={1}
              ml={5}
              placeholder="df2bce6c533c8590f5914b51ba2c1365"
              w="40%"
            />
            <Heading
              display="inline-block"
              alignItems="left"
              ml={10}
              mt={1}
              size="xs"
              color="#909090"
            >
              (Please insert the token)
            </Heading>
            <Heading
              display="inline-block"
              alignItems="left"
              ml="10rem"
              mt={1}
              size="xs"
              color="#909090"
            >
              (Please insert the secret)
            </Heading>

            {/* <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="20px"
            display={Subscription ? "block" : "none"}
            w="50%"
          >
            <Heading color="#909090" fontSize={13}>
              "contentId": "123", // (Required) Your content ID
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "amount": 20, // (Required) Purchase price in change (cents,
              cross, pennies etc. 
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "token": "clientToken", // (Required) client token provided by
              Zlick
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "clientUserId": "456", // Optional: Your own system's userID
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "referenceName": "ARTICLE-4076" // Optional: A reference name that
              will be visible for this product in Zlick Portal
            </Heading>
          </Box>

          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="20px"
            display={Purchase ? "block" : "none"}
            w="50%"
          >
            <Heading color="#909090" fontSize={13}>
              "productName": "123", // name of product that is configured on
              Zlick
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "token": "Token", // client token provided by Zlick
            </Heading>
            <Heading color="#909090" fontSize={13}>
              "clientUserId": "456" // Optional: Your own system's userID
            </Heading>
          </Box> */}
          </Box>
        </GridItem>
        <GridItem colStart={9} colEnd={12}>
          <Textarea
            id="myTextArea"
            onChange={prettyPrint}
            mt="0px"
            size="lg"
            placeholder="Payload"
            value={payload}
            w="300px"
            h="300px"
          />
        </GridItem>
      </Grid>
    

      <Grid templateColumns="repeat(12, 1fr)" gap={6} mt={5}>
        <GridItem colStart={1} colEnd={3} w="100%" h="10">
          <Button
            ml="30%"
            colorScheme="teal"
            size="lg"
            rightIcon={<ChevronRightIcon />}
          >
            Step 2
          </Button>
        </GridItem>
       
        <GridItem colStart={3} colEnd={9} w="100%" h="10">
          <Box border="1px" borderColor="gray.200" borderRadius="20px">
            <Center>
              Payload is the information you want to send it securely.
            </Center>
            <Center>
              Once you choose between <Code> Payload </Code> and{" "}
              <Code> purchase </Code>
            </Center>
            <Center>Hit Execute</Center>
            <Heading size={16} mt={30} color="#909090" ml={20}>
              Please select the desired payload
            </Heading>

            <Button
              ml={20}
              colorScheme="teal"
              size="lg"
              onClick={handlePurchaseClick}
            >
              Purchase
            </Button>
            <Button
              ml="30%"
              colorScheme="teal"
              size="lg"
              onClick={handleSubscriptionClick}
            >
              Subscription
            </Button>
            <Button
              ml="30%"
              mt="30px"
              mb="5px"
              colorScheme="teal"
              size="lg"
              rightIcon={<ArrowRightIcon h="15px" />}
              onClick={HandleExecute}
            >
              Execute
            </Button>
          </Box>
        </GridItem>

      </Grid>

   
       
    </Box>
    <Box display={isOpen?'block':'none'}>
        {/* <Button colorScheme='red' onClick={() => setIsOpen(true)}>
          Delete Customer
        </Button> */}
  
        {/* <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                <TableBody/>
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog> */}
         <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h='1000px' maxW="56rem" ml='0px' mr='0px'>
          <ModalHeader>Resoponse of identifyClient Method</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        <TableBody/>
          </ModalBody>

          <ModalFooter mt={0}>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>

    </>
  );
}


//   export default AlertDialogBox;
export default Body;
