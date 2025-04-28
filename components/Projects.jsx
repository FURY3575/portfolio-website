import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animated Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h3>

      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="mb-12 w-full max-w-4xl flex flex-wrap bg-neutral-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <motion.img
                src={project.image}
                width={180}
                height={200}
                alt={project.title}
                className="mb-6 rounded-lg object-cover shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                className="mb-2 text-xl font-semibold text-white"
              >
                {project.title}
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-purple-900 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
