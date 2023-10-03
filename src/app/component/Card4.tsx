"use client";

import { motion, AnimatePresence } from "framer-motion";

const card4 = () => {
  return (
    <div className="py-50 flex flex-col items-center">
   
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
               </ul>
    
      <AnimatePresence>
        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2 "
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">K</p>
            <p className="text-2xl font-bold text-blue-500">- Kinetic</p>
          </div>
          <div>
            <p className="italic font-bold">
              Your life is a reflection of how effectively you balance potential
              and kinetic energy - Steve Maraboli
            </p>
            <p className="text-black mt-4">
              As technology evolves, we kodfec kinetically adapt the work in
              accordance with the situation to meet the clients demands.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">O</p>
            <p className="text-2xl font-bold text-blue-500">- Oriented</p>
          </div>
          <div>
            <p className="italic font-bold">
              Action is the foundational key of success. - Pablo Picasso
            </p>
            <p className="mt-4">
              Kodfec is an action and goal oriented software company which
              brings your thoughts to reality so that you can be action and goal
              oriented.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">D</p>
            <p className="text-2xl font-bold text-blue-500">- Demandable</p>
          </div>
          <div>
            <p className="italic font-bold">
              The universe doesn't give you what you ask for with your thoughts.
              It gives you what you demand with your actions
            </p>
            <p className="text-black mt-4">
              We Kodfec helps who put their confidence in us to achieve their
              objectives.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">F</p>
            <p className="text-2xl font-bold text-blue-500">- Flexible</p>
          </div>
          <div>
            <p className="italic font-bold">
              Flexibility makes building stronger. Imagine what it can do to
              your soul - Carlos Barrios
            </p>
            <p className="text-black mt-4"> We Kodfec is flixible as water.</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">E</p>
            <p className="text-2xl font-bold text-blue-500">- Enthusiastic</p>
          </div>
          <div>
            <p className="italic font-bold">
              All we need to make us really happy is something to be
              enthusiastic about - Charles Kingsley
            </p>
            <p className="text-black mt-4">
              We are more enthusiastic about the contentment of our clients and
              the quality of our work
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold text-blue-700">C</p>
            <p className="text-2xl font-bold text-blue-500">- Creative</p>
          </div>
          <div>
            <p className="italic font-bold">
              Creativity is seeing what others see and thinking what no one
              else ever thought -  Albert Einstein
            </p>
            <p className="text-black mt-4">
              Our comitted and expirienced team will come up with some creative
              new ways to make your vision a reality
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default card4;
