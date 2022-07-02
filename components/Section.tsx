import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { FC } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface SectionProps {
  delay?: number;
  children?: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: "0.8", delay: delay.toString() }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
