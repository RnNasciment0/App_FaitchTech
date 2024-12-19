import { Box, Flex, VStack } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { useRef, useState, useEffect } from 'react'
import BottomBar from '../../components/BottomBar/BottomBar'

function pageLayout({children}) {
  const{pathname} = useLocation() // nome da rota
  const canRenderNavBar = pathname !== "/LandingPage" 
  && pathname !== "/resetPassword"
  && pathname !== "/donorSignPage" 
  && pathname !== "/missionarySignPage" 
  && pathname !== "/socialProjectSignPage";
  const canRenderBottomBar = pathname !== "/LandingPage" 
  && pathname !== "/resetPassword"
  && pathname !== "/donorSignPage" 
  && pathname !== "/missionarySignPage" 
  && pathname !== "/socialProjectSignPage";

  const[showNavBar, setShowNavBar] = useState(true)
  const[isLargerThanBase, setIsLargerThanBase] = useState(window.innerWidth >= 1000)
  const lastScrolly = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      const handleResize = () => {
        const isLargerScreen = window.innerWidth >= 1000
        setIsLargerThanBase(isLargerScreen)

        if(isLargerScreen) {
          setShowNavBar(true)
        }
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1000) {
        if (window.scrollY > lastScrolly.current) {
          setShowNavBar(false)
        } else {
          setShowNavBar(true)
        }
        lastScrolly.current = window.scrollY
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  
  }, [])

  return (
    <VStack minH={"100vh"} spacing={0}>
        {canRenderNavBar && (
          <Box
          w={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          >
            <NavBar isLargerThanBase ={isLargerThanBase} />

          </Box>
        )}
        
        <Flex
        direction={"column"}
        flex={1}
        width={"100%"}
        mx={"auto"}
        mt={canRenderNavBar ? "15px" : "0"}
        overflow={"hidden"}
        position={"relative"}
        >
          <Flex
          flex={1}
          overflowY={"auto"}
          width={"100%"}
          direction={"column"}
          >
            {children}

            
          </Flex>

        </Flex>
        {canRenderBottomBar && !isLargerThanBase && showNavBar && (
          <BottomBar />
        )}

    </VStack>
  )
}

export default pageLayout
