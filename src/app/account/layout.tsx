"use client";
import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/img/ticket-logo.png";
import Image from "next/image";
import Button from "@mui/material/Button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNav = (href: string) => {
    href === pathname ? router.refresh() : router.push(href);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#171C33" }}>
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
            <Box>
              <Button
                variant="contained"
                onClick={() => handleNav("/web")}
                sx={{
                  backgroundColor: "#FDCB6D",
                  color: "#000",
                  "&:hover": { backgroundColor: "#5442dc", color: "#fff" },
                  textTransform: "none",
                  mt: 2,
                  height: 30,
                }}
              >
                Go to Home
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {children}
    </Box>
  );
};

export default Layout;
