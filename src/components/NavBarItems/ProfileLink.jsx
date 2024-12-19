import { Avatar, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5"


function ProfileLink({ sizeOfIcon, sizeOfText }) {
  return (
    <Link
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
        <Avatar size={"xs"} />
        <Text
        color={"black"}
        fontSize={sizeOfText}
        >
            Perfil
        </Text>
    
    </Link>
  )
}

export default ProfileLink
