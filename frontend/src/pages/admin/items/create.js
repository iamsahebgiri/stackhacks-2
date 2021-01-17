import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { Field, Form, Formik } from "formik";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
  Button,
  Select,
  Text,
  Image,
  useDisclosure,
  createStandaloneToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";
import CreateFoodItemSchema from "../../../../schema/CreateFoodItemSchema";
import { IoArrowBack } from "react-icons/io5";
import DashboardShell from "../../../components/DashboardShell";
import CreateCategoryDrawer from "../../../components/CreateCategoryDrawer";

function CreateItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = createStandaloneToast();
  const categories = useStoreState((state) => state.categories);
  const router = useRouter();
  const getAllCategories = useStoreActions(
    (actions) => actions.getAllCategories
  );

  const [file, setFile] = useState({});
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFile) => {
      console.log(acceptedFile[0]);
      setFile(
        Object.assign(acceptedFile[0], {
          preview: URL.createObjectURL(acceptedFile[0]),
        })
      );
    },
  });

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(file.preview);
    },
    [file]
  );

  return (
    <DashboardShell>
      <Flex flexDir="column" flex="1" p="6">
        <Stack
          direction={"row"}
          borderBottom="1px"
          borderColor="gray.200"
          pb="3"
          alignItems="center"
          spacing="5"
        >
          <Link href="/admin/items">
            <a>
              <Box p="2">
                <Icon as={IoArrowBack} color="gray.600" h={6} w={6} />
              </Box>
            </a>
          </Link>
          <Heading color="gray.800" size="lg">
            Add Food Item
          </Heading>
        </Stack>
        <Stack alignItems="center">
          <Flex my="12" width="md">
            <Formik
              initialValues={{ name: "", price: 10, category: "" }}
              validationSchema={CreateFoodItemSchema}
              onSubmit={(values, actions) => {
                let formData = new FormData();

                formData.append("name", values.name);
                formData.append("price", values.price);
                formData.append("category", values.category);
                formData.append("picture", file);

                for (var pair of formData.entries()) {
                  console.log(pair[0] + ", " + pair[1]);
                }
                axios
                  .post(
                    "http://localhost:3030/api/fooditems/create",
                    formData,
                    {
                      headers: { "content-type": "multipart/form-data" },
                    }
                  )
                  .then((response) => {
                    actions.setSubmitting(false);
                    console.log(response.data);
                    toast({
                      position: "top-right",
                      title: "Food created.",
                      description: "We've created a food for you.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                    router.push("/admin/items");
                  })
                  .catch((error) => {
                    const errors = error.response.data.errors;
                    if (Object.keys(errors).length) {
                      for (let key in errors) {
                        toast({
                          position: "top-right",
                          title: "An error occurred.",
                          description: errors[key],
                          status: "error",
                          duration: 9000,
                          isClosable: true,
                        });
                      }
                    } else {
                      toast({
                        position: "top-right",
                        title: "An error occurred.",
                        description: "Food must have an image.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });
                    }

                    actions.setSubmitting(false);
                  });
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing="4">
                    <Box>
                      <Box
                        bg="gray.200"
                        rounded="md"
                        textAlign="center"
                        _hover={{ cursor: "pointer" }}
                        _focus={{ outline: "none" }}
                        p="4"
                        {...getRootProps({ className: "dropzone" })}
                      >
                        <Input {...getInputProps()} />
                        <Text>
                          Drag & drop image here, or click to select a image
                        </Text>
                      </Box>
                    </Box>
                    <Box key={file.name}>
                      <Box>
                        <Image rounded="md" src={file.preview} />
                      </Box>
                    </Box>
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          isRequired
                        >
                          <FormLabel htmlFor="name">Name of food</FormLabel>
                          <Input
                            {...field}
                            id="name"
                            placeholder="Coke"
                            focusBorderColor="teal.500"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="price">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.price && form.touched.price}
                          isRequired
                        >
                          <FormLabel htmlFor="price">Price</FormLabel>
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              color="gray.300"
                              fontSize="1.2em"
                              children="₹"
                            />
                            <Input
                              {...field}
                              placeholder="20"
                              type="number"
                              focusBorderColor="teal.500"
                              id="price"
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.price}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="category">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.category && form.touched.category
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="category">
                            Select a category
                          </FormLabel>
                          <Select
                            {...field}
                            id="category"
                            focusBorderColor="teal.500"
                          >
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </Select>
                          <FormErrorMessage>
                            {form.errors.category}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Flex fontSize="sm">
                      <Text mr="2">Didn't find appropriate category?</Text>
                      <Text
                        color="teal.500"
                        onClick={onOpen}
                        _hover={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Create category
                      </Text>
                    </Flex>
                    <Stack mt="4">
                      <Button
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button>Cancel</Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
            <CreateCategoryDrawer onClose={onClose} isOpen={isOpen} />
          </Flex>
        </Stack>
      </Flex>
    </DashboardShell>
  );
}

export default CreateItem;
