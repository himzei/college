import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GiMirrorMirror } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function Portfolio() {
  return (
    <Box py={20} w="full" display="flex" justifyContent="center">
      <HStack w="8xl">
        <Box
          bg="yellow.400"
          borderTopRightRadius={"60px"}
          borderBottomLeftRadius={"60px"}
          h={96}
        >
          <VStack px={16} py={10} w="full" spacing={8}>
            <VStack w="full" alignItems="flex-end" spacing={0}>
              <Text fontSize={40} fontWeight={700}>
                선정업체
              </Text>
              <Text fontSize={20}>진행했던 사진</Text>
            </VStack>
            <VStack alignItems="flex-start" w="full" spacing={4}>
              <HStack>
                <BsFillGrid1X2Fill />
                <Text>전체서비스</Text>
              </HStack>
              <HStack>
                <GiMirrorMirror />
                <Text>헤어&메이크업</Text>
              </HStack>
              <HStack>
                <IoMdPerson />
                <Text>퍼스널컬러진단</Text>
              </HStack>
              <HStack>
                <BsFillCameraFill />
                <Text>증명사진촬영</Text>
              </HStack>
              <HStack>
                <AiOutlinePlus />
                <Text>기타</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>
        <HStack spacing={8}>
          {[1, 2, 3, 4].map((item) => (
            <Box
              h={80}
              rounded={"3xl"}
              boxShadow="3px 3px 10px rgba(0, 0, 0, 0.7)"
              overflow="hidden"
            >
              <Box w={64} h={52} overflow="hidden">
                <Image
                  h={52}
                  src="https://images.unsplash.com/photo-1666720195820-09d623d1eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                />
              </Box>
              <VStack
                justifyContent="center"
                mt={6}
                alignItems="flex-start"
                px={4}
                spacing={1}
                position="relative"
              >
                <Box
                  bg="blue.500"
                  px={2}
                  py={1}
                  position="absolute"
                  left={0}
                  top={-10}
                >
                  <Text color="white" fontSize="sm" fontWeight={600}>
                    헤어&메이크업
                  </Text>
                </Box>
                <Text fontWeight={600} fontSize={20}>
                  한방문화체험프로그램
                </Text>
                <Text>2022-10-10</Text>
              </VStack>
            </Box>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
}
