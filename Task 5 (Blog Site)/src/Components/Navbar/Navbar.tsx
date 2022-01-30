import NavbarItem from "./NavbarItem";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import NavbarIcon from "./NavbarIcon";

const Navbar = (): JSX.Element => {
  return (
    <div className="bg-[#012a4a] text-white w-full h-[70px] flex justify-center md:justify-evenly items-center">
      <div>Make-A-Blog</div>
      <ul className="flex justify-center items-center">
        <li className="mx-4">
          <input
            type="text"
            className="p-1 rounded-md hidden md:block w-full"
            placeholder="search"
          ></input>
        </li>
        <NavbarItem name="Home" />
        <NavbarItem name="Articles" />
        <NavbarIcon icon={FaDiscord} href="https://discord.com/" />
        <NavbarIcon icon={AiFillInstagram} href="https://www.instagram.com/" />
        <NavbarIcon icon={AiFillLinkedin} href="https://www.linkedin.com/" />
      </ul>
    </div>
  );
};

export default Navbar;
