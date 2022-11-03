import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { StyledSlider } from "./Slider";

export default function MainSlider() {
  const settings = {
    speed: 2000,
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Box position="relative">
      <Box w="full">
        <StyledSlider {...settings}>
          <Box
            w="full"
            h="80vh"
            overflow={"hidden"}
            bg="red"
            objectFit={"cover"}
            objectPosition="top"
            position={"relative"}
          >
            <Image
              width={"100%"}
              h="100%"
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
              src="https://images.unsplash.com/photo-1667385401990-8acafd0b8513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
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
        </StyledSlider>
      </Box>
      <Box
        w="95%"
        h="80px"
        position="absolute"
        top={10}
        left={"50%"}
        transform={"translateX(-50%)"}
        bg="black"
        opacity="0.8"
      >
        <HStack
          justifyContent={"space-between"}
          alignItems="center"
          w="100%"
          h="100%"
        >
          <Box px={8} zIndex={99}>
            {/* 영진직업 전문학교 로고 */}
            <Image src="http://www.yjjob.or.kr/data/menu/LOGO_BPFBpcm7rS5ZHe2sBTmL1486629200.png" />
          </Box>
          <HStack spacing={20} px={8}>
            <HStack color="white" spacing={16} fontSize={18} fontWeight={600}>
              <Box>
                <Text></Text>
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
    </Box>
  );
}
