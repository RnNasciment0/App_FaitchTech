import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'



function SignUp() {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    faithCommunity: "",
  })

  const[showPassword, setShowPassword] = useState(false)
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
      onChange={(e) => setInput({...input, email: e.target.value})}/>

      <Input
      placeholder='nome de usuário'
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
      value={input.userName}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...input, userName: e.target.value})}/>

      <Input
      placeholder='Nome Completo'
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
      value={input.fullName}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...input, fullName: e.target.value})}/>


      <Input
      placeholder='nome de usuário'
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
      value={input.userName}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...input, userName: e.target.value})}/>

      <Input
      placeholder='Comunidade de Fé'
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
      value={input.faithCommunity}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInput({...input, faithCommunity: e.target.value})}/>

      <InputGroup>
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
        fontSize={"20px"}
        type={showPassword ? "text" : "password"}
        value={input.password}
        size={"sm"}
        color={"black"}
        onChange={(e) => setInput({...input, password: e.target.value})}/>

        <InputRightElement height={"full"}>
          <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ?  <ViewIcon color={"black"}/> : <ViewOffIcon color={"black"}/>}
          </Button>
        </InputRightElement>
      </InputGroup>
    
      <Button
      w={"full"}
      backgroundColor={"#FFA888"}
      size={"sm"}
      fontSize={"20px"}
      color={"black"}
      fontFamily={"Inter, sans-serif"}
      _hover={{backgroundColor: "#FF8866"}}
      >
        Cadastrar
      </Button>
    
    </>
  )
}

export default SignUp
