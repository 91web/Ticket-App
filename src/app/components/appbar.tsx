"use client";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AppNav, AppNavType } from "./static-data/data";
import Logo from "../../assets/img/ticket-logo.png";
import Image from "next/image";

const NavLinks: AppNavType[] = AppNav;

export default function DNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNav = (href: string) => {
    href === pathname ? router.refresh() : router.push(href);
  };
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
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
      <Box sx={{ flex: 1, justifyContent: "center", gap: 2 , display:{ xs: "none", md: "flex" }}}>
        {NavLinks.map((link) => (
          <Button
            key={link.url}
            onClick={() => handleNav(link.url)}
            sx={{
              color: link.url === pathname ? "white" : "#FDCB6D",
              fontWeight: link.url === pathname ? "bold" : "normal",
              fontSize: link.url === pathname ? "20px" : "12px",
              textTransform: "none",
              "&:hover": { backgroundColor: "transparent", color: "#fff" },
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
                backgroundColor: link.url===pathname ? "#5442dc" : "transparent",
                transform: link.url===pathname ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            {link.label}
          </Button>
        ))}
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
             mt:2,
            height:30
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
