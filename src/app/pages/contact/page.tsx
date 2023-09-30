import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";

const page = () => {
  return (
    <div className="bg-slate-950 page-container">
      <NavBar />
      <div className="pt-32 w-full bg-white">
        <div className="w-full text-center">
          <span className="w-full text-5xl font-bold">
            GET CONNECTED WITH US
          </span>
          <p className="mt-4 text-xl">
            We're here to answer your questions and explore collaboration
            opportunities. Reach out to us anytime – we look forward to
            connecting with you !
          </p>
        </div>
        <div className="w-full mt-4 h-screen pb-6 sm:block md:flex">
          <div className="sm:w-full md:w-1/2 flex flex-column justify-center items-center ">
            <div className=" h-full w-full bg-red-400">
              <div className=" h-16 w-10 bg-slate-600">
j
              </div>
            </div>
          </div>
          <div className="max-sm:mt-4 sm:mt-4 md:mt-0 sm:w-full md:w-1/2 bg-red-700 "></div>
        </div>
      </div>
      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
