import { RiReactjsLine } from "react-icons/ri";
import { SiPython, SiMysql, SiFlask, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, delay: 0.1 },
    { icon: <SiPython className="text-5xl text-blue-400" />, delay: 0.2 },
    { icon: <SiMysql className="text-5xl text-blue-600" />, delay: 0.3 },
    { icon: <SiFlask className="text-5xl text-neutral-400" />, delay: 0.4 },
    { icon: <SiHtml5 className="text-5xl text-orange-500" />, delay: 0.5 },
    { icon: <SiCss3 className="text-5xl text-blue-500" />, delay: 0.6 },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Animated Tech Icons */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: tech.delay, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="group flex items-center justify-center rounded-2xl border-4 border-neutral-900 p-4 shadow-lg transition-transform duration-300 hover:border-cyan-400"
          >
            <motion.div className="transition-colors duration-300 group-hover:text-cyan-400">
              {tech.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
