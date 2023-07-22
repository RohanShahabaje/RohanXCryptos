import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Heading, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import Loader from "../components/Loader"
import { Image } from '@chakra-ui/react';
import ErrorComponenet from '../components/ErrorComponent';
import { Link } from 'react-router-dom';
import CoinCard from './CoinCard';


const Coins = () => {
  

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] = useState("inr");


  const currencySymbol = currency == "inr"?"₹":currency=="eur"?"€":"$" 
 
  const changepage = (page)=>{
    setPage(page)
    setLoading(true)

  }
 
  const btns = new Array(132).fill(1) // 1 is random value kuch bhi do
 
  useEffect(() => {
    
    const fetchCoins = async () =>{

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);


        setCoins(data)
        setLoading(false);
        console.log(data);   
      
      } catch (error) {
        
        setError(true)
        setLoading(false)
        
      }
     
    };

    fetchCoins();
  
}, [currency, page]) // jaise hi value badhle hame value fetch karna padega

  if (error) 
  return <ErrorComponenet message={"Error While Fetching Coins"} />;

  return(
    <Container maxW={"container.xl"}>
      {loading ? (
      <Loader /> ):(
    
    <>




        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={'inr'}>₹ INR</Radio>   
            <Radio value={'eur'}>€ EUR</Radio> 
            <Radio value={'usd'}>$ USD</Radio> 
          </HStack>
        </RadioGroup>
    <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
      {
        coins.map((i)=>(
          // <div>{i.name}</div>

          <CoinCard
          id={i.id} 
          name={i.name}
          price={i.current_price}
          img={i.image}
          symbol={i.symbol}
          currencySymbol={currencySymbol} 
          />
        ))}
    </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
           
           {
            btns.map((item,index)=>(
              <Button 
              key={index}
              onClick={()=> changepage(index+1)}
              bgColor={"purple.700"}
              color={"white"}
              
              >{index+1}</Button>



            ))
           }




           
          </HStack>
    
     </>)}
    
    
    
    </Container>
  );
  };



export default Coins 