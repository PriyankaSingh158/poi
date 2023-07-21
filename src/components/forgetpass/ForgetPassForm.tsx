import { useState, FC } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";
import Logo from "../../assets/logo.png";

export const ForgetForm: FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [curFormPos, setCurFormPos] = useState(1);

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut" }}
        className="w-full h-[100dvh] fixed top-0 left-0 otp_modal"
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut" }}
          className="z-20 w-full h-full bg-sky-950 bg-opacity-40 backdrop-blur-[4px] absolute top-0 left-0"
        />

        <m.div
          initial={{ rotateX: 80 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: -80 }}
          transition={{ ease: "easeOut" }}
          className="bg-sky-50 origin-top rounded-md shadow-md z-30 relative m-auto px-10 py-8 flex flex-col items-center gap-10 mt-10 w-1/3 max-[1400px]:w-1/2 max-[900px]:w-[70%] max-[600px]:w-[80%] max-[500px]:w-[95%] max-[500px]:px-5 max-[500px]:mt-2"
        >
          <button onClick={onClose} className="absolute top-5 right-5">
            <BiX className="text-3xl" />
          </button>

          <img src={Logo} alt="poi logo" className="w-auto h-[8rem]" />
          <AnimatePresence mode="wait">
            {curFormPos === 1 && (
              <>
                <label
                  htmlFor="name"
                  className="w-1/2 font-normal flex flex-col gap-1"
                >
                  <span>Enter Your Username</span>
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                  />
                </label>
                <button
                  className="py-2 px-4 bg-blue-500 rounded-md text-white"
                  onClick={() => setCurFormPos(2)}
                >
                  Proceed
                </button>
              </>
            )}
            {curFormPos === 2 && (
              <>
                <label
                  htmlFor="otp"
                  className="w-1/2 font-normal flex flex-col gap-1"
                >
                  <span>Enter Your otp</span>
                </label>
                <input
                  type="number"
                  id="otp"
                  placeholder=""
                  className="w-1/2 border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                />

                <button
                  className=" py-2 px-4 bg-blue-500 rounded-md text-white"
                  onClick={() => setCurFormPos(3)}
                >
                  Verify
                </button>
              </>
            )}
            {curFormPos === 3 && (
              <>
                <label
                  htmlFor="Password"
                  className="w-1/2 font-normal flex flex-col gap-1"
                >
                  <span>Create New Password</span>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                  />
                  <span>Confirm New Password</span>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="w-full border border-gray-400 text-1 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                  />
                </label>
                <button
                  className="py-2 px-4 bg-blue-500 rounded-md text-white"
                  onClick={() => setCurFormPos(4)}
                >
                  Submit
                </button>
              </>
            )}
          </AnimatePresence>
        </m.div>
      </m.div>
    </>
  );
};
