import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Icon } from "@chakra-ui/react";
import { IoTimerOutline } from "react-icons/io5";
import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../components/Header";
import OrdersTable from "../components/OrdersTable";

const Queue = () => {
  return (
    <Flex
      height="80px"
      bg="white"
      rounded="md"
      shadow="sm"
      alignItems="center"
      justifyContent="space-between"
      p="2"
    >
      <Flex alignItems="center">
        <Image
          borderRadius="full"
          boxSize="60px"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Stack ml="3" spacing={0}>
          <Heading size="sm" m={0}>
            Saheb Giri
          </Heading>
          <Text m={0} fontSize="sm" color="gray.500">
            Student
          </Text>
        </Stack>
      </Flex>
      <Box mr="4">
        <Badge colorScheme="teal">First</Badge>
      </Box>
    </Flex>
  );
};

function Home() {
  const router = useRouter();
  const orders = useStoreState((state) => state.orders);
  const getOrdersByMe = useStoreActions((actions) => actions.getOrdersByMe);

  useEffect(() => {
    getOrdersByMe();
  }, []);

  return (
    <>
      <Header />
      <Flex justifyContent="center" bg="gray.50" minH="100vh">
        <Box width="xl" p="3">
          <Heading
            size="lg"
            borderBottom="1px"
            borderColor="gray.200"
            pb="3"
            mt="10"
          >
            In Queue
          </Heading>
          {/* <Box p="16">
            <Image src="/assets/svg/undraw_city_life_gnpr.svg" />
            <Text textAlign="center" color="gray.500" mt="6">
              There is no one in the queue.
            </Text>
          </Box> */}
          <Stack spacing="3" mt="3">
            <Queue />
            <Queue />
            <Queue />
          </Stack>
          <Heading
            size="lg"
            borderBottom="1px"
            borderColor="gray.200"
            pb="3"
            mt="10"
          >
            Your Orders
          </Heading>
          {/* <Box p="28">
            {orders.map((order) => (
              <p key={order._id}>{order.item.name}</p>
            ))}

            <Image src="/assets/svg/undraw_Select_re_3kbd.svg" />
            <Text textAlign="center" color="gray.500" mt="6">
              You have not placed orders yet.
            </Text>
          </Box> */}
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            my="3"
          >
            <Icon as={IoTimerOutline} h="8" w="8" color="gray.600" />
            <Text mt="2">Wait until 30:00 min</Text>
          </Flex>

         
        </Box>
      </Flex>
    </>
  );
}

export default Home;
