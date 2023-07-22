import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/myimg.png" 


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"l"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Welcome to our platform, the premier crypto trading app in India, where we offer real-time Bitcoin information and interactive charts to help you stay on top of the crypto market. Our user-friendly interface ensures easy navigation and access to crucial data.

        
            @Rohan_shahabaje
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;