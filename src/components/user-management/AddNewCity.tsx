export const AddNewCity = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add City</h2>
          <form className="flex flex-col gap-2 mt-7">
            <div className="flex items-center gap-5">
              <label htmlFor="Statename" className="w-1/2 flex flex-col gap-1">
                <span>
                  State name<strong className="text-red-600">*</strong>
                </span>
                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="Selectstate">Select state</option>
                </select>
              </label>
              <label
                htmlFor="Districtname"
                className="w-1/2 flex flex-col gap-1"
              >
                <span>
                  District name<strong className="text-red-600">*</strong>
                </span>
                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="SelectDistrict">Select district</option>
                </select>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <label htmlFor="Pincode" className="w-1/3 flex flex-col gap-1">
                <span>
                  {" "}
                  Pincode <strong className="text-red-600">*</strong>
                </span>
                <input
                  type="text"
                  id="statename"
                  className="w-full border border-gray-400 text-1 px-3 py-2 rounded"
                ></input>
              </label>
              <label htmlFor="Cityname" className="w-1/3 flex flex-col gap-1">
                <span>City name</span>
                <input
                  type="text"
                  id="cityname"
                  className="w-full border border-gray-400 text-1 px-3 py-2 rounded "
                ></input>
              </label>
              <label htmlFor="Status" className="w-1/3 flex flex-col gap-1">
                <span>Status</span>
                <select
                  name=""
                  id=""
                  className="w-full border px-3 py-2 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="">Select Status</option>
                  <option value="0">Deactive</option>
                  <option value="1">Active</option>
                </select>
              </label>
            </div>
            <div className="w-full h-px bg-slate-200  my-5" />

            <div className="self-end flex items-center gap-3">
              <button className="py-2 px-4  bg-cyan-500 rounded-md text-white">
                Close
              </button>
              <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
                Add city
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
