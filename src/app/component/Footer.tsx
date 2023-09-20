import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-3 pb-10 px-5 w-full"
      style={{ backgroundColor: "#001627" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap text-sm-center text-md-start">
          <div className="w-full md:w-1/4 lg:w-1/4 mt-3">
            <h5 className="text-uppercase mb-4 text-warning text-3xl font-bold">
              KODFEC
            </h5>
            <p className="text-white text-justify">
              We at KODFEC&trade; are here to help you realize your goals by
              providing high-quality software solutions.
            </p>
          </div>

          <div className="w-full md:w-1/4 lg:w-1/4 mt-5 pt-4">
            <p className="text-white text-justify md:ms-5">
              Copyright &copy;2023 KODFEC All Right Reserved
            </p>
          </div>

          <div className="w-full md:w-1/4 lg:w-2/12 mt-5 pt-4">
            <div className="text-center md:text-md-start">
              <ul className="list-none md:list-inline flex justify-center md:justify-start gap-3">
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaFacebook className="text-2xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaTwitter className="text-2xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaGoogle className="text-2xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaLinkedin className="text-2xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaYoutube className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 lg:w-1/4 mt-3">
            <h5 className="text-uppercase text-warning text-3xl font-bold">
              Contact
            </h5>
            <p className="text-white mb-2">
              <FaHome className="text-warning text-xl inline" />
              &nbsp;&nbsp;525 Pulluhena, Pamunugama.
            </p>
            <p className="text-white mb-2">
              <FaEnvelope className="text-warning text-xl inline" />
              &nbsp;&nbsp;kodfec@gmail.com
            </p>
            <p className="text-white mb-2">
              <FaPhone className="text-warning text-xl inline" />
              &nbsp;&nbsp;+94 767081491
            </p>
            <p className="text-white mb-2">
              <FaPrint className="text-warning text-xl inline" />
              &nbsp;&nbsp;+94 767081491
            </p>
          </div>

          <div className="w-full mt-2">
            <hr className="hr-break-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
