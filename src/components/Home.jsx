import { Box, Image, Text, transition } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1000px", // Add perspective for 3D effect
        }}
        animate={{
          rotateY: 360, // Add rotateY property for flip effect
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear", // Use linear easing for a smooth circular motion
        }}
      >


        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      
      </motion.div>
      

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        RohanXCrypto
      </Text>
    </Box>
  );
};

export default Home;