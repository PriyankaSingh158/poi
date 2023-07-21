import { BiX } from "react-icons/bi";

export const PermissionUser = () => {
  return (
    <>
      <div className="w-full h-[100dvh] fixed top-0 left-0 backdrop-blur-[2px] flex justify-center items-center z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 backdrop-blur-[2px] opacity-30 z-20" />

        <section className="bg-white rounded-md shadow-md p-8 relative z-30 flex flex-col gap-10 ">
          <button
            type="button"
            className="absolute top-6 right-6 hover:scale-110 transition-all"
          >
            <BiX className="text-3xl" />
          </button>
          <h2 className="text-4xl capitalize"> Set permissions </h2>
          <form className="flex flex-col gap-5">
            <section className="grid grid-cols-2 gap-6">
              {/*CORE MANAGEMENT PERMISSION*/}
              <div className="flex flex-col gap-1 border-2 border-cyan-900 rounded-md">
                <h2 className="bg-cyan-900 text-white font-normal p-3 px-4 text-2xl">
                  Core Management
                </h2>

                <div className="grid grid-cols-2 w-full gap-4 p-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Managemenu"
                      value="Managemenu"
                    />
                    Manage Menu
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Leaderdesignation"
                      value="Leaderdesignation"
                    />
                    Leader Designation
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Leaderprofession"
                      value="Leaderprofession"
                    />
                    Leader Profession
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageparty"
                      value="Manageparty"
                    />
                    Manage Party
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageconstituency"
                      value="Manageconstituency"
                    />
                    Manage Constituency
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 border-2 border-cyan-900 rounded-md">
                <h2 className="bg-cyan-900 text-white font-normal p-3 px-4 text-2xl">
                  User Management
                </h2>
                <div className="grid grid-cols-2 w-full gap-4 p-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageusers"
                      value="Manageusers"
                    />
                    Manage Users
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageleaders"
                      value="Manageleaders"
                    />
                    Manage leaders
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 border-2 border-cyan-900 rounded-md">
                <h4 className="bg-cyan-900 text-white font-normal p-3 px-4 text-2xl">
                  Office Management
                </h4>
                <div className="grid grid-cols-2 w-full gap-4 p-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageemployees"
                      value="Manageemployees"
                    />
                    Manage Employees
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Manageletters"
                      value="Manageletters"
                    />
                    Manage letters
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-2 border-cyan-900 rounded-md">
                <h5 className="bg-cyan-900 text-white font-normal p-3 px-4 text-2xl">
                  Network Management
                </h5>
                <div className="grid grid-cols-2 w-full gap-4 p-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="text"
                      name="Managegroup"
                      value="Managegroup"
                    />
                    Manage Group
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-cyan-800 h-[2px] mt-5 w-full opacity-30" />

            <div className="flex items-center gap-3 self-end">
              <button
                type="button"
                className="py-2 px-6 bg-cyan-600 text-white rounded-md"
              >
                Close
              </button>
              <button
                type="submit"
                className="py-2 px-5 bg-cyan-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
