import React from "react";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

function NavItem(props) {
  return (
    <Link {...props}>
      <Flex
        py="1"
        px="3"
        mb="3"
        rounded="md"
        alignItems="center"
        bg={props.isActive && "teal.400"}
        _hover={{ cursor: "pointer", bg: props.isActive? "teal.400" : "gray.200" }}
      >
        <Icon as={props.icon} w={5} h={5} color={props.isActive? "gray.100" : "gray.500"} mr={4} />
        <Text fontWeight="500" color={props.isActive? "gray.100" : "gray.600"}>
          {props.children}
        </Text>
      </Flex>
    </Link>
  );
}

export default NavItem;
