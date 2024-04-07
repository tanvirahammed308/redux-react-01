import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="my-20">

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
