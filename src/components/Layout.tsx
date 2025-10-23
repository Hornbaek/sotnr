import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
