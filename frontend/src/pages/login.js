import React from "react";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Link as UILink,
  Stack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Container } from "../components/Container";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase("Email has to all lowercase.")
    .email("Enter a valid email address.")
    .required("Email can't be blank."),
  password: Yup.string()
    .required("Password can't be blank")
    .min(8, "Password must be at least 8 characters long."),
});

const SigninForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
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
          </Stack>
          <Flex>
            <Spacer />
            <Button
              mt={12}
              width="100%"
              colorScheme="green"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Signin
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

const SignIn = () => {
  return (
    <Container height="100vh">
      <Box width={["100%", "50%"]} p={["4", "32"]}>
        <Box>
          <Heading mb="6">Sign In</Heading>
          <SigninForm />
          <Text>
            Don't have an account?{" "}
            <Link href="/register">
              <UILink color="teal.500">Register</UILink>
            </Link>
          </Text>
        </Box>
      </Box>
      <Box
        bg="gray.600"
        display={["none", "block"]}
        width="50%"
        height="100vh"
        bgPosition="center"
        bgSize="cover"
        bgImg="url('https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=100')"
      />
    </Container>
  );
};

export default SignIn;
