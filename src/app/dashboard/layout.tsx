import React from "react";
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import DNavbar from "./component/user-appbar";
//import Container from "@mui/material/Container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <DNavbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
