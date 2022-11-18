import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack maxW='md' bg='white' borderRadius='lg' alignItems='stretch'>
        <Image src={imageSrc} borderRadius='lg'/>
        <Heading pl='4' color='black' size='sm'>{title}</Heading>
        <Text pl='4' color='gray.600'>{description}</Text>
        <HStack p='4'>
          <Text color='black' fontSize='sm'>See more </Text>
          <FontAwesomeIcon icon={faArrowRight} size='sm' color='black'/>
        </HStack>
      </VStack>
  )
};

export default Card;
