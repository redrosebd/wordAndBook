import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/image/logoDark.png";
import "./style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./style.css";

const Footer = () => {
  return (
    <div className="bg-[#181B1B] w-full mx-auto py-10 md:py-20">
      <div className="max-w-[1366px] mx-auto">
        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8 ">
          {/* ----------First Column ------------*/}
          <div>
            <div>
              <p className="text-xl md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-4">
                Technology Consultant by
              </p>

              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  className=" w-12 xl:w-16"
                />
              </div>
              <a
                href="https://corporation.redrosebd.com"
                className="text-[#FF016E] font-bold text-lg lg:text-xl "
                target="_blank"
              >
                Red Rose Corporation
              </a>
              <p className="text-sm text-slate-300 font-bold">
                Providing reliable since 2023
              </p>
            </div>

            <div className="text-slate-200 my-5">
              <div className="link link-hover flex justify-start items-center gap-2">
                <span className="text-lg font-bold ">
                  <FaPhone />
                </span>
                <p className="font-bold">+8801826192179</p>
              </div>

              <div className="link link-hover flex justify-start items-center gap-2 my-2">
                <span className="text-xl font-bold ">
                  <IoIosMail />
                </span>
                <p className="font-bold">Redrose.HelpDesk21@gmail.com</p>
              </div>

              <div className="link link-hover flex justify-start items-center gap-2 ">
                <span className="text-xl font-bold ">
                  <FaLocationDot />
                </span>
                <p className="font-bold">Sonir Akhra, Jatrabadi, Dhaka</p>
              </div>
            </div>
          </div>

          {/* ----------Middle Column ------------*/}
          <div className="flex justify-between text-white ">
            <div className="navItem">
              <h3 className="font-bold uppercase mb-4  lg:text-[15px] xl:text-lg ">
                Services
              </h3>
              <h2 className="link link-hover font-bold my-2">Scholarship</h2>
              <h2 className="link link-hover font-bold my-2">Stipend</h2>
              <h2 className="link link-hover font-bold my-2">Courses</h2>
              <h2 className="link link-hover font-bold my-2">Tutor Finding</h2>
              <h2 className="link link-hover font-bold my-2">Model Test</h2>
              <h2 className="link link-hover font-bold my-2">Contest</h2>
            </div>

            <div className="navItem">
              <h3 className="font-bold uppercase mb-4 lg:text-[15px] xl:text-lg ">
                Company
              </h3>
              <p>
                {" "}
                <Link href={"/AboutUs"} className="link link-hover font-bold">
                  About us
                </Link>
              </p>

              <p>
                {" "}
                <Link
                  href={"https://corporation.redrosebd.com/Intern"}
                  target="_blank"
                  className="link link-hover font-bold"
                >
                  Jobs
                </Link>
              </p>
            </div>

            <div className="navItem">
              <h3 className="font-bold uppercase mb-4 lg:text-[15px] xl:text-lg ">
                Legal
              </h3>
              <p>
                <Link
                  href={"/TermsAndConditions"}
                  className="link link-hover font-bold"
                >
                  Terms of use
                </Link>
              </p>

              <p>
                <Link
                  href={"/PrivacyPolicy"}
                  className="link link-hover font-bold"
                >
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>

          {/* ----------Last Column ------------*/}
          <div>
            <h2 className="font-bold text-white text-[16px]  md:text-lg lg:text-xl xl:text-2xl mb-4">
              Get in Touch
            </h2>

            <div className="text-2xl font-bold text-white flex items-center gap-4 ">
              <a href="https://www.facebook.com/redroseacademyofficial" target="_blank" className="icon-style">
                <FaFacebookF />
              </a>
              <a href="#" className="icon-style">
                <FaLinkedinIn />
              </a>
              <a href="#"  className="icon-style">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@redroseacademy5364" className="icon-style" target="_blank">
                  <FaYoutube />
              </a>
            </div>
            <div className="flex items-end justify-between w-full mt-5 md:my-10 gap-1 md:gap-3">
              <input
                className="w-8/12 p-2 md:py-4 md:px-3 font-bold rounded-full border border-[#554DD1]"
                placeholder="Enter email address"
                type="email"
                name=""
                id=""
              />
              <button className="w-4/12 py-2  md:py-4 px-3 rounded-full bg-[#554DD1] font-bold text-white">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto border-t mt-10 border-[#444d5c]   ">
          <p className="text-center my-5 text-stone-300 font-bold">
            {" "}
            &copy; {new Date().getFullYear()} Red Rose Corporation, All Right
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
