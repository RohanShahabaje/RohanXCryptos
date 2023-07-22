import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Loader from "../components/Loader"
import { Image } from '@chakra-ui/react';
import ErrorComponenet from '../components/ErrorComponent';
import { Link } from 'react-router-dom';


const CoinCard =({name,img,id,symbol,price,currencySymbol="₹"})=>(
    <Link to={`/coin/${id}`}>
  
      <VStack width={52} shadow={"dark-lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"}
      m={"4"} 
      css={{
        "&:hover":{
          transform:"scale(1.1)",
        }
      }}
      
      >
  
        <Image src={img}
         w={"10"} 
         h={"10"} 
         objectFit={"contain"} 
         alt={'exchange'}/>
       
        <Heading size={"md"} noOfLines={1}> {symbol} </Heading>
        
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
      
      
      
      
      
      
      
      
      
  
  
      </VStack>
  
  
  
    </Link>
  );
  
  

export default CoinCard