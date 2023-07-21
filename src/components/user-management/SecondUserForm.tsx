import { FC, useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface SecondUserFormProps {}

export const SecondUserForm: FC<SecondUserFormProps> = () => {
  const [] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full mr-0">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-2/5 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative ">
          <h2 className="text-2xl font-bold ">Edit State</h2>

          <form className="flex flex-col gap-2 mt-7">
            <div className="flex items-center gap-5">
              <label htmlFor="statename" className="w-1/2 flex flex-col gap-1">
                <span>State Name</span>

                <input
                  type="text"
                  id="statename"
                  placeholder="Andhra Pradesh"
                  className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-black"
                />
              </label>

              <label htmlFor="nicename" className="w-1/2  flex flex-col gap-1">
                <span>
                  Nice Name <strong className="text-red-600">*</strong>
                </span>
                <input className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all mr-0" />
              </label>
            </div>

            <div className="w-full h-px bg-slate-200  my-5" />

            <div className="self-end flex items-center gap-2">
              <button className="py-2 px-4 bg-cyan-500 rounded-md text-white">
                Close
              </button>
              <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
