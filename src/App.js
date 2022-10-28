import {
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { FaDog } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function App() {
  return (
    <>
      <VStack position={"relative"}>
        <Box
          w="full"
          h="80vh"
          overflow={"hidden"}
          bg="red"
          objectPosition="top"
          position={"relative"}
        >
          <Image
            width={"100%"}
            h="100%"
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1663862559567-1078e12fa5d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Box
            position="absolute"
            bgGradient={"linear(to-r, #2f2f2f, #0e0e0e)"}
            left={0}
            top={0}
            width={"100%"}
            h="100%"
            opacity={0.7}
          />
          <VStack
            position="absolute"
            left={40}
            bottom={40}
            alignItems="flex-start"
          >
            <VStack spacing={-8} alignItems="flex-start">
              <Text
                fontSize={96}
                textTransform="uppercase"
                fontWeight={700}
                color="white"
              >
                College of
              </Text>
              <Text
                fontSize={96}
                textTransform="uppercase"
                fontWeight={700}
                color="white"
              >
                Design & Art
              </Text>
            </VStack>
            <Box bg="red.500" px={4} py={1} rounded="lg">
              <Text color="white">
                예술적 감각과 융합 테크놀로지가 만나는 첨단 디자인 · 예술대학
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box
          w="95%"
          h="80px"
          position="absolute"
          top={10}
          bg="black"
          opacity="0.6"
        >
          <HStack
            justifyContent={"space-between"}
            alignItems="center"
            w="100%"
            h="100%"
            zIndex={9}
          >
            <Box px={8}>
              <FaDog color="white" size={40} />
            </Box>
            <HStack spacing={20} px={8}>
              <HStack color="white" spacing={16} fontSize={18} fontWeight={600}>
                <Box>
                  <Text>Introduce</Text>
                </Box>
                <Box>
                  <Text>디자인 컨버스</Text>
                </Box>
                <Box>
                  <Text>영상 에니메이션 학부</Text>
                </Box>
                <Box>
                  <Text>입학안내</Text>
                </Box>
                <Box>
                  <Text>뉴스이벤트</Text>
                </Box>
                <Box>
                  <Text>대학혁신 지원사업</Text>
                </Box>
              </HStack>
              <HStack color={"white"}>
                <Text>KO</Text>
                <Text>EN</Text>
              </HStack>
            </HStack>
          </HStack>
        </Box>
      </VStack>
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
                        하나하나에 귀 기울이고 소통하며, 여러분들의 소중한 한
                        표를 잊지 않고 학우분들과의 약속을 성실히 이행하
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
      <VStack w="full" h={80} bg="gray.100" py={20} spacing={16}>
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
                fontSize={52}
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
                fontSize={52}
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
      </VStack>
    </>
  );
}

export default App;
