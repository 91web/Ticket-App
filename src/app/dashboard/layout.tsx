import React from "react";
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import DNavbar from "./component/user-appbar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MNavbar from "./component/user-mobile.nav";
import Container from "@mui/material/Container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <DNavbar />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </Box>
  );
}
