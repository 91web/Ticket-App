"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
  UserDashboardNav,
  UserDashboardType,
} from "../../../components/static-data/data";

const UserDashLinks: UserDashboardType[] = UserDashboardNav;

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Return nothing if not desktop
  if (!isDesktop) return null;

  const handleNav = (url: string) => {
    url === pathname ? router.refresh() : router.push(url);
    setOpen(false);
  };

  return (
    <Box width={"200px"}>
      <Box bgcolor={"#171C33"} height="80vh">
        <List>
          {UserDashLinks.map((link) => (
            <ListItemButton key={link.url} onClick={() => handleNav(link.url)}>
              {link.icon && (
                <Box
                  component="span"
                  sx={{
                    mr: 1,
                    display: "flex",
                    alignItems: "center",
                    color: link.url === pathname ? "white" : "#FDCB6D",
                  }}
                >
                  {link.icon}
                </Box>
              )}
              <ListItemText
                primary={link.label}
                sx={{
                  color: link.url === pathname ? "white" : "#FDCB6D",
                  fontWeight: link.url === pathname ? "bold" : "normal",
                  fontSize: link.url === pathname ? "20px" : "12px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#fff",
                  },
                  ...(link.url === pathname && {
                    textDecorationColor: "#5442dc",
                    textUnderlineOffset: "28px",
                  }),
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                      left: 0,
                    
                    right: 0,
                    height: "2px",
                    backgroundColor:
                      link.url === pathname ? "#5442dc" : "transparent",
                    transform:
                      link.url === pathname ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.3s ease",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box display="flex" justifyContent="left" mt={30} gap={1} ml={2}>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "#3b5998" }} />
          </Link>
          <Link
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon sx={{ color: "#1DA1F2" }} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#0077B5" }} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "#E1306C" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
