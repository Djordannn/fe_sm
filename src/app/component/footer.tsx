import React from "react";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { PiTiktokLogoBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-zinc-800 py-14 text-[#ffff]">
      <div className="flex justify-center border-b-2 border-zinc-500 pb-8 text-center">
        <div className="px-[14%]">
          <h2 className="mb-5 text-3xl">Logo</h2>
          <div>
            <p>Jln.Ahmad Yani, KM.21, Ruko Pak Wahyu</p>
          </div>
          <div className="flex gap-5">
            <a href="#" className="flex items-center gap-2">
              <LuPhone size={20} />
              <p className="text-gray-300">+62 864 8395 2455</p>
            </a>
            <a href="#" className="flex items-center gap-2">
              <TfiEmail size={20} />
              <p className="text-gray-300">example@gmail.com</p>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a href="#" className="flex items-center gap-2">
              <LuInstagram size={30} />
            </a>
            <a href="#" className="flex items-center gap-2">
              <PiTiktokLogoBold size={30} />
            </a>
            <a href="#" className="flex items-center gap-2">
              <LuFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
