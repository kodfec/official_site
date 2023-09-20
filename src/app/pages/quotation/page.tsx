import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

const page = () => {
  return (
    <div className="bg-slate-950 page-container">
      <NavBar />
      <div className="pt-24 w-full bg-slate-500 h-screen">
        <span>Quotation</span>
      </div>
      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
