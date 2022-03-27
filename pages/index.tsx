import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoMailOpen,
  IoLogoLinkedin,
} from "react-icons/io5";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import Image from "next/image";
import { NextPage } from "next";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import { GridItem } from "../components/GridItem";
import ArticleLayout from "../components/layouts/Article";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => (
  <ArticleLayout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hi, I&apos;m a full-stack developer based in Turkey!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Erkan Ercan
          </Heading>
          <p>Full Stack Engineer, Blockchain Enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/erkan.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Erkan is a creative full-stack engineer with over{" "}
          <b>four years of experience</b>, based in Turkey. He is passionate
          about <b>web development</b>, <b>blockchain</b>,{" "}
          <b>and a fan of dogs</b>. Erkan has produced robust code for
          high-volume companies in <b>Turkey</b>, the <b>USA</b>, and{" "}
          <b>Japan</b> in{" "}
          <Link href="https://www.fill-labs.com/">Fill-Labs</Link> for 3 years.
          A fast-paced learner with a true mentor and a well-cultured team.
          Eager to learn new technologies and work with a good team. Currently
          living in Turkey and worked remotely for a DeFi company on his last
          job.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Burdur, Turkey.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from university as a computer engineer.
        </BioSection>
        <BioSection>
          <BioYear>Oct 2018 - Oct 2021</BioYear>
          Worked at <Link href="https://www.fill-labs.com/">Fill-Labs</Link> as
          a Full Stack Engineer.
        </BioSection>
        <BioSection>
          <BioYear>Oct 2021 - Apr 2022</BioYear>
          Worked at a DeFi company as a Full Stack Engineer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Web, Open Source, Blockchain and Communicating with people.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/erkanercan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @erkanercan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/erkan-ercan/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Erkan Ercan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/erkanercandev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @erkanercandev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/erkanercandev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @erkanercandev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:erkanercandev@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOpen />}
              >
                erkanercandev@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </ArticleLayout>
);

export default Home;
