import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="my-10 text-center text-4xl"
      >
        Contacts
      </motion.h1>

      {/* Animated Contact Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <motion.a
          href="#"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.1, color: "#38bdf8" }} // Light blue hover effect
          className="border-b transition-colors duration-300 hover:text-cyan-400"
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
