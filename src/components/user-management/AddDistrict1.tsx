import { useState } from "react";

export const AddDistrict1 = () => {
  const [state, setState] = useState("");
  const [showData, setShowData] = useState(false);
  const [district, setDistrict] = useState("");
  const [status, setStatus] = useState("");
  //   const [showData, setShowData] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add District</h2>
          {/* Adding submit event on form to prevent form submission */}
          <form
            className="flex flex-col gap-2 mt-7"
            onSubmit={(e) => {
              e.preventDefault();
              setShowData(true);
            }}
          >
            <div className="flex item-center gap-5">
              <label htmlFor="Statename" className="w-1/3 flex flex-col gap-1">
                <span>
                  State name<strong className="text-red-600">*</strong>
                </span>
                {/* using setState() to store below select tag value */}
                <select
                  onChange={(e) => setState(e.target.value)}
                  name=""
                  id=""
                  className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="">Select state</option>
                  <option value="faridabad">faridabad</option>
                  <option value="delhi">delhi</option>
                </select>
              </label>
              <label
                htmlFor="Districtname"
                className="w-1/3 flex flex-col gap-1"
              >
                <span>
                  District name <strong className="text-red-600">*</strong>
                </span>
                <input
                  onChange={(e) => setDistrict(e.target.value)}
                  type="text"
                  id="Districtname"
                  className="w-full border border-gray-400 text-1 px-3 py-1 rounded"
                ></input>
              </label>
              <label htmlFor="Status" className="w-1/3 flex flex-col gap-1">
                <span>Status</span>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  name=""
                  id=""
                  className=" w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="">Select Status</option>
                  <option value="1">active</option>
                  <option value="0">deactive</option>
                </select>
              </label>
            </div>
            <div className="w-full h-px bg-slate-200  my-5" />
            <div className="self-end flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowData(false)}
                className="py-2 px-4 bg-cyan-500 rounded-md text-white"
              >
                CLOSE
              </button>
              <button
                onClick={() => setShowData(false)}
                type="submit"
                className="py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                ADD DISTRICT
              </button>
            </div>
          </form>
        </div>

        {/* SHORT Circuiting  */}
        {showData && (
          <div className="mt-8 w-1/2 bg-blue-500 text-white z-30 m-auto p-5 shadow">
            <h2 className="text-2xl font-semibold">User Input Data</h2>

            <p>{state}</p>
            <p> {district}</p>
            <p>{status}</p>
          </div>
        )}
      </div>
    </>
  );
};
