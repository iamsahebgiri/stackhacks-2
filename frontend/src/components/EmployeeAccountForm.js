import React, { useState } from "react";
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

function EmployeeAccountForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <Flex>
      <Flex width="30%" fontWeight="600">
        Account Settings
      </Flex>
      <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
        <Stack spacing="4">
          <Stack spacing="4" direction="row">
            <FormControl id="email" mr="4">
              <FormLabel>First Name</FormLabel>
              <Input type="email" disabled={isDisabled} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Last Name</FormLabel>
              <Input type="email" disabled={isDisabled} />
            </FormControl>
          </Stack>
          <Stack spacing="4" direction="row">
            <FormControl id="email">
              <FormLabel>Employee Id</FormLabel>
              <Input type="email" disabled={isDisabled} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Organization</FormLabel>
              <Select variant="outline" placeholder="Microsoft" disabled={isDisabled} />
            </FormControl>
          </Stack>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" disabled={isDisabled} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Contact No</FormLabel>
            <Input type="email" disabled={isDisabled} />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Identity Card</FormLabel>
            <Flex
              alignItems="center"
              justifyContent="center"
              padding="12"
              borderWidth="2px"
              rounded="md"
              borderStyle="dashed"
            >
              <Text
                width="sm"
                textAlign="center"
                fontSize="sm"
                color="gray.600"
              >
                Upload a file or drag and drop PNG, JPG up to 2MB
              </Text>
            </Flex>
          </FormControl>
          <Flex justifyContent="flex-end">
            <Button
              colorScheme="teal"
              onClick={() => setIsDisabled((state) => !state)}
            >
              {isDisabled ? "Edit" : "Save"}
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}

export default EmployeeAccountForm;
