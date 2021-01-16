import React from "react";
import {
  Flex,
  Button,
  Box,
  Select,
  Textarea,
  DrawerFooter,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputLeftAddon,
  InputRightAddon, 
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import DashboardShell from "../../components/DashboardShell";
import { AddIcon } from "@chakra-ui/icons";

function Items() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <DashboardShell>
      <Flex p="6" flex="1">
        <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
          Add Food
        </Button>
        <Drawer
          isOpen={isOpen}
          initialFocusRef={firstField}
          motionPreset="slideInBottom"
          onClose={onClose}
          size="md"
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Add food  to menu
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Name</FormLabel>
                    <Input
                      ref={firstField}
                      id="username"
                      placeholder="Please enter user name"
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="url">Url</FormLabel>
                    <InputGroup>
                      <InputLeftAddon>http://</InputLeftAddon>
                      <Input
                        type="url"
                        id="url"
                        placeholder="Please enter domain"
                      />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="owner">Select Owner</FormLabel>
                    <Select id="owner" defaultValue="segun">
                      <option value="segun">Segun Adebayo</option>
                      <option value="kola">Kola Tioluwani</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="desc">Description</FormLabel>
                    <Textarea id="desc" />
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="teal">Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </DashboardShell>
  );
}

export default Items;
