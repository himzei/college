import {
  Box,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function Business() {
  return (
    <Box display={"flex"} justifyContent={"center"} w="100%" my={20}>
      <Box w="7xl">
        <Grid templateColumns={"1fr 1fr 1fr"} gap={8}>
          {[1, 2, 3].map((item) => (
            <GridItem>
              <VStack alignItems={"flex-start"} spacing={4}>
                <Stack
                  w="full"
                  h={72}
                  bg="gray.100"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BsFillCameraReelsFill size={120} />
                </Stack>
                <VStack alignItems={"flex-start"} spacing={4} p={4}>
                  <Box letterSpacing={-1}>
                    <Text fontSize={20} fontWeight={600}>
                      조형대 학생회
                    </Text>
                  </Box>
                  <Box>
                    <Text letterSpacing={-1}>
                      안녕하세요, 제 29대 조형대학 학생회 [New : Turn] 입니다.
                      조형대학 학생회 [New : Turn]은 변화된 일상 속에서
                      익숙하지만 또 하나의 새로움을 찾으려 합니다. 낯설지만
                      익숙한 일상 속에서 저희는 학우 여러분의 소중한 말
                      하나하나에 귀 기울이고 소통하며, 여러분들의 소중한 한 표를
                      잊지 않고 학우분들과의 약속을 성실히 이행하
                    </Text>
                  </Box>
                  <HStack>
                    <BsFacebook size={28} />
                    <RiInstagramFill size={32} />
                  </HStack>
                </VStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
