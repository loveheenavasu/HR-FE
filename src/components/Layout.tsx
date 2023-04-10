import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import demo from "../../public/images/demo.jpeg";
import MobileNav from "./header";
import Styles from "../styles/layout.module.css";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  Button,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCalendar,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "home", icon: FiHome },
  { name: "leave", icon: FiCalendar },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="half"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav />
      <Box ml={{ base: 0, md: 60 }} p="5">
        {children}
      </Box>
      {/* <Link href={`/${link}`}>{children}</Link> */}
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  // const handleClick = (item:Nav) => {

  // }
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            width={122}
            height={100}
            alt="login-logo"
          />
        </Text>

        {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
      </Flex>
      <Menu>
        <Menu>
          <VStack>
            <Image alt="user-image" width={122} height={100} src={demo} />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">Justina Clark</Text>
              <Text fontSize="xs" color="gray.600">
                Admin
              </Text>
            </VStack>
          </VStack>
        </Menu>
      </Menu>
      {LinkItems.map((link) => {
        const leaveINK = link.name === "Leave" ? "/Leave" : "/dashboard";
        return (
          <Link
            className={Styles.sidebarLinks}
            key={link.name}
            href={`/${link.name}`}
          >
            {" "}
            {link.name}
          </Link>
        );
      })}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href?: string;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link href={href || "#"} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
<MobileNav />;
export type { MobileProps };
