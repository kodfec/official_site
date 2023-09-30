"use client";

import {motion, AnimatePresence } from "framer-motion";

const card4 = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <AnimatePresence>
        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2 "
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold">K</p>
            <p className="text-2xl font-bold">- Kinetic</p>
          </div>
          <div>
            <p className="italic">
              "Your life is a reflection of how effectively you balance
              potential and kinetic energy"Steve Maraboli
            </p>
            <p>
              As technology evolves, we kodfec kinetically adapt the work in
              accordance with the situation to meet the clients' demands.
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
            <p className="text-8xl font-bold">O</p>
            <p className="text-2xl font-bold">- Oriented</p>
          </div>
          <div>
            <p className="italic">
              "Action is the foundational key of success". Pablo Picasso
            </p>
            <p>
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
            <p className="text-8xl font-bold">D</p>
            <p className="text-2xl font-bold">- Demandable</p>
          </div>
          <div>
            <p className="italic">
              "The universe doesn't give you what you ask for with your
              thoughts. It gives you what you demand with your actions"
            </p>
            <p>
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
            <p className="text-8xl font-bold">F</p>
            <p className="text-2xl font-bold">- Flexible</p>
          </div>
          <div>
            <p className="italic">
              "Flexibility makes building stronger. Imagine what it can do to
              your soul" Carlos Barrios
            </p>
            <p> We Kodfec is flixible as water.</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl mb-8 px-16 py-8 rounded-3xl w-4/5 md:w-3/5 lg:w-1/2"
          initial={{ y: 80 }}
          transition={{ duration: 0.4 }}
          whileInView={{ y: 30 }}
        >
          <div className="flex flex-row items-center">
            <p className="text-8xl font-bold">E</p>
            <p className="text-2xl font-bold">- Enthusiastic</p>
          </div>
          <div>
            <p className="italic">
              "All we need to make us really happy is something to be
              enthusiastic about" Charles Kingsley
            </p>
            <p>
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
            <p className="text-8xl font-bold">C</p>
            <p className="text-2xl font-bold">- Creative</p>
          </div>
          <div>
            <p>
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
