import React from "react";
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
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
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
              mt={12}
              colorScheme="green"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Register
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
      <Box
        bg="gray.600"
        display={["none", "block"]}
        width="50%"
        height="100vh"
        bgPosition="center"
        bgSize="cover"
        bgImg="url('https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100')"
      />
      <Box width={["100%", "50%"]} p={["4","8"]}>
        <Box>
          <Heading mb="6">Register</Heading>
          <SignupForm />
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
