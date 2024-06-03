import { Box, Image, Text, Stack, Link, useColorModeValue } from "@chakra-ui/react";

const ArticleCard = ({ title, image, link }) => {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box
        h={"210px"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
      >
        <Image
          src={image}
          layout={"fill"}
        />
      </Box>
      <Stack>
        <Text
          color={"gray.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          News
        </Text>
        <Link href={link} fontSize={"2xl"} fontWeight={"bold"}>
          {title}
        </Link>
      </Stack>
    </Box>
  );
};

export default ArticleCard;