import React from "react";
import { LuMapPin } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-zinc-800 px-[14%] py-14 text-[#ffff]">
      <div>
        <h2 className="mb-5 text-3xl">Logo</h2>
        <div className="flex flex-col gap-2">
          <a href="#">
            <div className="flex items-center gap-2">
              <LuMapPin className="text-lg" />
              <p className="text-sm text-gray-300">Jln.Ahmad Yani</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2">
              <LuPhone className="text-lg" />
              <p className="text-sm text-gray-300">+62 933 xxxx xxxx</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2">
              <TfiEmail className="text-lg" />
              <p className="text-sm text-gray-300">example@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
