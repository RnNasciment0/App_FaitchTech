import { Box, Container, Flex, Image, Text, VStack, Input, Button} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function ResetPassword() {
    const[input, setInput] = useState({
        email: "",
    });
  return (
    <Flex
    minH={'100vh'}
    justifyContent={'center'}
    alignItems={'center'}
    px={4}
    >
        <Container
        maxW={"container.md"}
        padding={0}
        >
            <VStack
            justifyContent={'center'}
            alignItems={'center'}
            >
                <Box
                width={["100%", "75%", "50%"]}
                height={"auto"}
                margin={"0 auto"}
                >
                    <Image
                    src='./Mission.png'
                    width={"100%"}
                    height={"auto"}
                    margin={"0 auto"}
                    alt='Mission App Logo'
                    my={35}
                    />
                </Box>
                <VStack align={"stretch"}>
                    <Box
                    border={"1px solid black"}
                    borderRadius={4}
                    padding={5}
                    marginBottom={10}
                    >
                        <Box
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={2}
                        my={2}
                        width={"full"}
                        >
                            <Text
                            textAlign={"center"}
                            fontSize={"2xl"}
                            fontWeight={"bold"}
                            fontFamily={"Inter, sans-serif"}
                            >
                                Redefinir Senha
                            </Text>
                        </Box>
                        <Box
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={2}
                        my={1}
                        w={"300px"}
                        h={"auto"}
                        display={"flex"}
                        flexDirection={"column"}
                        >
                            <Text
                            justifyContent={'center'}
                            textAlign={"center"}
                            fontSize={"17px"}
                            fontFamily={"Inter, sans-serif"}
                            >
                                Coloque o seu endereço de email e enviaremos um link para você redefinir a sua senha.
                            </Text>
                        </Box>
                        <VStack spacing={4}>
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
                            onChange={(e) => setInput({...input, email: e.target.value})}
                            />
                            <Button
                            width={"full"}
                            backgroundColor={"#FFA888"}
                            color={"black"}
                            size={"sm"}
                            fontSize={"17px"}
                            fontFamily={"Inter, sans-serif"}
                            _hover={{backgroundColor: "#FF8866"}}
                            >
                                Enviar Link para Redefinir Senha

                            </Button>
                        </VStack>
                    </Box>

                    <Link to={"/donorSignPage"}>
                        <Button
                        w={"full"}
                        backgroundColor={"#FFA888"}
                        size={"sm"}
                        fontSize={"17px"}
                        fontFamily={"Inter, sans-serif"}
                        _hover={{backgroundColor: "#FF8866"}}
                        borderRadius={4}
                        border={"1px solid black"}
                        padding={5}
                        >
                            <Text
                            color={"black"}
                            fontSize={"20px"}
                            fontFamily={"Inter, sans-serif"}
                            cursor={"pointer"}
                            >
                                Voltar para o Login
                            </Text>
                        </Button>
                    </Link>
                </VStack>
            </VStack>
        </Container>

    </Flex>
  )
}

export default ResetPassword
