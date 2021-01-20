import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import DashboardShell from "../../components/DashboardShell";
import StoreAccountForm from "../../components/StoreAccountForm";

function Account() {
  return (
    <DashboardShell>
      <Box justifyContent="center" p="6" bg="gray.50">
        <Box mb="12">
          <Flex
            height="150px"
            p="3"
            bg="teal.500"
            rounded="md"
            justifyContent="flex-end"
          >
            <Button>Edit Store Logo</Button>
          </Flex>
          <Box mt="-100px" ml="50px">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Segun Adebayo"
            />
          </Box>
        </Box>
        <Stack spacing="4">
          <StoreAccountForm />
          <Flex>
            <Flex width="30%" fontWeight="600">
              Delete account
            </Flex>
            <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
              <Stack spacing="4">
                <FormControl id="email">
                  <FormLabel>Delete your account</FormLabel>
                  <FormHelperText>
                    Once you delete your account all data associated with it
                    will be lost.
                  </FormHelperText>
                </FormControl>
                <Flex justifyContent="flex-end">
                  <Button colorScheme="red">Delete account</Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </DashboardShell>
  );
}

export default Account;

//       picture: String,
//       employee_id: String,
//       organization: String,
//       mobile_no: String,
//       identity_card: String,
