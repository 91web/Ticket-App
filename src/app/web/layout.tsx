import { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DNavbar from "../components/appbar";
import MNavbar from "../components/m.nav";
import Footer from "../components/footer";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#171C33" }}>
        <Toolbar>
          <DNavbar />
          <MNavbar />
        </Toolbar>
      </AppBar>

      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
