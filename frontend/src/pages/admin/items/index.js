import React, { useEffect } from "react";
import Link from "next/link";
import {
  Flex,
  Button,
  Stack,
  Image,
  Heading,
  Text,
  createStandaloneToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";
import DashboardShell from "../../../components/DashboardShell";
import { AddIcon } from "@chakra-ui/icons";

const FoodItem = ({ id, name, picture, price, category }) => {
  const toast = createStandaloneToast();
  const deleteFoodItem = useStoreActions((actions) => actions.deleteFoodItem);

  const deleteFoodItemFn = (id) => {
    axios
      .delete(`http://localhost:3030/api/fooditems/${id}`)
      .then((response) => {
        deleteFoodItem(id);
        console.log(response.data);
        toast({
          position: "top-right",
          title: "Food Deleted.",
          description: response.data.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Flex maxWidth="500px" mb="4">
      <Image
        rounded="md"
        boxSize="100px"
        objectFit="cover"
        src={`http://localhost:3030/${picture}`}
        alt={name}
      />
      <Stack ml="4">
        <Heading fontSize="lg" m="0">
          {name}
        </Heading>
        <Flex>
          <Flex fontSize="sm" fontWeight="500" color="gray.600">
          <Text>₹ {price} </Text>
            <Text mx="1">·</Text>
            {/* <Text>{category?.name}</Text> */}
            <Text> Drinks </Text>
            <Text mx="1">·</Text>
            <Text> Vegetarian</Text>
          </Flex>
        </Flex>
        <Text fontSize="sm">
          <Text display="inline-block" color="gray.600">By</Text> Saheb Giri</Text>
      </Stack>
      {/* <Button onClick={() => deleteFoodItemFn(id)}>Delete</Button> */}
    </Flex>
  );
};

function Items() {
  const foodItems = useStoreState((state) => state.foodItems);
  const getAllFoodItems = useStoreActions((actions) => actions.getAllFoodItems);

  useEffect(() => {
    getAllFoodItems();
  }, []);

  return (
    <DashboardShell>
      <Flex p="6" flex="1" direction="column" bg="gray.50">
        <Stack
          direction={"row"}
          borderBottom="1px"
          borderColor="gray.200"
          pb="3"
          mb="6"
          alignItems="center"
          spacing="5"
          justifyContent="space-between"
        >
          <Heading color="gray.800" size="lg">
            Food Items
          </Heading>
          <Link href="/admin/items/create">
            <a>
              <Button leftIcon={<AddIcon />} colorScheme="teal">
                Add Food
              </Button>
            </a>
          </Link>
        </Stack>

        <Flex flexWrap="wrap" justifyContent="space-between">
          {foodItems.map((foodItem) => (
            <FoodItem key={foodItem.id} {...foodItem}></FoodItem>
          ))}
        </Flex>
      </Flex>
    </DashboardShell>
  );
}

export default Items;
