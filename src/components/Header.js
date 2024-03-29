import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  }
];

const Header = () => {

  const headerRef = useRef(null);

  useEffect(() => {
    let previousScrollPos = window.scrollY;
    console.log("prev position", previousScrollPos);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log("current position", currentScrollPos);
      const headerElement = headerRef.current;
      console.log("header element", headerElement.style);
      if (!headerElement) {
        return;
      }
      if (previousScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)"
      } else {
        headerElement.style.transform = "translateY(-200px)"
      }
      previousScrollPos = currentScrollPos;

    }

    window.addEventListener('scroll', handleScroll);

    //clean up effect
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={6}>
              {
                socials.map(s =>
                  <a key={s.url} href={s.url}>
                    <FontAwesomeIcon icon={s.icon} size="2x" />
                  </a>
                )
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#project" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
