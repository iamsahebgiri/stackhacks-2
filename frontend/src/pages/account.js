import React from "react";
import Header from "../components/Header";
import EmployeeAccountForm from "../components/EmployeeAccountForm";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

function Account() {
  return (
    <>
      <Header />

      <Flex bg="gray.50" alignItems="center" justifyContent="center" py="4">
        <Box width="xl">
          <Flex
            height="150px"
            p="3"
            bg="teal.500"
            rounded="md"
            justifyContent="flex-end"
          >
            <Button>Edit Profile</Button>
          </Flex>
          <Box mt="-120px" ml="30px" mb="6">
            {/* {Object.keys(file).length === 0 ? (
              <Image
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150/000000/FFFFFF/"
                src={`http://localhost:3030/${user?.profilePicture}`}
              />
            ) : (
              <Image
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150/000000/FFFFFF/"
                src={file?.preview}
              />
            )} */}
            <Image
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              fallbackSrc="https://via.placeholder.com/150/000000/FFFFFF/"
              src=""
            />
          </Box>
          <EmployeeAccountForm />
        </Box>
      </Flex>
    </>
  );
}

export default Account;
