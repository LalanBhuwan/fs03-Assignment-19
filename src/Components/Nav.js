import React from "react";
import { Flex, Box} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <Flex
      spacing="24px"
      backgroundColor="black"
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
      m="10px"
      justify='space-between' 
      align='center'
      h='50px'
      p={6}
    
    >
        <Flex
        ml= "3rem"
        >
        <Box style={{color: "#00DFA2", fontSize: "2rem"}}>Bhuwan</Box>
        </Flex>
        
        <Flex
        fontSize="1.2rem"
        gap="5rem"
        mr= "3rem"
        >
        <Box  h="80%"  cursor='pointer'>
        <NavLink to='/' style={{textDecoration: "none", color: "white"}}>Home</NavLink>
       
      </Box>
      <Box  h="80%"  cursor='pointer'>
      <NavLink to='/product' style={{textDecoration: "none", color: "white"}}>Product</NavLink>
      </Box>
      <Box  h="80%"  cursor='pointer'>
      <NavLink to='/cart' style={{textDecoration: "none", color: "white"}}>Add To Cart</NavLink>
      </Box>

        </Flex>
      
    </Flex>
  );
}

export default Nav;