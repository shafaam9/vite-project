import { Avatar, Box, Flex, Link, Tooltip} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo} from '../../assets/constants'
import { CgLogOut } from "react-icons/cg";
import {AiFillHome} from "react-icons/ai";

const Sidebar = () => {

  const sideBarItems = [
    {
      icon: <AiFillHome size={25}></AiFillHome>,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo/>,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo/>,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name='Jojo Siwa' src='/jojo.png' />,
      text: "Profile",
      link: "/asaprogrammer"
    }
  ]


  return (
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}
    >
    <Flex direction = {"column"} gap={10} w={"full"} height={"full"}>
      <Link to={"/"} as={RouterLink} pl={2} display={{base: "none", md:"block"}} cursor="pointer">
        <InstagramLogo></InstagramLogo>
      </Link>
      <Link to={"/"} as={RouterLink} p={2} display={{base: "block", md:"none"}} 
      borderRadius={6}
      _hover={{
        bg:"whiteAlpha.200"
      }}
      w={10}
      cursor="pointer">
        <InstagramMobileLogo />
      </Link>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sideBarItems.map((item, index) => (
          <Tooltip
          key={index}
          hasArrow
          label={item.text}
          placement="right"
          ml={1}
          openDelay={500}
          display={{base:'block', md:'none'}}>
            <Link
            display={"flex"}
            to={item.link || null}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            >
              {item.icon}
              <Box display={{base: "none", md:"block"}}>
                {item.text}
              </Box>
            </Link>
          </Tooltip>
        ))}

      </Flex>

      <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{base:'block', md:'none'}}>
            <Link
            display={"flex"}
            to={"/login"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            mt={'auto'}
            >
              <CgLogOut size={25}/>
              <Box display={{base: "none", md:"block"}}>
                Logout
              </Box>
            </Link>
          </Tooltip>
    </Flex>

    </Box>
  )
}

export default Sidebar