import React from "react";
import Link from "next/link";
import {
  Flex,
  Button,
  Stack,
  Image,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const FoodItem = ({
  id,
  name,
  picture,
  price,
  category,
  foodType,
  userCreated,
  isEditable,
}) => {
  const router = useRouter();
  return (
    <Flex
      width="500px"
      p="2"
      rounded="md"
      mb="4"
      bg="white"
      shadow="sm"
      _hover={{}}
      alignItems="self-end"
      justifyContent="space-between"
    >
      <Flex>
        <Image
          rounded="md"
          boxSize="120px"
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
          <Flex>
            {isEditable ? (
              <>
                <Button
                  size="sm"
                  width="120px"
                  mr="2"
                  onClick={() => {
                    router.push({
                      pathname: "/admin/items/edit/[foodItemId]",
                      query: { foodItemId: id },
                    });
                  }}
                >
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" width="120px">
                  Delete
                </Button>
              </>
            ) : (
              <Button size="sm" width="120px">
                Place order
              </Button>
            )}
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default FoodItem;
