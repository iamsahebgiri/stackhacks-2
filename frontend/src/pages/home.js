import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";
import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../components/Header";
import OrdersTable from "../components/OrdersTable";

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
      <Flex justifyContent="center">
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
          <Box height="200px"></Box>
          <Heading
            size="lg"
            borderBottom="1px"
            borderColor="gray.200"
            pb="3"
            mt="10"
          >
            Your Orders
          </Heading>
          <Box>
            {/* {orders.map((order) => (
              <p key={order._id}>{order.item.name}</p>
            ))} */}
            {/* <OrdersTable /> */}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Home;
