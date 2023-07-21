import { useState } from "react";
export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  // const handleOnChange = () => {
  // setIsChecked(!isChecked);
  // };
  return (
    <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
      <h2 className=" flex text-2xl font-light"> Assign Permission Type </h2>
      {/* <button
        className="flex flex-column content-x border cursor-pointer bg-white text-red-700"
        type="button"
      >
        &#x2715;
      </button> */}

      {/* <button
        type="button"
        className=" w-full flex flex-row gap-15 font-extrabold  bg-white text-red-700 cursor-pointer"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button> */}

      <div className="CheckBox">
        <h2 className="text-2xl font-bold ">Core Management</h2>

        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Managemenu"
            value="Managemenu"
          />
          Manage Menu
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Leaderdesignation"
            value="Leaderdesignation"
          />
          Leader Designation
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Leaderprofession"
            value="Leaderprofession"
          />
          Leader Profession
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageparty"
            value="Manageparty"
          />
          Manage Party
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageconstituency"
            value="Manageconstituency"
          />
          Manage Constituency
        </div>

        <h2 className="text-2xl font-bold "> User Management </h2>

        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageuser"
            value="Manageuser"
          />
          Manage User
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageleader"
            value="Manageleader"
          />
          Manage Leader
        </div>

        <h2 className="text-2xl font-bold "> Office Management </h2>

        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageletter"
            value="Manageletter"
          />
          Manage Letter
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageevent"
            value="Manageevent"
          />
          Manage Event
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Manageemployees"
            value="Manageemployees"
          />
          Manage Employees
        </div>
        <h2 className="text-2xl font-bold "> Network Management </h2>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Managedirectory"
            value="Managedirectory"
          />
          Manage Directory
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="Managegroup"
            value="Managegroup"
          />
          Manage Group
        </div>
        <div className="">
          <input
            type="checkbox"
            id="text"
            name="campaingsms"
            value="campaingsms"
          />
          Campaing Sms
        </div>
        <div className="self-end flex items-center gap-2">
          <button className="py-2 px-4 bg-cyan-500 rounded-md text-white">
            Update permission
          </button>
        </div>
        <div className="result">
          {/* Above checkbox is {isChecked ? "checked" : "un-checked"}. */}
        </div>
      </div>
    </div>
  );
}
