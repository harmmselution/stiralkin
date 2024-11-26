import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";

export const MainLayout = () => {
  return (
    <>
      <Outlet />;
      <Footer />
    </>
  );
};
