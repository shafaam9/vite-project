import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

export const FeedPosts = () => {
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false)
    }, 2000)
  },[])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost 
      img= "/nathanTwo.png" username="jojosiwa1"
      avatar = "/girl.png"/>
      <FeedPost 
      img= "/shafaa.png" username="jojosiwa2"
      avatar = "/jojosiwaTwo.png"/>
      <FeedPost 
      img= "/aadit.png" username="jojosiwa3"
      avatar = "/girlTwo.png"/>
    </Container>
  )
}
