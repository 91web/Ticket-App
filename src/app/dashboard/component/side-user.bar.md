"use client";
import { useRouter, usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { AppNavType, AppNav } from "../../components/static-data/data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Logo from "../../../assets/img/ticket-logo.png";
import Image from "next/image";

const NavLinks: AppNavType[] = AppNav;

export default function UserSideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    href === pathname ? router.refresh() : router.push(href);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        flexGrow: 1,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}
    >
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box bgcolor={"#171C33"} height="100vh" padding="16px">
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
