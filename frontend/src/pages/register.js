import React from "react";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Link as UILink,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import clsx from "clsx";
import { Icon } from "@chakra-ui/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Container } from "../components/Container";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username can't be blank."),
  email: Yup.string()
    .lowercase("Email has to all lowercase.")
    .email("Enter a valid email address.")
    .required("Email can't be blank."),
  password: Yup.string()
    .required("Password can't be blank")
    .min(8, "Password must be at least 8 characters long."),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Passwords do not match.",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

const SignupForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [isEmployee, setIsEmployee] = React.useState(true);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing="4">
            <Box>
              <FormControl isRequired>
                <FormLabel>I am a/an</FormLabel>
              </FormControl>
              <Stack direction={["column", "row"]}>
                <Box
                  bg={isEmployee ? "teal.50" : "gray.100"}
                  p="2"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="2px solid"
                  borderColor={isEmployee ? "teal.400" : "gray.200"}
                  borderRadius="6px"
                  width={["100%", "50%"]}
                  onClick={() => setIsEmployee(true)}
                  cursor="pointer"
                  userSelect="none"
                >
                  <Text>Employee</Text>
                  {isEmployee ? <Icon as={IoCheckmarkCircle} color="teal.400" /> : (
                    null
                  )}
                </Box>
                <Box
                  bg={isEmployee ? "gray.100" : "teal.50"}
                  p="2"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="2px solid"
                  borderColor={isEmployee ? "gray.200" : "teal.400"}
                  borderRadius="6px"
                  width={["100%", "50%"]}
                  onClick={() => setIsEmployee(false)}
                  cursor="pointer"
                  userSelect="none"
                >
                  <Text>Vendor</Text>
                  {isEmployee ? (
                    null
                  ) : <Icon as={IoCheckmarkCircle} color="teal.400" />}
                </Box>
              </Stack>
            </Box>

            <Field name="username">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                  isRequired
                >
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" placeholder="iamsahebgiri" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  isRequired
                >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="iamsahebgiri@gmail.com"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack direction={["column", "row"]}>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                    isRequired
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="password"
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FormLabel>
                    <Input
                      {...field}
                      id="confirmPassword"
                      type={show ? "text" : "password"}
                      placeholder="Retype your password"
                    />
                    <FormErrorMessage>
                      {form.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
          </Stack>
          <Flex>
            <Spacer />
            <Button
              mt={[6, 12]}
              colorScheme="green"
              isLoading={props.isSubmitting}
              type="submit"
              width={["100%","40%"]}
            >
              Register
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

const SignUp = () => {
  return (
    <Container height="100vh">
      <Box
        bg="gray.600"
        display={["none", "block"]}
        width="50%"
        height="100vh"
        bgPosition="center"
        bgSize="cover"
        bgImg="url('https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100')"
      />
      <Box width={["100%", "50%"]} p={["4", "16"]}>
        <Box>
          <Heading mb="6">Register</Heading>
          <SignupForm />
          <Text mt="3" mb="3">
            Alredy have an account?{" "}
            <Link href="/login">
              <UILink color="teal.500">Sign In</UILink>
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
