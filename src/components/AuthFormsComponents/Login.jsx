// Desc: Login component for user to login to the app
import { useState } from 'react'
import {em} from 'framer-motion/client'
import { border, Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  return (
    <>
      <Input
      placeholder='Email'
      sx={{
        "::placeholder": {
          color: 'rgba(0, 0, 0, 0.5)',
        },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      border={"1px solid #b0b0b0"}
      width={"100%"}
      height={"40px"}
      borderRadius={"4px"}
      _hover={{border: "1px solid black"}}
      fontSize={"20px"}
      type="email"
      value={input.email}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...inputs, email: e.target.value})}

      />



      <Input
      placeholder='Senha'
      sx={{
        "::placeholder": {
          color: 'rgba(0, 0, 0, 0.5)',
        },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      border={"1px solid #b0b0b0"}
      width={"100%"}
      height={"40px"}
      borderRadius={"4px"}
      _hover={{border: "1px solid black"}}
      fontSize={20}
      type="password"
      value={input.password}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...inputs, password: e.target.value})
      }
      />
      <Button
      width={"full"}
      height={"50px"}
      borderRadius={"10px"}
      backgroundColor={"#FFA888"}
      color={"black"}
      size={"sm"}
      fontSize={"20px"}
      fontFamily={"Inter, sans-serif"}
      _hover={{backgroundColor: "#FF8866"}}
      >
        Log in
      </Button>

    </>
  )
}

export default Login
