import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { FC } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";

interface LinkItemProps {
  href: string;
  path: any;
  target?: string;
  display?: string;
  alignItems?: string;
  style?: any;
  pl?: number;
  children?: React.ReactNode;
}

const LinkItem: FC<LinkItemProps> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

interface NavBarProps {
  path: any;
}

const Navbar: FC<NavBarProps> = (path, ...props) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Box>
          <LinkItem
            target="_blank"
            href="https://github.com/erkanercan/erkanercandev-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
