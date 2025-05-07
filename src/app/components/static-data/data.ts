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
