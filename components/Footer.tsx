import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Erkan Ercan. All Rights Reserved. <br />
      Inspired from{" "}
      <a href="https://github.com/craftzdog/craftzdog-homepage" target="_blank">
        craftzdog
      </a>
    </Box>
  );
};

export default Footer;
