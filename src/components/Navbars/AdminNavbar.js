// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AdminNavbarLinks from "./AdminNavbarLinks";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { brandText } = props;

  // Navbar styles
  let mainText = "gray.400";
  let secondaryText = "gray.400";
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";

  return (
    <Flex
      position={navbarPosition}
      top="0" 
      width={{
        xl: "75%",
        md: "100%",
        sm: "90%",
      }} 
      zIndex="1000" 
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration="0.25s, 0.25s, 0.25s, 0s"
      transitionProperty="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems="center"
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent="space-between"
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
    >
      <Flex
        w="100%"
        flexDirection={{
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={mainText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Link
            href="#"
            bg="inherit"
            fontWeight="bold"
          >
            {brandText}
          </Link>
        </Box>
        <Box ms="auto" w={{  md: "unset" }}>
          <AdminNavbarLinks />
        </Box>
      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string.isRequired,
};
