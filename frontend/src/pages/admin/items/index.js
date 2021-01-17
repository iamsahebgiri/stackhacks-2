import React from "react";
import Link from "next/link";
import { Flex, Button } from "@chakra-ui/react";
import DashboardShell from "../../../components/DashboardShell";
import { AddIcon } from "@chakra-ui/icons";

function Items() {
  return (
    <DashboardShell>
      <Flex p="6" flex="1">
        <Link href="/admin/items/create">
          <a>
            <Button leftIcon={<AddIcon />} colorScheme="teal">
              Add Food
            </Button>
          </a>
        </Link>
        Hello
      </Flex>
    </DashboardShell>
  );
}

export default Items;
