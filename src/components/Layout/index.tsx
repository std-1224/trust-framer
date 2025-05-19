import { FixedBgAnimation } from "../Animation";
import Contact from "../Contact";
import Footer from "../Footer";
import Nav from "../Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full justify-items-center overflow-hidden">
      <Nav />
      <FixedBgAnimation />
      {children}
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
