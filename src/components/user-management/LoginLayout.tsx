import { FC, useState } from "react";
import op from "../../assets/images/background.jpg";
import logo from "../../assets/images/favicon.png";
import QRImage from "../../assets/images/QR.png";

import { FaPeopleGroup } from "react-icons/fa6";
import { MdDynamicFeed } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { ForgetForm } from "../forgetpass/ForgetPassForm";
import { AnimatePresence } from "framer-motion";
import { LeaderLoginForm } from "../../LeaderLoginForm";
import { LeaderRegisterForm } from "./LeaderRegisterForm";

// import op from "../../assets/images/favicon.png";
// import { useRouter } from "next/navigation";
// import { BsAndroid2, BsApple } from "react-icons/bs";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { MdDynamicFeed } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
export const LoginLayout: FC = () => {
  const [showForgetForm, setShowForgetForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <div className="flex items-center gap-5 min-h-[100dvh] w-full justify-center relative">
        <img
          src={op}
          alt=""
          className="w-full h-full absolute top-0 left-0 -z-10 object-cover object-center opacity-40"
        />

        <div className="flex gap-10 w-[80%] m-auto">
          <div className="flex flex-col w-[60%]">
            <img
              src={logo}
              alt=""
              className="h-[13rem] w-auto self-start max-lg:m-auto max-lg:h-[10rem]"
            />
            <h3 className="capitalize text-[2.7rem] font-[300] mt-4 max-lg:text-center">
              Welcome to the Politician of India....
            </h3>

            <p className="text-justify max-lg:hidden">
              Politician of India is a social network platform where we can
              connect to the Leaders & Emerging Leaders. Connect with POI for
              Leaders social activities like Current work, Agenda, invitations
              and much more. Now join & get familiar with Leaders around the
              India !!!
            </p>

            <div className="flex justify-between w-full mt-10">
              <p className="flex flex-col items-center">
                <FaPeopleGroup className="text-3xl top-1/2 left-5 translate-y-[-50%] text-sky-800" />
                Registered Peoples
                <span className="transition-all font-semibold capitalize text-5xl text-sky-800">
                  O
                </span>
              </p>
              <p className="flex flex-col items-center">
                <MdDynamicFeed className="text-3xl top-1/2 left-5 translate-y-[-50%] text-sky-800" />
                Posts Published
                <span className="transition-all font-semibold capitalize text-5xl text-sky-800">
                  O
                </span>
              </p>
              <p className="flex flex-col items-center">
                <FiUser className="text-3xl top-1/2 left-5 translate-y-[-50%] text-sky-800" />
                Active Users
                <span className="transition-all font-semibold capitalize text-5xl text-sky-800">
                  O
                </span>
              </p>
            </div>
            <div className="flex items-center w-full gap-10 mt-10">
              <img
                src={QRImage}
                alt=""
                className=" bg-white h-32 w-auto self-start max-lg:m-auto max-lg:h-[10rem]"
              />

              <div className="flex flex-col gap-4">
                <p className="">
                  Download Mobile App and Scan QR Code To Login
                </p>
                <div className="flex gap-5">
                  <p className="flex items-center gap-5">
                    <i className="bi bi-android2 text-5xl" />
                    Android
                  </p>
                  <p className="flex items-center gap-5">
                    <i className="bi bi-apple text-5xl" />
                    IOS
                  </p>
                </div>
              </div>
            </div>
          </div>
          {!showRegisterForm && (
            <LeaderLoginForm
              showForgetForm={() => setShowForgetForm(true)}
              showRegisterForm={() => setShowRegisterForm(true)}
            />
          )}
          {showRegisterForm && (
            <LeaderRegisterForm
              hideRegisterForm={() => setShowRegisterForm(false)}
            />
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showForgetForm && (
          <ForgetForm onClose={() => setShowForgetForm(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
