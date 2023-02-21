"use client";

import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import {
  EmailIcon,
  ChatIcon,
  AttachmentIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

export default function TopBar() {
  return (
    <Box w="1400px" bg="#571f9c" h="50px">
      <Flex justifyContent="space-between">
        <Box pl="150px" pt="13px">
          <Icon color="white" as={EmailIcon} />
          <Text pl="5px" color="white" display="inline">
            <Link href={"/"}>Info@example.com</Link>
          </Text>
        </Box>

        <Box pt="13px" pr="200px">
          <Link href="/">
            <Icon color="white" as={ChatIcon} />
            <Text
              display="inline"
              color="white"
              px="10px"
              borderRight="2px solid white"
            >
              Chat
            </Text>
          </Link>

          <Link href="/">
            <Icon ml="8px" color="white" as={AttachmentIcon} />
            <Text
              display="inline"
              color="white"
              px="10px"
              borderRight="2px solid white"
            >
              Attachment
            </Text>
          </Link>

          <Link href="/">
            <Icon ml="8px" color="white" as={PhoneIcon} />
            <Text
              display="inline"
              color="white"
              px="10px"
              borderRight="2px solid white"
            >
              Phone
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
