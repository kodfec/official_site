import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import ShakeHand from "/public/res/shakehand.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-slate-950 page-container">
      <NavBar />

      <div className="pt-28 w-ful flex justify-center items-center bg-white">
        <div className="w-full text-center">
          <span className="uppercase text-6xl font-bold">Get Quote</span>
          <div className="w-full flex justify-center mt-5">
            <p className="w-3/4 text-lg">
              Ready to bring your vision to life? Request a personalized
              quotation today and discover how our tailored solutions can drive
              your success.
            </p>
          </div>

          <div className="w-full sm:block md:flex justify-center items-center mt-5">
            <div className="max-sm:hidden sm:hidden md:flex items-center w-1/3 border-blue-600 border-e-8 vertical_line">
              <Image src={ShakeHand} alt="shake hand" className="w-full" />
            </div>
            <div className="max-w-full sm:max-w-full md:w-2/3  mb-5">
              <div className="mb-5 mt-5">
                <span className="uppercase w-full text-xl font-bold">
                  Nice to meet you
                </span>
              </div>

              <div>
                <div className="w-full text-start px-6 mb-2 font-bold">
                  <span>What sould we call you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full max-sm:mb-2 sm:mb-2 md:mb-0 md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"First Name"}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"Last Name"}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How shall we contact you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"Mobile Number"}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How can we find you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full md:w-1/2 max-sm:mb-2 sm:mb-2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"Address Line 1"}
                      name=""
                      id=""
                    />
                  </div>
                  <div className=" sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"Address Line 2"}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How should we help you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      value={"None"}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mt-5 mb-5">
                <button className="w-11/12 uppercase bg-blue-700 text-white p-4 rounded-2xl hover:bg-blue-500">
                  Click to send quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
