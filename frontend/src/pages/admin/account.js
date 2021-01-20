import React from "react";
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
} from "@chakra-ui/react";
import DashboardShell from "../../components/DashboardShell";

function Account() {
  return (
    <DashboardShell>
      <Box justifyContent="center" p="6" bg="gray.50">
        <Stack spacing="4">
          <Flex>
            <Flex width="30%" fontWeight="600">
              Account Settings
            </Flex>
            <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
              <Stack spacing="4">
               
                <Stack spacing="4" direction="row">
                  <FormControl id="email" mr="4">
                    <FormLabel>First Name</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </Stack>
                <Stack spacing="4" direction="row">
                  
                  <FormControl id="email">
                    <FormLabel>Employee Id</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Organization</FormLabel>
                    <Select variant="outline" placeholder="Microsoft" />
                  </FormControl>
                </Stack>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Contact No</FormLabel>
                  <Input type="email" />
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
                  <Button colorScheme="teal">Save</Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
          <Flex>
            <Flex width="30%" fontWeight="600">
              User Profile
            </Flex>
            <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
              <Stack spacing="4">
                <Stack spacing="4" direction="row">
                  <FormControl id="email" mr="4">
                    <FormLabel>First Name</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </Stack>

                <FormControl id="email">
                  <FormLabel>About</FormLabel>
                  <Textarea placeholder="Here is a sample placeholder" />
                  <FormHelperText>
                    Brief description for your profile.
                  </FormHelperText>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Profile picture</FormLabel>
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
                  <Button colorScheme="teal">Save</Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
          <Flex>
            <Flex width="30%" fontWeight="600">
              Delete account
            </Flex>
            <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
              <Stack spacing="4">
                <FormControl id="email">
                  <FormLabel>Delete your account</FormLabel>
                  <FormHelperText>Once you delte your account all data associated with it will be lost.</FormHelperText>
                </FormControl>
                <Flex justifyContent="flex-start">
                  <Button colorScheme="red">Delete</Button>
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
