import {
  Box,
  Text,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Checkbox,
  HStack,
  Button,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

export default function Consult() {
  return (
    <Box display={"flex"} justifyContent={"center"} w="100%" my={20}>
      <Box w="7xl">
        {/* <Box bg="black" py={2} px={4} w={32}>
          <Text color="white" align="center" fontSize="sm" fontWeight="600">
            신청하기
          </Text>
        </Box> */}
        <Box w="full" h={0.5} bg="gray.600" mb={8} />
        <Grid templateColumns={"1fr 2fr"}>
          <GridItem w="100%">
            <Text fontWeight="600" fontSize="3xl">
              행사참가 신청하기
            </Text>
          </GridItem>
          <GridItem w="100%">
            <VStack as="form" spacing={6}>
              <FormControl>
                <FormLabel>진행중인 행사</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormHelperText>해당하는 행사명을 선택해 주세요</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>신청자 이름</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>이메일</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>전화번호</FormLabel>
                <Input type="text" w={96} />
              </FormControl>
              <HStack spacing={5} justifyContent="flex-start" w="full">
                <Checkbox colorScheme="green" defaultChecked>
                  헤어스타일링
                </Checkbox>
                <Checkbox colorScheme="green">퍼스널컬러 진단</Checkbox>
                <Checkbox colorScheme="green">취업용 증명사진</Checkbox>
              </HStack>
              <Box w="full">
                <Textarea rows={8} />
              </Box>
              <Box w="full">
                <Button type="submit" colorScheme="blue" w="md">
                  신청하기
                </Button>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
