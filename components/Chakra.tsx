import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { FC } from "react";
import theme from "../lib/theme";

interface ChakraProps {
  cookies: any;
}

const Chakra: FC<ChakraProps> = ({ children, cookies }) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      cookies: context.req.headers.cookie ?? "",
    },
  };
};

export default Chakra;
