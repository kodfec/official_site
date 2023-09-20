import Image from "next/image";

const Card2 = () => {
  return (
    <div className="max-w-full w-full min-h-screen flex justify-center items-center bg-amber-100">
      
        <div className="bg-white rounded-lg shadow-lg lg:max-w-5xl sm:max-w-full mx-4 sm:mx-0 p-6">
            <div className="text-center mb-6">
                <span className="animate-pulse text-6xl font-semibold text-blue-600">WELCOME</span>
                <br/>
                <span className="animate-pulse text-4xl font-semibold text-gray-700">TO KODFEC</span>
            </div>
            <p className="text-gray-600 text-2xl text-justify">
                Having you here makes us very happy. At KODFEC, we are passionate about
                developing outstanding software solutions that change the world. To
                accomplish your demands and go above and beyond your expectations, our
                team of dedicated experts is committed to offering top-notch services
                and products.
            </p>
          
            <div className="animate-bounce mt-6 justify-center">
                <span className="text-4xl font-semibold text-green-600">GET IN TOUCH</span>
            </div>
            <p className="text-gray-600 text-2xl text-justify">
                If you want to know more about our products or simply get in touch with
                us, fill in the form here or please call one of our toll-free numbers
                below or email using the contact form below.
            </p>
        </div>
    </div>
  );
};

export default Card2;
