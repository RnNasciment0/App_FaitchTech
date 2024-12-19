// Code to render the AuthSocialProjectForm page
import { Box, Container, Flex, VStack, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Login from '../../../components/AuthFormsComponents/Login'
import SignUp from '../../../components/AuthFormsComponents/SignUp'
import { Link } from 'react-router-dom'

function AuthSocialProjectForm() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Flex minH="100vh" justifyContent={"center"} alignItems={"center"} px={4}>
    <Container maxH={"Container.md"} padding={0}>
      <VStack justifyContent={"center"} alignItems={"center"} gap={4}>
      <Box width={["100%", "75%", "50%"]} 
                height={"auto"} 
                margin={"0 auto"}>


                    <Image src={"./Mission.png"} 
                    width={"100%"} 
                    height={"auto"} 
                    alt="Mission App logo" />
        </Box>
        <VStack spacing={4} align={"stretch"}>
            <Box
              border={"1px solid black"}
              borderRadius={4}
              padding={5}
              >
                <Flex
                alignItems={"center"}
                justifyContent={"center"}
                >
                  <Box
                  mx={2}
                  fontFamily={"Inter, sans-serif"}
                  fontSize={"20px"}
                  >
                    {isLogin ? "Quer fazer parte da plataforma?" : "Já faz parte?"}
                  </Box>
                  <Box
                  color={"orange.700"}
                  fontFamily={"Inter, sans-serif"}
                  fontSize={"20px"}
                  cursor={"pointer"}
                  onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Cadastre-se" : "Faça login"}
                  </Box> 
                </Flex>
              </Box>
              <Box
          border={"1px solid black"}
          borderRadius={4}
          padding={1}
          >
            <VStack alignItems={"center"} justifyContent={"center"}>
              <Text 
              color={"black"} 
              fontSize={"20px"}
              fontFamily={"Inter, sans-serif"} 
              cursor={"pointer"}
              >
                Apoiador ou Missionário:
              </Text>
              <Box mx={2}>
                <Link to={"/LandingPage"}>
                  <Text
                color={"orange.600"}
                fontSize={"20px"}
                fontFamily={"Inter, sans-serif"}
                cursor={"pointer"}>
                  Página de inicial
                  </Text>
                </Link>
              </Box>
            </VStack>
          </Box>
          <Box
          border={"1px solid black"}
          borderRadius={4}
          padding={5}
          >
            {isLogin ? (null) : (
              <Box
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              my={2}
              w={"full"}>
                <Text
                textAlign={"center"}
                fontSize={"2xl"}
                fontFamily={"Inter, sans-serif"}
                fontWeight={"bold"}
                >
                  Cadastro de Missionário

                </Text>
              </Box>
            )}
            <VStack spacing={4} align={"stretch"}>
              {isLogin ? <Login /> : <SignUp />}
            </VStack>

            {/* TEXTO OU*/}
            <Flex 
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
            >

              <Box flex={2} h={"1px"} bg={"black"}/>
              <Text
              my={1}
              color={"black"}
              fontFamily={"Inter, sans-serif"}
              fontWeight={"bold"}
              >
                OU
              </Text>
              <Box flex={2} h={"1px"} bg={"black"}/>
              </Flex>
              <Flex
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              my={1}
              w={"full"}
              >
                <Image src={"./googleLogo.png"} h={"6"} alt="Google Logo" cursor={"pointer"} />
                <Text
                color={"blue.600"}
                fontSize={"20px"}
                fontFamily={"Inter, sans-serif"}
                cursor={"pointer"}
                >
                  Se cadastrar com Google
                </Text>
              </Flex>

              {isLogin ? (
                <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                marginTop={7}
                w={"full"}
                >
                  <Link to={"/resetPassword"}>
                    <Text
                    color={"orange.700"}
                    fontSize={"20px"}
                    fontFamily={"Inter, sans-serif"}
                    cursor={"pointer"}>
                      Esqueceu a senha?
                    </Text>
                  </Link>
                </Flex>
              ) : (null)}
          </Box>

          
          
        </VStack>

      </VStack>
    </Container>

  </Flex> 
  )
}

export default AuthSocialProjectForm