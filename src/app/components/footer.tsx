"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AppNavType } from "./static-data/data";
import { AppNav } from "./static-data/data";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../../assets/img/ticket-logo.png";
import Image from "next/image";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";



function Footer() {
  const NavLinks: AppNavType[] = AppNav;
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (href: string) => {
    if (href === pathname) {
      router.refresh();
    } else {
      router.push(href);
    }
  };



  return (
    <Box
      component={"footer"}
      sx={{
        bottom: 0,
        backgroundColor: "#f0f0f0",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* First Column: Logo and Description */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" sx={{ textDecoration: "none" }}>
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
              </Link>
              <Typography
                variant="body2"
                sx={{ color: "#666", mt: 1 }}
                width={"50%"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </Typography>
            </Box>
          </Grid>

          {/* Second Column: Social Media */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: 600, mb: 2 }}
              >
                App Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link href="/support" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Support
                  </Typography>
                </Link>
                <Link href="/tickets" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Subscribe
                  </Typography>
                </Link>
                <Link href="/reports" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Complaint
                  </Typography>
                </Link>
                <Link href="/settings" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Settings
                  </Typography>
                </Link>
                <Link href="/support" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Privacy
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Third Column: Navbar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: 600, mb: 2 }}
              >
                Quick Links
              </Typography>
              {NavLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  sx={{ textDecoration: "none", color: "#666", mb: 1 }}
                  onClick={() => handleNav(link.url)}
                >
                  <Typography variant="body2" sx={{ textTransform: "none" }}>
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Fourth Column: App Management */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: 600, mb: 2 }}
              >
                App Management
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link href="/dashboard" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Dashboard
                  </Typography>
                </Link>
                <Link href="/tickets" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Ticket Management
                  </Typography>
                </Link>
                <Link href="/reports" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Reporting
                  </Typography>
                </Link>
                <Link href="/settings" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Settings
                  </Typography>
                </Link>
                <Link href="/support" sx={{ textDecoration: "none", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Support
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Divider sx={{ color: "#171C33" }} />
          <Grid size={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: 600, my: 2 }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", mr: 2, mb: 2 }}
                >
                  <FacebookIcon sx={{ color: "#3b5998", fontSize: 24 }} />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", mr: 2, mb: 2 }}
                >
                  <XIcon sx={{ color: "#1da1f2", fontSize: 24 }} />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", mr: 2, mb: 2 }}
                >
                  <InstagramIcon sx={{ color: "#e1306c", fontSize: 24 }} />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", mr: 2, mb: 2 }}
                >
                  <LinkedInIcon sx={{ color: "#0077b5", fontSize: 24 }} />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
