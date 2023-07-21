import { FC } from "react";

export const BasicInfoForm: FC<{ nextFunc: () => void }> = ({ nextFunc }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full backdrop-blur-[2px] h-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add New Leader</h2>

          <form className="flex flex-col gap-2 mt-7">
            <div className="flex gap-5 mt-5 border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h3 className="absolute text-2xl font-thin top-[-7%] left-4 px-3 bg-white">
                Basic Information
              </h3>

              <div className="grid w-full grid-cols-3 gap-5">
                <label htmlFor="Username" className="flex flex-col gap-1">
                  <span>
                    Username <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="Username"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  ></input>
                </label>

                <label htmlFor="Email" className="flex flex-col gap-1">
                  <span>
                    Email <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="email"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  ></input>
                </label>

                <label htmlFor="Password" className="flex flex-col gap-1">
                  <span>
                    Password <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="password"
                    className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  ></input>
                </label>

                <label
                  htmlFor="selectleadertype"
                  className="flex flex-col gap-1"
                >
                  <span>
                    Select Leader Type
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="LeaderType"
                    className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="leader">Leader</option>
                  </select>
                </label>

                <label htmlFor="selectassembly" className="flex flex-col gap-1">
                  <span>
                    Select Assembly<strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="selectassembly"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="MP">MP</option>
                  </select>
                </label>

                <label
                  htmlFor="Selectparliamenthouse"
                  className="flex flex-col gap-1"
                >
                  <span>
                    Select Parliament House
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="selectparliamenthouse"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="Lok Sabha"> Lok Sabha </option>
                  </select>
                </label>

                <label
                  htmlFor="Username"
                  className="w-full flex flex-col gap-1"
                >
                  <span>
                    Select State <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="selectstate"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  </select>
                </label>

                <label
                  htmlFor="selectparliamentaryconstituency"
                  className="w-full flex flex-col gap-1"
                >
                  <span>
                    Select Parliamentary Constituency
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="selectparliamentaryconstituency"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="Select Parliamentary Constituency">
                      Select Parliamentary Constituency
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div className="self-end flex items-center gap-2">
              <button
                onClick={nextFunc}
                type="button"
                className="py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
