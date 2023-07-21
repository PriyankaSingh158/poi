import { FC } from "react";
import { AiOutlineKey } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { LuLock } from "react-icons/lu";

export const LeaderLoginForm: FC<{
  showForgetForm: () => void;
  showRegisterForm: () => void;
}> = ({ showForgetForm, showRegisterForm }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
      className="text-sky-800 flex-1 m-auto mt-10 rounded-xl shadow-xl bg-sky-50 flex flex-col items-center py-9 px-7 gap-5 font-[500] max-[500px]:px-4 max-lg:w-full"
    >
      <h3 className="hidden capitalize text-[2rem] font-[300] mt-4 max-lg:text-center max-lg:block">
        Welcome to the Politician of India
      </h3>
      <h2 className="uppercase font-[200] text-6xl flex flex-col items-center gap-2 max-lg:hidden">
        <AiOutlineKey className="text-5xl" />
        Login
      </h2>
      <p className="text-center text-sm">
        Sign In And Connect With The Leaders & Emerging Leaders Around The
        India.
      </p>
      <section className="px-4 w-full mt-5 max-[500px]:px-0">
        <div className="w-full bg-sky-100 flex flex-col overflow-hidden rounded-lg shadow-md">
          <label
            htmlFor="username"
            className="w-full relative flex flex-col border-b border-sky-200"
          >
            <input
              placeholder=" "
              type="text"
              className={
                "w-full pt-10 pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent text-sm"
              }
              id="username"
            />
            <BiUser className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
            <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md capitalize">
              email / phone no
            </span>
          </label>

          <label htmlFor="password" className="w-full relative flex flex-col">
            <input
              placeholder=" "
              type="password"
              className={
                "w-full pt-10 pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent"
              }
              id="password"
            />
            <LuLock className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
            <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md">
              Password
            </span>
          </label>
        </div>

        {/* Remember and forget password */}
        <div className="flex justify-between w-full mt-8 max-[500px]:flex-col max-[500px]:gap-6">
          <label
            htmlFor="remember"
            className="flex gap-2 items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="remember"
              defaultChecked={true}
              className="hidden checkbox"
            />
            <span className="select-none w-5 aspect-square rounded-full inline-block relative border-sky-800 border-[4px] cursor-pointer after:bg-sky-800 after:w-[65%] after:aspect-square after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:opacity-0" />
            <span>Remember me</span>
          </label>

          <button type="button" className="underline" onClick={showForgetForm}>
            Forget Password?
          </button>
        </div>

        <button
          type="submit"
          className="py-2 px-6 font-semibold bg-sky-800 text-sky-50 rounded-full mt-8"
        >
          Login
        </button>
        <p className="mt-5">
          Dont have an account?
          <button onClick={showRegisterForm} className="underline">
            Register with us
          </button>
        </p>
      </section>
    </form>
  );
};
