import { Link, Text, Box } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { IoIosLogOut } from "react-icons/io"


function LogOut({ sizeOfIcon, sizeOfText }) {
  return (
    <Box
    display={"flex"}
    to={"/"}
    as={RouterLink}
    alignItems={"center"}
    flexDirection={"column"}
    _hover={{bg: "gray.100"}}
    borderRadius={4}
    p={2}
    w={{base: 10, md: "full"}}
    justifyContent={"center"}
    >
        <Link to={"/LandingPage"}>
            <IoIosLogOut size={sizeOfIcon} />
            <Text
            color={"black"}
            fontSize={sizeOfText}
            >
                Sair
            </Text>
        </Link>
    
    </Box>
  )
}

export default LogOut
