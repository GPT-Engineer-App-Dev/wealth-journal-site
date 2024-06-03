import { Container, SimpleGrid, Box, VStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW={"7xl"} p={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
          <ArticleCard
            title="Featured Article 1"
            image="https://via.placeholder.com/400"
            link="#"
          />
          <ArticleCard
            title="Featured Article 2"
            image="https://via.placeholder.com/400"
            link="#"
          />
        </SimpleGrid>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">Trending Articles</Heading>
          <Text>Trending Article 1</Text>
          <Text>Trending Article 2</Text>
          <Text>Trending Article 3</Text>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;