import { FC, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface NewUserFormProps {}

export const NewUserForm: FC<NewUserFormProps> = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-2/5 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add New User</h2>

          <form className="flex flex-col gap-2 mt-7">
            {/* TWO Column form input field layout for Username and Password */}
            <div className="flex items-center gap-5">
              <label htmlFor="username" className="w-1/2 flex flex-col gap-1">
                <span>
                  Username<strong className="text-red-600">*</strong>
                </span>
                <input
                  type="text"
                  id="username"
                  className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
                />
              </label>

              <label htmlFor="password" className="w-1/2  flex flex-col gap-1">
                <span>
                  Password<strong className="text-red-600">*</strong>
                </span>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
                  />
                  <button
                    onClick={() => setShowPass((lst) => !lst)}
                    type="button"
                    className="absolute top-3  right-3 cursor-pointer"
                  >
                    {showPass && <FaRegEye />}
                    {!showPass && <FaRegEyeSlash />}
                  </button>
                </div>
              </label>
            </div>

            {/* TWO Column form input field layout for UserType and Status */}
            <div className="flex items-center gap-5 mt-3">
              <label htmlFor="userType" className="w-1/2  flex flex-col gap-1">
                <span>
                  User Type<strong className="text-red-600">*</strong>
                </span>
                <select
                  id="userType"
                  className="w-full border border-gray-400 text-l px-3 py-2 rounded-md outline-none transition-all"
                >
                  <option value="">Select User Type</option>
                  <option value="leader">Leader</option>
                  <option value="voter">Citizen / Voter</option>
                  <option value="employee">Employee</option>
                  <option value="emerging_leader">Emerging Leader</option>
                  <option value="emerging_leader">Emerging Leader 1</option>
                </select>
              </label>

              <label htmlFor="status" className="w-1/2  flex flex-col gap-1">
                <span>Status</span>
                <select
                  id="userType"
                  className="w-full border border-gray-400 text-l px-3 py-2 rounded-md outline-none transition-all"
                >
                  <option value="">Select Status</option>
                  <option value="0">Deactive</option>
                  <option value="1">Active</option>
                </select>
              </label>
            </div>

            <div className="w-full h-px bg-slate-200  my-5" />

            <div className="self-end flex items-center gap-3">
              <button className="py-2 px-4 bg-red-500 rounded-md text-white">
                Close
              </button>
              <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
                Add new user
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
