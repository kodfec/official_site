import Image from "next/image";

const Card2 = () => {
  return (
    <div className="max-w-full w-full min-h-screen flex justify-center items-center bg-slate-400">
      <div className="bg-white p-20 rounded-lg shadow-lg max-w-7xl w-full mx-4 sm:mx-auto">
        <div className="text-center mb-6 p-2">
          <span className="animate-pulse text-7xl font-semibold text-blue-600 fontchanges">
            WELCOME
          </span>

          <span className="animate-pulse text-5xl font-semibold text-gray-700 ml-6 fontchanges">
            TO KODFEC
          </span>
        </div>
        <p className="text-gray-600 text-2xl text-justify">
          Having you here makes us very happy. At KODFEC, we are passionate
          about developing outstanding software solutions that change the world.
          To accomplish your demands and go above and beyond your expectations,
          our team of dedicated experts is committed to offering top-notch
          services and products.
        </p>

        <div className="animate-bounce mt-6">
          <span className="text-5xl font-semibold text-green-600">
            GET IN TOUCH
          </span>
        </div>
        <p className="text-gray-600 text-2xl text-justify">
          If you want to know more about our products or simply get in touch
          with us, fill in the form here or please call one of our toll-free
          numbers below or email using the contact form below.
        </p>
      </div>
    </div>
  );
};

export default Card2;
