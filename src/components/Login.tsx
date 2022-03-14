import {
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Divider,
  Center,
  Box,
  useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useLoginMutation } from "src/store/features/user";

function PasswordInput({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [login, { isLoading }] = useLoginMutation();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  return (
    <Center h="500px">
      <VStack spacing="4">
        <Box>Hint: enter anything, or leave it blank and hit login</Box>
        <InputGroup>
          <Input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Email"
          />
        </InputGroup>

        <InputGroup>
          <PasswordInput onChange={handleChange} name="password" />
        </InputGroup>
        <Button
          isFullWidth
          onClick={async () => {
            try {
              const user = await login(formState).unwrap();
              console.log(user);
              // dispatch(setCredentials(user));
              // navigate("/");
            } catch (err) {
              toast({
                status: "error",
                title: "Error",
                description: "Oh no, there was an error!",
                isClosable: true,
              });
            }
          }}
          colorScheme="green"
          isLoading={isLoading}
        >
          Login
        </Button>
        <Divider />
        {/*<ProtectedComponent />*/}
      </VStack>
    </Center>
  );
};

export default Login;
