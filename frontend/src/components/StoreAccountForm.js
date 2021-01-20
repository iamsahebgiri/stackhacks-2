import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  InputGroup,
  InputRightElement,
  Link as UILink,
  Stack,
  Text,
  Flex,
  Spacer,
  createStandaloneToast,
} from "@chakra-ui/react";
import StoreAccountSchema from "../../schema/StoreAccountSchema";

function StoreAccountForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleClick = () => setShow(!show);
  const toast = createStandaloneToast();
  // const router = useRouter();
  return (
    <>
      <Flex>
        <Flex width="30%" fontWeight="600">
          Store Settings
        </Flex>
        <Box shadow="sm" width="70%" bg="white" rounded="md" p="4">
          <Formik
            initialValues={{
              storeName: "",
              shortDescription: "",
            }}
            validationSchema={StoreAccountSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              // axios
              //   .post("http://localhost:3030/api/users/login", {
              //     user: {
              //       ...values,
              //     },
              //   })
              //   .then((response) => {
              //     actions.setSubmitting(false);
              //     console.log(response.data.user.token);
              //     localStorage.setItem("token", response.data.user.token);
              //     router.push("/home");
              //   })
              //   .catch((error) => {
              //     const errors = error.response.data.errors;
              //     for (let key in errors) {
              //       toast({
              //         position: "bottom-left",
              //         title: "An error occurred.",
              //         description: errors[key],
              //         status: "error",
              //         duration: 9000,
              //         isClosable: true,
              //       })
              //     }
              //     actions.setSubmitting(false);
              //   });
            }}
          >
            {(props) => (
              <Form>
                <Stack spacing="4">
                  <Field name="storeName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.storeName && form.touched.storeName
                        }
                        isRequired
                      >
                        <FormLabel htmlFor="email">Store Name</FormLabel>
                        <Input
                          {...field}
                          id="storeName"
                          placeholder="Freddie's BBQ"
                          disabled={isDisabled}
                          focusBorderColor="teal.500"
                        />
                        <FormErrorMessage>
                          {form.errors.storeName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="shortDescription">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.shortDescription &&
                          form.touched.shortDescription
                        }
                        isRequired
                      >
                        <FormLabel htmlFor="email">Short description</FormLabel>
                        <Textarea
                          {...field}
                          id="shortDescription"
                          placeholder="Freddie's BBQ is known for it's quality and taste."
                          disabled={isDisabled}
                          focusBorderColor="teal.500"
                        />

                        <FormErrorMessage>
                          {form.errors.shortDescription}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Flex justifyContent="flex-end">
                    <Button
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      onClick={() => {
                        setIsDisabled((state) => !state);
                        if(!isDisabled) {
                            props.submitForm()
                        }
                      }}
                    >
                      {isDisabled ? "Edit" : "Save"}
                    </Button>
                  </Flex>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default StoreAccountForm;
