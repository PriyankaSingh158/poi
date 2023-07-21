import React from "react";
import { FaUserAlt, FaLock, FaUsers } from "react-icons/fa";
import { BsX } from "react-icons/bs";

export const RegistrationForm: React.FC = () => {
  return (
    <>
      <section className="w-full h-[100dvh] gradient flex gap-10 items-center justify-center">
        <div className="flex w-[62%] gap-14">
          {/* left two boxes */}
          <div className="flex flex-col w-[40%] justify-between gap-10">
            <div className="border-2 border-gray-50 rounded-[2.5rem] py-10 px-8 flex flex-col items-center relative">
              {/* Cancel Button */}
              <button className="absolute top-5 right-5 bg-blue-900">
                <BsX className="text-2xl text-white" />
              </button>
              <h2 className="uppercase text-white font-semibold text-3xl">
                member login
              </h2>

              <FaUsers className="text-white text-[5rem] my-3" />

              <form className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="username"
                  className=" text-gray-800 flex w-full"
                >
                  <span className="bg-blue-800 p-3">
                    <FaUserAlt className="text-white" />
                  </span>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="bg-gray-50 py-2 px-4 w-full"
                  />
                </label>
                <label
                  htmlFor="password"
                  className=" text-gray-800 flex w-full"
                >
                  <span className="bg-blue-800 p-3">
                    <FaLock className="text-white" />
                  </span>
                  <input
                    type="text"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 py-2 px-4 w-full"
                  />
                </label>

                <div className="flex items-center justify-around">
                  <label
                    htmlFor="remember"
                    className="flex items-center gap-1 my-5 cursor-pointer"
                  >
                    <input type="checkbox" id="remember" />
                    <span className="text-md text-white">Remember me</span>
                  </label>

                  <label
                    htmlFor="forget-password"
                    className="flex items-center gap-1 my-5 cursor-pointer"
                  >
                    <input type="checkbox" id="forget-password" />
                    <span className="text-md text-white">Forget password?</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="py-2 px-16 uppercase bg-blue-900 text-white self-center"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="border-2 border-gray-50 rounded-xl py-10 px-8 flex flex-col items-center gap-5 relative">
              {/* Cancel Button */}
              <button className="absolute top-3 right-3 bg-blue-900">
                <BsX className="text-2xl text-white" />
              </button>
              <h2 className="text-white font-semibold text-3xl">
                You are not a member?
              </h2>

              <button
                type="submit"
                className="py-2 px-16 uppercase bg-blue-900 text-white self-center"
              >
                Register now
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="w-[50%] border-2 border-gray-50 rounded-xl py-10 px-14 flex flex-col items-center relative">
            {/* Cancel Button */}
            <button className="absolute top-5 right-5 bg-blue-900">
              <BsX className="text-2xl text-white" />
            </button>
            <h2 className="uppercase text-white font-semibold text-3xl">
              Registration
            </h2>

            <form className="flex flex-col gap-2 w-full mt-auto mb-auto">
              <input
                type="text"
                placeholder="first name"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />
              <input
                type="text"
                placeholder="last name"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />
              <input
                type="text"
                placeholder="user name"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />
              <input
                type="text"
                placeholder="email address"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />
              <input
                type="text"
                placeholder="password"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />
              <input
                type="text"
                placeholder="confirm password"
                className="bg-gray-50 text-gray-800 py-2 px-4"
              />

              <label
                htmlFor="checkbox"
                className="flex items-center gap-3 my-5 cursor-pointer"
              >
                <input type="checkbox" id="checkbox" />
                <span className="text-md text-white">
                  Subscribe to Newsletter
                </span>
              </label>

              <div className="flex w-full justify-between mt-3">
                <button
                  type="submit"
                  className="py-2 px-6 uppercase bg-blue-900 text-white"
                >
                  register
                </button>
                <button
                  type="button"
                  className="py-2 px-6 uppercase bg-blue-900 text-white"
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
