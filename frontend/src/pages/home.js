import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../components/Header";

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Flex justifyContent="center">
        <Box width="xl"p="3">
          <Heading
            size="lg"
            borderBottom="1px"
            borderColor="gray.200"
            pb="3"
            mt="10"
          >
            In Queue
          </Heading>
        <Box height="200px">

        </Box>
        <Heading
            size="lg"
            borderBottom="1px"
            borderColor="gray.200"
            pb="3"
            mt="10"
          >
            Placed Orders
          </Heading>
        </Box>
      </Flex>
    </>
  );
}

export default Home;
