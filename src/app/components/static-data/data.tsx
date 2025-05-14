import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

//Appbar static data
export interface AppNavType {
  id: string;
  label: string;
  url: string;
  active: boolean;
}

// Static data for the application
export const AppNav: AppNavType[] = [
  { id: "1", label: "Home", url: "/web", active: true },
  { id: "2", label: "About Us", url: "/web/about-us", active: true },
  { id: "3", label: "Services", url: "/web/services", active: true },
  { id: "4", label: "Contact Us", url: "/web/contact-us", active: true },
];

//user dashboard static data
export interface UserDashboardType {
  id: string;
  label: string;
  url: string;
  active: boolean;
  icon: React.ReactNode;
}
export const UserDashboardNav: UserDashboardType[] = [
  {
    id: "1",
    label: "Dashboard",
    url: "/dashboard/user",
    active: true,
    icon: <DashboardIcon />,
  },
  {
    id: "2",
    label: "Profile",
    url: "/dashboard/user/profile",
    active: true,
    icon: <PersonIcon />,
  },
  {
    id: "3",
    label: "Tickets Form",
    url: "/dashboard/user/form",
    active: true,
    icon: <ConfirmationNumberIcon />,
  },
  {
    id: "4",
    label: "History",
    url: "/dashboard/user/history",
    active: true,
    icon: <HistoryIcon />,
  },
  {
    id: "5",
    label: "Logout",
    url: "/account/login",
    active: true,
    icon: <LogoutIcon />,
  },
];
