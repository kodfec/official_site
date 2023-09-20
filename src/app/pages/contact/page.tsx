import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";

const page = () => {
  return (
    <div className="bg-slate-950 page-container">
      <NavBar />
      <div className="pt-24 w-full bg-slate-500 h-screen">
        <span>Contact</span>
      </div>
      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
