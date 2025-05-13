"use client";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AppNav, AppNavType } from "../../components/static-data/data";
import Logo from "../../../assets/img/ticket-logo.png";
import Image from "next/image";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MNav from "./user-mobile.nav";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
const NavLinks: AppNavType[] = AppNav;

export default function DNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleNav = (href: string) => {
    href === pathname ? router.refresh() : router.push(href);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box position="relative" zIndex={1200}>
      {" "}
      {/* Increased z-index for navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#171C33",
          position: "relative", // Ensures z-index works
          zIndex: 1200,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Image
                src={Logo}
                alt="Logo"
                width={70}
                height={50}
                priority
                style={{ borderRadius: "80px" }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                onClick={() => handleNav("/account/login")}
                sx={{
                  backgroundColor: "#FDCB6D",
                  color: "#000",
                  "&:hover": { backgroundColor: "#5442dc", color: "#fff" },
                  textTransform: "none",
                  mt: 2,
                  height: 30,
                }}
              >
                Log Out
              </Button>
            </Box>
            {/* Logo and other elements remain the same */}
            {/* Mobile menu button */}
            {!open && (
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  mt: 2,

                  position: "relative",
                  zIndex: 1300,
                }}
              >
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{
                    color: "white",
                    zIndex: 200,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile menu container - positioned absolutely */}
      {open && (
        <Box sx={{ position: "relative", zIndex: 150 }}>
          <MNav onClose={() => setOpen(false)} />
        </Box>
      )}
    </Box>
  );
}
