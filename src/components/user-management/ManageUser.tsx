export const ManageUser = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add User</h2>
          <form className="flex flex-col gap-2 mt-7">
            <div className="flex items-center gap-5">
              <label htmlFor="Username" className="w-1/2 flex flex-col gap-1">
                <span>
                  Username <strong className="text-red-600">*</strong>
                </span>

                <input
                  type="text"
                  id="Username"
                  className="w-full border border-gray-400 text-1 px-3 py-1 rounded"
                ></input>
              </label>
              <label htmlFor="Password" className="w-1/2 flex flex-col gap-1">
                <span>
                  Password <strong className="text-red-600">*</strong>
                </span>
                <input
                  type="text"
                  id="Username"
                  className="w-full border  border-gray-400 text-1 px-3 py-1 rounded"
                ></input>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <label htmlFor="User Type" className="w-1/2 flex flex-col gap-1">
                <span>User Type</span>

                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="Selectusertype">Select User Type</option>
                  <option value=" Stranger">Stranger</option>
                  <option value="Leader">Leader</option>
                  <option value="Employee">Employee</option>
                  <option value="Emerging">Emerging</option>
                </select>
              </label>
              <label htmlFor="Status" className="w-1/2 flex flex-col gap-1">
                <span> Status</span>

                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="1">active</option>
                  <option value="0">deactive</option>
                </select>
              </label>
            </div>
            <div className="w-full h-px bg-slate-200  my-5" />
            <div className="self-end flex items-center gap-3">
              <button className="py-2 px-4  bg-cyan-500 rounded-md text-white">
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
