import { NavBar } from "@/app/ui/dashboard/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <NavBar>{children}</NavBar>;
};

export default Layout;
