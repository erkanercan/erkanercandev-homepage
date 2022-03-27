import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

interface MainLayoutProps {
  router: any;
}

const MainLayout: FC<MainLayoutProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erkan Ercan's Homepage" />
        <meta name="author" content="Erkan Ercan" />
        <meta name="author" content="erkanercandev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@erkanercandev" />
        <meta name="twitter:creator" content="@erkanercandev" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Erkan Ercan's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Erkan Ercan - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
