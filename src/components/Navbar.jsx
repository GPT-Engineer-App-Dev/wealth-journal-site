import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Link href="/" fontSize="2xl" fontWeight="bold">
            Financial Times
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="/">Home</Link>
            <Link href="/world">World</Link>
            <Link href="/business">Business</Link>
            <Link href="/markets">Markets</Link>
            <Link href="/opinion">Opinion</Link>
            <Link href="/tech">Tech</Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;