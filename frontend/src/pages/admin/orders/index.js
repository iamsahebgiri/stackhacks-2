import React, { useEffect } from "react";
import Link from "next/link";
import {
  Flex,
  Button,
  Stack,
  Image,
  Icon,
  Box,
  Text,
  Heading,
  createStandaloneToast,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";
import DashboardShell from "../../../components/DashboardShell";
import CreateCategoryDrawer from "../../../components/CreateCategoryDrawer";
import { AddIcon } from "@chakra-ui/icons";
import OrdersTable from "../../../components/OrdersTable";

function Categories() {
  const categories = useStoreState((state) => state.categories);
  const getAllCategories = useStoreActions(
    (actions) => actions.getAllCategories
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <DashboardShell>
      <Flex p="6" flex="1" direction="column" bg="gray.50">
        <Stack
          direction={"row"}
          borderBottom="1px"
          borderColor="gray.200"
          pb="3"
          alignItems="center"
          spacing="5"
        >
          <Heading color="gray.800" size="lg">
            All orders
          </Heading>
        </Stack>
        <Box bg="white" mt="2" shadow="sm" py="6" rounded="md">
          <OrdersTable />
        </Box>
      </Flex>
    </DashboardShell>
  );
}

export default Categories;
