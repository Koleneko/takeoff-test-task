import * as React from "react";
import { Box, ChakraProvider, Grid, Text, theme } from "@chakra-ui/react";
import Navbar from "src/components/Navbar";
import Login from "src/components/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/store";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <Box fontSize="xl" minH={"100vh"}>
          <Navbar />
          <Box p={3} borderRadius={"lg"} textAlign="center">
            <Text>{process.env.REACT_APP_API}</Text>
            <Login />
          </Box>
        </Box>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
