import logo from "../assets/mohitkumarLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="mx-2 w-15 object-contain hover:scale-150 transition-transform duration-300"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mohit-kumar-98a843193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:scale-150 hover:text-blue-500 transition-transform duration-300" />
        </a>
        <a
          href="https://github.com/FURY3575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-150 hover:text-gray-700 transition-transform duration-300" />
        </a>
        <a
          href="https://www.instagram.com/mohit__kashyap_22/?utm_source=qr&igsh=OGV5OWM5em43cmpj#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:scale-150 hover:text-pink-500 transition-transform duration-300" />
        </a>
        <a
          href="https://www.facebook.com/arnav.kashyap.7792?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:scale-150 hover:text-blue-700 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
