// import React from "react";

export const Table1 = () => {
  return (
    <>
      <div className="">
        <h1>
          <b>Manage Designation</b>
        </h1>

        <div className="flex justify-between">
          <div className="py-3 px-3 flex items-center gap-2">
            <p>sort by</p>
            <select
              name=""
              id=""
              className="border px-3 py-1 rounded-md text-md self-center border-gray-300 text-gray-900 bg-white cursor-pointer"
            >
              id='filter' defaultValue={"5"}
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="w-max p-3 flex flex-col gap-2">
            <button className="py-2 px-4 bg-cyan-500 rounded-md text-white  ">
              Add Designation
            </button>
            <input
              type="text"
              id=""
              name=""
              className="border border-gray-500"
            />
          </div>
        </div>

        <table className="border w-full">
          <thead>
            <tr>
              <th className="border text-left p-2">#</th>
              <th className="border text-left p-2">Designation Name</th>
              <th className="border text-left p-2">Created Date</th>
              <th className="border text-left p-2">Status</th>
              <th className="border text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Designation Name</td>
              <td className="border p-2">Created Date</td>

              <td className="border p-2">
                <button className="bg-red-500 text-white rounded-full px-4 py-2 font-bold">
                  Deactive
                </button>
              </td>
              <td>
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-trash-fill"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ml-auto w-max p-2 ">
          <button className="py-1 px-2 text-black box-border rounded-sm border text-right p-2 ">
            Previous
          </button>
          <button className="py-1 px-2 bg-cyan-500 box-border text-white">
            1
          </button>
          <button className="py-1 px-2 text-black box-border rounded-sm border">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
