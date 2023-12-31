import { FC } from "react";
import { BiUser } from "react-icons/bi";
import { LuLock } from "react-icons/lu";
import { Link } from "react-router-dom";
import image from "../../assets/images/abc.jpg";

import { useState } from "react";
import { ConnectToAPI } from "../../utils/utility";

export const LoginForm: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const fetchData = async (e: React.FormEvent) => {
    try {
      console.log(username);

      e.preventDefault();

      // fetching data from api
      const body = JSON.stringify({
        eventID: "0001",
        addInfo: {
          username: username,
          password: password,
        },
      });

      console.log(body);
      const jsondata = await ConnectToAPI(
        "http://210.210.210.31:30700/authentication",

        body
      );

      console.log(jsondata);
      alert("login successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="h-[100dvh] w-full flex justify-between">
        <div className="w-1/2 mt-auto mb-auto">
          <img src={image} alt="" className="w-full " />
        </div>

        <div className="flex-grow my-auto p-10 pr-28 w-2/5">
          <h1 className="flex flex-col gap-4 text-cyan-900">
            <span className="text-6xl font-thin"> Welcome Back :) </span>
            <span className="font-normal">
              To keep connected with us please login with your personal
              information by email address and password.
            </span>
          </h1>

          {/* form */}
          <form className="flex flex-col mt-10 gap-10" onSubmit={fetchData}>
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <label
                htmlFor="email"
                className="w-full relative flex flex-col border-b border-gray-200"
              >
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="w-full pt-10 pb-5 pl-16 text-md focus:text-cyan-700 focus:bg-cyan-100  outline-none focusEvent transition-all"
                  id="email"
                />
                <button className="absolute top-1/2 left-4  translate-y-[-50%] text-gray-500">
                  <BiUser className="text-3xl" />
                </button>
                <span className="ml-16 mt-2 text-gray-500 absolute top-2">
                  Username
                </span>
              </label>

              <label
                htmlFor="password"
                className="w-full relative flex flex-col border-b border-gray-200"
              >
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full pt-10 pb-5 pl-16 text-md focus:text-cyan-700 focus:bg-cyan-100  outline-none focusEvent transition-all"
                  id="password"
                />
                <button className="absolute top-1/2 left-4  translate-y-[-50%] text-gray-500">
                  <LuLock className="text-3xl" />
                </button>
                <span className="ml-16 mt-2 text-gray-500 absolute top-2">
                  Password
                </span>
              </label>
            </div>

            {/* Remember and forget password */}
            <div className="flex justify-between">
              <label
                htmlFor="remember"
                className="flex gap-2 items-center cursor-pointer"
              >
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>

              <Link to="/" className="underline text-cyan-600">
                Forget Password?
              </Link>
            </div>

            <div className="">
              <button
                onClick={() => {
                  {
                    fetchData;
                  }
                }}
                type="submit"
                className="rounded-full bg-cyan-900 text-white  capitalize py-2 px-8"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
