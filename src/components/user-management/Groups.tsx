export const Groups = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add Group</h2>
          <form className="flex flex-col gap-2 mt-7">
            <div className="flex item-center gap-5">
              <label
                htmlFor="groups_name"
                className="w-1/2 flex flex-col gap-1"
              >
                <span>groups_name</span>
                <input
                  type="text"
                  id="statename"
                  className="w-full border border-gray-400 px-3 py-2 rounded"
                ></input>
              </label>
              <label htmlFor="status" className="w-1/2 flex flex-col gap-1">
                <span>Status</span>
                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-2 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="">select status</option>
                  <option value="1">active</option>
                  <option value="0">deactive</option>
                </select>
              </label>
            </div>
            <div className="  bg-slate-200 my-5" />

            <div className="self-end flex items-center gap-3">
              <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
                Create Group
              </button>
              <button className=" py-2 px-4 bg-red-500 rounded-md text-white">
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="self-end flex items-center gap-3">
          <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
            Previous
          </button>
          <button className=" py-2 px-4 bg-blue-500 rounded-md text-white">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
