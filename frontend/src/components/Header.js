import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { IoFastFood, IoPersonCircle, IoAlbums } from "react-icons/io5";
import isAuthenticated from "../../utils/isAuthenticated";

const HeaderNavItem = (props) => {
  return (
    <Link {...props}>
      <Flex
        py="2"
        px="3"
        mr="2"
        rounded="md"
        alignItems="center"
        bg={props.isActive && "gray.800"}
        _hover={{
          cursor: "pointer",
          bg: props.isActive ? "gray.800" : "gray.600",
        }}
      >
        {/* <Icon
          as={props.icon}
          w={5}
          h={5}
          color={props.isActive ? "white" : "gray.500"}
          mr={4}
        /> */}
        <Text fontWeight="500" fontSize="sm" color={props.isActive ? "white" : "gray.300"}>
          {props.children}
        </Text>
      </Flex>
    </Link>
  );
};

function Header() {
  const router = useRouter();
  const navs = [
    {
      name: "Home",
      icon: RiHomeSmile2Fill,
      href: "home",
    },
    {
      name: "Store",
      icon: IoFastFood,
      href: "store",
    },
    {
      name: "Account",
      icon: IoPersonCircle,
      href: "account",
    },
  ];
  return (
    <Flex
      bg="gray.700"
      px="2"
      py="2"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box h="8" w="8" mx="6" bg="teal.500"></Box>
        <Flex ml="6" justifyContent="space-between" alignItems="center">
          {navs.map((nav) => (
            <HeaderNavItem
              href={`/${nav.href}`}
              key={nav.name}
              isActive={router.pathname.startsWith(`/${nav.href}`)}
            >
              {nav.name}
            </HeaderNavItem>
          ))}
        </Flex>
      </Flex>
      <Box>
        <Menu>
          <MenuButton>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Account">
              <MenuItem
                fontSize="sm"
                onClick={() => {
                  router.push("/admin/account");
                }}
              >
                Settings
              </MenuItem>
              <MenuItem
                fontSize="sm"
                onClick={() => {
                  localStorage.removeItem("token");
                  router.push("/login");
                }}
              >
                Sign Out
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Header;
