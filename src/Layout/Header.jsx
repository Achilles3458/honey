import { Link } from "react-scroll";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineReorder } from "react-icons/md";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-[104px] bg-[--site-main-color1] px-[35px] pt-[10px] flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* Navbar */}
        <div className="flex gap-6 xl:gap-12 xl:pr-[60px] max-[1011px]:hidden">
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Lifestyle Hospitality
          </Link>
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            What we do?
          </Link>
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Get comfy
          </Link>
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work, Meetings & Party time
          </Link>
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Eat & Drink
          </Link>
          <Link
            className="font-semibold text-white cursor-pointer font-default"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            The HAWS Pipeline
          </Link>
        </div>
        <div className="min-[1010px]:hidden">
          <button onClick={toggleDrawer}>
            <MdOutlineReorder className="text-[32px] text-white" />
          </button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        zIndex="100"
        className="pt-10"
      >
        <label className="text-[40px] pl-3 font-color text-[#f15f4f]">
          HAWS
        </label>
        <MenuList>
          <MenuItem>
            <Link to="section1" className="w-full">
              Lifestyle Hospitality
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="section2" className="w-full">
              What we do?
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="section3" className="w-full">
              Get comfy
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="section4" className="w-full">
              Work, Meetings & Party time
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="section5" className="w-full">
              Eat & Drink
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="section6" className="w-full">
              The HAWS Pipeline
            </Link>
          </MenuItem>
        </MenuList>
      </Drawer>
    </>
  );
};

export default Header;
