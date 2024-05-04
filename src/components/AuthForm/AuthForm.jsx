import { Box, VStack, Input, Image, Button, Text, HStack} from '@chakra-ui/react'
import {useState} from 'react';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
  <>
    <Box border = {"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src = '/logo.png' h={24} cursor={"pointer"}alt = 'Instagram'/>
        <Input placeholder='Email' fontSize={14} type='email'
        value={inputs.email}
        onChange={(e) => setInputs({...inputs, email: e.target.value})}
        />
        <Input placeholder='Password' fontSize={14}
          type='password' value={inputs.password} 
          onChange={(e) => setInputs({...inputs, email: e.target.value})}/>

    <HStack spacing='24px'>
    <Link to="/home">
      <Button colorScheme='blue'>Log In</Button>
    </Link>

      <Button colorScheme='blue'>Sign Up</Button> 
    </HStack>
    

      </VStack>
    </Box>
  </>
  );
}

export default AuthForm;