import Image from "next/image";
import background from "/public/res/2825704.gif";
import NavBar from "./component/NavBar";
export default function Home() {
  return (
    <div className="body">
      <NavBar />

      <div>
        {/* first card */}
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
            <div className=" rounded-md p-6 bg-transparent wordcontent lg:top-52">
              <span className=" font-bold text-lg mb-10 mainspan">
                Powering Possibilities through Innovative Code
              </span>
              <p className=" ml-7 mt-4">
                Using innovative and cutting-edge coding techniques to create
                software solutions that open up new possibilities for businesses
                and individuals.
              </p>
            </div>
          </div>
        </div>

        {/* secod card */}
        <div className="card bg-blue-400">card 2</div>

        {/* thrid card */}
        <div className="card bg-blue-500"> card 3</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}
