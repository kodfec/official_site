import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import Image from "next/image";
import galleryImage from "/public/res/galleryIcon.png";

const page = () => {
  return (
    <div className="body">
      <NavBar />
      <div className="pt-10 pb-10 bg-slate-950 flex flex-col items-center lg:grid justify-items-center  grid-cols-2  xl:grid-cols-3">
        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2 ">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        <div className="bg-blue-200 mt-20 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex">
          <div className="self-end ps-4 pb-2">
            <p className="font-bold text-2xl">DMS Stores</p>
            <p>POS System</p>
          </div>
          <div className="self-end ms-24 md:ms-32 lg:ms-36">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
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
