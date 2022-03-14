import { Button, Divider, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "src/components/ColorModeSwitcher";

// Top navbar
const Navbar = () => {
  return (
    <Flex p={6} borderBottom={"1px solid"} maxH={"72px"} mb={1}>
      <Spacer />
      <HStack>
        <ColorModeSwitcher />
        <Button colorScheme={"messenger"} size="lg">
          Войти
        </Button>
      </HStack>
    </Flex>
  );
};

export const UserIsPresent: React.FC = () => {
  return (
    <HStack spacing={5}>
      <Button>Мой профиль</Button>
      <Button size="md">Выйти</Button>
      <Button colorScheme="blue">Создать пост</Button>
    </HStack>
  );
};

export default Navbar;
