import {
  Flex,
  Box,
  Heading,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  StatLabel,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import DashboardShell from "../../components/DashboardShell";

function Home() {
  return (
    <DashboardShell>
      <Flex flexDir="column" flex="1" bg="gray.50" p="6">

        <Heading size="lg" borderBottom="1px" borderColor="gray.200" pb="3">
          Overview
        </Heading>
        <Flex py="4" mt="3">
          <Stack direction={["column", "row"]} spacing="5" width="100%">
            <Stat>
              <Box shadow="sm" p="3" rounded="md" bg="white">
                <StatLabel>Sales</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Box>
            </Stat>
            <Stat>
              <Box shadow="sm" p="3" rounded="md" bg="white">
                <StatLabel>Order</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Box>
            </Stat>
            <Stat>
              <Box shadow="sm" p="3" rounded="md" bg="white">
                <StatLabel>Impression</StatLabel>
                <StatNumber>63</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  2.05%
                </StatHelpText>
              </Box>
            </Stat>
          </Stack>
        </Flex>
        <Heading
          size="lg"
          borderBottom="1px"
          borderColor="gray.200"
          pb="3"
          mt="10"
        >
          All Orders
        </Heading>
      </Flex>
    </DashboardShell>
  );
}

export default Home;
