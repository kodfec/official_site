import Image from "next/image";
import Logo from "/public/res/kodfec logo (1024 × 1024px).svg";
import background from "/public/res/2825704.gif";
export default function Home() {
  return (
    <div className="body">
      <div className=" header">
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="/home" className="flex items-center">
              <Image src={Logo} alt="logo" width={120} className="logo"/>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center mr-6 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto mr-10"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-white  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="block py-2 pl-8 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Get quotation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="card">
          <div>
            <Image
              src={background}
              alt="background"
              style={{
                width: "100vw",
                zIndex: -100,
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
            <div className=" rounded-md p-6 bg-transparent wordcontent">
              <span className=" font-bold text-lg mb-10 mainspan">Powering Possibilities through Innovative Code</span>
              <p className=" ml-7 mt-4">
                Using innovative and cutting-edge coding techniques to create
                software solutions that open up new possibilities for businesses
                and individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-blue-400">card 2</div>
        <div className="card bg-blue-500"> card 3</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}
