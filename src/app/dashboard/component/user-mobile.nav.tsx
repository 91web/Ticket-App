"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { AppNavType, AppNav } from "../../components/static-data/data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const NavLinks: AppNavType[] = AppNav;

export default function MNav({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    href === pathname ? router.refresh() : router.push(href);
    setOpen(false);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, position: "relative" }}>
      <Drawer
        anchor="right"
        open={true}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80%",
            maxWidth: "150px",
            backgroundColor: "#171C33",
            mt: "66px", // Adjust this value based on your AppBar height
            zIndex: (theme) => theme.zIndex.drawer,
          },
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Box bgcolor={"#171C33"} height="65vh" padding="16px">
          <List>
            {NavLinks.map((link) => (
              <ListItemButton
                key={link.url}
                onClick={() => handleNav(link.url)}
              >
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
                      // textDecoration: "underline",
                      textDecorationColor: "#5442dc",
                      textUnderlineOffset: "2px", // added space to the underline
                    }),

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "15px",
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
          <Box textAlign={"center"} mt={2}>
            <Button
              variant="contained"
              onClick={() => handleNav("/account/login")}
              sx={{
                backgroundColor: "#FDCB6D",
                color: "#000",
                "&:hover": { backgroundColor: "#5442dc", color: "#fff" },
                textTransform: "none",
              }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={2} gap={1}>
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
      </Drawer>
    </Box>
  );
}
