import React from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuDivider,
  Text,
  Heading,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { IoFastFood, IoPersonCircle } from "react-icons/io5";

function DashboardShell(props) {
  const router = useRouter();
  const navs = [
    {
      name: "Home",
      icon: RiHomeSmile2Fill,
      href: "home",
    },
    {
      name: "Items",
      icon: IoFastFood,
      href: "items",
    },
    {
      name: "Account",
      icon: IoPersonCircle,
      href: "account",
    },
  ];
  return (
    <Flex>
      <Flex
        width="64px"
        flexDir="column"
        py="4"
        height="100vh"
        bg="gray.800"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar size="sm" name="Oshigaki Kisame" src=""></Avatar>
        <Menu placement="right" offset={[-40, 10]}>
          <MenuButton
            as={Avatar}
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          ></MenuButton>
          <MenuList>
            <MenuGroup title="Account">
              <MenuItem fontSize="sm">Settings</MenuItem>
              <MenuItem fontSize="sm">Sign Out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      <Flex width="224px" flexDir="column" py="4" height="100vh" bg="gray.100">
        <Box px="4">
          {navs.map((nav) => (
            <NavItem
              href={`/admin/${nav.href}`}
              key={nav.name}
              icon={nav.icon}
              isActive={router.pathname.startsWith(`/admin/${nav.href}`)}
            >
              {nav.name}
            </NavItem>
          ))}
        </Box>
      </Flex>

      <Flex flex="1" overflowY="scroll" height="100vh">
        {props.children}
      </Flex>
    </Flex>
  );
}

export default DashboardShell;
