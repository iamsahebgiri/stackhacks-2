import React, { useEffect } from "react";
import Link from "next/link";
import {
  Flex,
  Button,
  Stack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";
import DashboardShell from "../../../components/DashboardShell";
import { AddIcon } from "@chakra-ui/icons";
import isAuthenticted from "../../../../utils/isAuthenticated";
import { useRouter } from "next/router";

const FoodItem = ({ id, name, picture, price, category, foodType, userCreated }) => {
  return (
    <Link href={`/admin/items/edit/${id}`}>
      <a>
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
                <Text>{category?.name}</Text>
                <Text mx="1">·</Text>
                <Text>{foodType}</Text>
              </Flex>
            </Flex>
            <Flex fontSize="sm">
              <Text display="inline-block" color="gray.600" mr="1">
                By
              </Text>
              <Text>{userCreated.username}</Text>
            </Flex>
          </Stack>
        </Flex>
      </a>
    </Link>
  );
};

function Items() {
  const router = useRouter();
  const foodItems = useStoreState((state) => state.foodItems);
  const getAllFoodItems = useStoreActions((actions) => actions.getAllFoodItems);

  useEffect(() => {
    if (!isAuthenticted) {
      router.push("/login");
    } else {
      getAllFoodItems();
    }
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
