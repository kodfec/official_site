
import Footer from "../../component/Footer";
import Image from "next/image";
import NavBar from "../../component/NavBar";
import Image1 from "/public/res/aboutus-img1.png";
import VisionImg from "/public/res/vision-img.png";
import MissonImg from "/public/res/mission-img.png";
import WorkingImg from "/public/res/working-img.png";
const page = () => {
  return (
    <div className="bg-white  page-container">
      <NavBar />

      <div className="pt-24 w-full flex ">
        <div className="w-6/12 m-10 ">
          <span className="text-4xl font-bold">Who we are..</span>
          <p className="mt-5 text-2xl text-slate-500">
            KODFEC serves as an extended remote development team for many medium-level organizations,
            fast-growing startups, and scale-ups. We mix our engineering skills with the DNA of your company
            to improve and succeed in the software product development process. Our goal at KODFEC is to develop
            cutting-edge software products and provide the best software solutions possible,
            resulting in long-term financial gains.
          </p>
        </div>
        <div className="w-6/12 m-10">
          <Image src={Image1} alt="Image1" width={400} />
        </div>
      </div>

      <div className="w-full flex">

        <div className="w-6/12 m-10 border border-blue-400 rounded-lg p-5 flex">
          <div className="w-32 ">
            <Image src={VisionImg} alt="VisionImg" width={70} />
          </div>
          <div className="ml-6">
            <span className="font-bold text-xl">OUR VISION</span><br />
            <span>To bring the paradisiac and winning world to the fingertips of the entrepreneurs so that they can achieve more.</span>
          </div>
        </div>

        <div className="w-6/12 m-10 border border-blue-400 rounded-lg p-5 flex">
          <div className="w-64 ">
            <Image src={MissonImg} alt="MissonImg" width={140} />
          </div>
          <div className="ml-6">
            <span className="font-bold text-xl">OUR MISSION</span><br />
            <span>To spread throughout the world in order to create the most creative team that can change the world with their
              incredible energy and thoughts. To give unique range of products, in several industries.
            </span>
          </div>
        </div>

      </div>

      <div className="w-full flex">
        <div className="w-6/12 p-10">
          <span className="text-3xl font-bold">Check these incredible short facts about KODFEC</span>
          <p className="text-lg text-slate-500 mt-5">
          Our team has grown over the years, but anyone joining us possesses the same key attributes. 
          A devotion to technical excellence, honor and empathy for the needs of our clients, and above all,
           a streak of the creative spirit that inspires all their work.
          </p>
          <Image src={WorkingImg} alt="MissonImg" width={400} />
        </div>
        <div className="w-6/12 p-10 bg-blue-200 text-center">
          <span className="text-3xl font-bold">Meet our developer team</span>
        </div>
      </div>

      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
