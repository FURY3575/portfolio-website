import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mohitkumarprofile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-36">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated Title */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mohit KUMAR
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>

            {/* Animated Content with About Me Font Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="my-2 max-w-xl py-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            src={profilePic}
            alt="Mohit Kumar"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
