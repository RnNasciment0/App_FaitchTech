import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import MissionaryHeader from '../../../components/MissionaryComponents/MissionaryHeader/MissionaryHeader'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Campaign from '../../../components/MissionaryComponents/Campaign/Campaign'
import MyWork from '../../../components/MissionaryComponents/MyWork/MyWork'
import NewPost from '../../../components/MissionaryComponents/NewPost/NewPost'

function MissionaryHomePage() {
    const {username} = useParams()
    const [activeTab, setActiveTab] = useState("Meu Projeto")
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

  return (
    <Flex
    direction={"column"}
    flex={1}
    width={"100%"}
    minHeight={0}
    mt={4}
    >
        <Flex
        bg={"#FFEFE759"}
        flex={1}
        width={"100%"}
        direction={"column"}
        minHeight={0}
        >
            <Container
            maxW={"container.lg"}
            flex={1}
            p={0}
            overflow={"hidden"}
            minHeight={0}
            >
                <VStack gap={5} width={"100%"} align={"stretch"}>
                    <Box flex={2} mt={10}>
                        <MissionaryHeader activeTab={activeTab} handleTabClick={handleTabClick} />
                    </Box>
                    <Box
                    
                    >
                        {activeTab === "Meu Projeto" && <MyWork/>}
                        {activeTab === "Campanha" && <Campaign/>}
                        {activeTab === "Postagens" && <NewPost/>}

                    </Box>

                </VStack>

            </Container>

        </Flex>
        
    </Flex>
  )
}

export default MissionaryHomePage;
