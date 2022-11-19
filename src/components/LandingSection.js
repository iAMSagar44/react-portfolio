import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sagar!";
const bio1 = "A fullstack developer";
const bio2 = "specialised in React and Springboot";
const imgURL = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='xl' src={imgURL} />
    <VStack spacing={10}>
      <Heading size='md'>{greeting}</Heading>
      <Heading>{bio1}</Heading>
    </VStack>
    <Heading>{bio2}</Heading>

  </FullScreenSection>
);

export default LandingSection;
