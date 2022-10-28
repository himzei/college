import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export default function Outline() {
  return (
    <Box display={"flex"} justifyContent={"center"} w="100%" my={20}>
      <Box w="7xl">
        <Box w="full" h={1} bg="gray.600" />
        <Grid templateColumns={"1fr 3fr"}>
          <GridItem w="100%" py={8} fontWeight={600} pl={2}>
            행사명
          </GridItem>
          <GridItem w="100%" py={8}>
            영덕시 취업박람회
          </GridItem>
        </Grid>
        <Box w="full" h={"1px"} bg="gray.400" />
        <Grid templateColumns={"1fr 3fr"}>
          <GridItem w="100%" py={8} fontWeight={600} pl={2}>
            행사일시
          </GridItem>
          <GridItem w="100%" py={8}>
            2022년 10월 10일 12:00 ~ 17:00
          </GridItem>
        </Grid>
        <Box w="full" h={"1px"} bg="gray.400" />
        <Grid templateColumns={"1fr 3fr"}>
          <GridItem w="100%" py={8} fontWeight={600} pl={2}>
            행사장소
          </GridItem>
          <GridItem w="100%" py={8}>
            영덕 시민체육관
          </GridItem>
        </Grid>
        <Box w="full" h={"1px"} bg="gray.400" />
        <Grid templateColumns={"1fr 3fr"}>
          <GridItem w="100%" py={8} fontWeight={600} pl={2}>
            참여대상
          </GridItem>
          <GridItem w="100%" py={8}>
            취업을 고민하고 있는 모든 취업준비생
          </GridItem>
        </Grid>
        <Box w="full" h={"1px"} bg="gray.400" />
        <Grid templateColumns={"1fr 3fr"}>
          <GridItem w="100%" py={8} fontWeight={600} pl={2}>
            특전
          </GridItem>
          <GridItem w="100%" py={8}>
            <Text></Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
