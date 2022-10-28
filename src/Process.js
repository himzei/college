import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

export default function Process() {
  return (
    <VStack w="full" bg="gray.100" py={20} spacing={16}>
      {[1, 2, 3, 4].map((item) => (
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent="center"
          w="full"
        >
          <Box position="absolute" w="full" top={"55%"} h={0.2} bg="black" />
          <Grid w="7xl" templateColumns={"1fr 1fr"} gap={4}>
            <GridItem zIndex={2}>
              {/* <Box w="auto" bg="white" h="full" bg="gray.100"> */}
              <Text
                as="span"
                fontSize={72}
                fontWeight={700}
                py={2}
                px={4}
                bg="gray.100"
              >
                Fundamental
              </Text>
              {/* </Box> */}
            </GridItem>
            <GridItem zIndex={2}>
              <VStack
                display={"flex"}
                justifyContent="center"
                w="full"
                bg="gray.100"
                h="full"
                px={4}
              >
                <Text>
                  근원과 본질에 충실한 교육. 논리적인 사고와 자유로운 상상으로
                  주어진 문제를 독창적인 관점으로 정의하고 해결할 수 있는
                  디자이너로서의 기반 능력 함양
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </VStack>
  );
}
