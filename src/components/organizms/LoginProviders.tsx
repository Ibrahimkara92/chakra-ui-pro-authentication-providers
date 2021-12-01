import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaForumbee, FaGit, FaGithub, FaGitSquare } from 'react-icons/fa';

function LoginProviders() {
    return (
        <Box
            flexDir="column"
            py={10}
            px={10}
        >
            <Text
                maxW="150vh"
                mt={100}
                fontSize="2xl"
            >Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Box
                maxW="lg"
                display="flex"
                p="2"
                mt={5}
            >
                <Avatar src="avatar-1.jpg" />
                <Box
                    flexDir="column"
                    ml={5}
                    fontWeight='semibold'
                    letterSpacing='wide'
                >
                    <Text
                        fontSize='lg'
                    >İbrahim Kara</Text>
                    <Text
                        color="gray.500"
                        fontSize='sm'
                    >VP, Product and Engineering @ Wakanda</Text>
                </Box>
          
            </Box>
            <Box
                maxW="lg"
                display="flex"
                justifyContent="space-between"
                mt={200}
            >
                <Box display="flex" color="gray.500" p="2"><FaGitSquare size="30px" /> <Text ml={15}  fontSize="xl" >Wakanda</Text> </Box>
                <Box display="flex" color="gray.500" p="2"><FaGithub size="30px" /> <Text ml={15}   fontSize="xl" >Chat Monkey</Text> </Box>
                <Box display="flex" color="gray.500" p="2"><FaGit size="30px" /> <Text ml={15}   fontSize="xl" >Lighthouse</Text> </Box>
                
                
            </Box>
        </Box>
    );
}

export default LoginProviders;