import { FC, useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export const AddNewCity: FC = () => {
  // const [showPass, setShowPass] = useState(false);
  const [heading, setHeading] = useState("Add City");
  const [curId, setCurId] = useState(""); // to get track of element which usre want to edit

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // variables to store and manipulate
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  // Array to show data in a table
  const [data, setData] = useState <
    {
      state: string;
      district: string;
      status: string;
      city: string;
      pincode: string;
      id: string;
    }[]
  >([]);

  return (
    <>
      <div className="">
        <button
          onClick={() => {
            openModal();
            setHeading("Add City"); // change heading of form
            setState("");
            setStatus("");
            setDistrict("");
            setCity("");
            setPincode("");
            setCurId(""); // updated CurID to empty for edit purpose
          }}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add City
        </button>
        {/* Conditional showing form */}
        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full h-full backdrop-blur-[2px]">
            <div
              className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20"
              onClick={closeModal}
            />
            <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h2 className="text-2xl font-bold capitalize">{heading}</h2>
              <form
                className="flex flex-col gap-2 mt-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setData((lst) => {
                    const data1 = [...lst];
                    // EDIT Code

                    // checking if item exists or not
                    const index = data1.findIndex((el) => el.id === curId);

                    // If data not exists then add it
                    if (index < 0)
                      data1.push({
                        district,
                        state,
                        status,
                        city,
                        pincode,
                        id: Math.random().toFixed(5), // generating random id for each item in a table
                      });
                    else {
                      // If data exist then change it
                      data1.splice(index, 1, {
                        district,
                        state,
                        status,
                        city,
                        pincode,
                        id: curId,
                      });
                    }
                    return data1;
                  });
                  closeModal(); // closing modal

                  // resetting all input/select/textarea fields on form submission
                  setDistrict("");
                  setState("");
                  setStatus("");
                  setCity("");
                  setPincode("");
                }}
              >
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="Statename"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>
                      State name<strong className="text-red-600">*</strong>
                    </span>
                    <select
                      onChange={(e) => setState(e.target.value)}
                      name=""
                      id=""
                      value={state}
                      className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="Selectstate">Select state</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bombay">Bombay</option>
                    </select>
                  </label>
                  <label
                    htmlFor="Districtname"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>
                      District name <strong className="text-red-600">*</strong>
                    </span>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      name=""
                      id=""
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="SelectDistrict">Select district</option>
                      <option value="SouthWest"> South West</option>
                    </select>
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="Pincode"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>
                      Pincode <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="text"
                      id="statename"
                      className="w-full border border-gray-400 text-1 px-3 py-2 rounded"
                    ></input>
                  </label>
                  <label
                    htmlFor="Cityname"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span> City name </span>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      id="cityname"
                      className="w-full border border-gray-400 text-1 px-3 py-2 rounded "
                    />
                  </label>
                  <label htmlFor="Status" className="w-1/3 flex flex-col gap-1">
                    <span>Status</span>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
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
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className="py-2 px-4  bg-cyan-500 rounded-md text-white"
                  >
                    Close
                  </button>
                  <button className="py-2 px-4 bg-blue-500 rounded-md text-white capitalize">
                    {heading}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="mt-8 w-1/2 bg-white text-gray-950 z-30 m-auto p-5 shadow">
          <h2 className="text-2xl font-semibold">User Input Data</h2>
          <table className="w-full border mt-10">
            <thead>
              <tr>
                <th className="border">#</th>
                <th className="border">State Name</th>
                <th className="border">District name</th>
                <th className="border">status</th>
                <th className="border">pincode</th>
                <th className="border">city</th>
                <th className="border">actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.state}</td>
                  <td className="border text-center">{el.district}</td>
                  <td className="border text-center">{el.status}</td>
                  <td className="border text-center">{el.pincode}</td>
                  <td className="border text-center">{el.city}</td>
                  <td className="border text-center cursor-pointer">
                    {/* ACTIONS | EDIT & DELETE */}
                    <div className="flex gap-1 pl-2">
                      <button
                        onClick={() => {
                          openModal(); // shows form
                          setHeading("edit City"); // change heading
                          setDistrict(el.district);
                          setState(el.state);
                          setStatus(el.status);
                          setPincode(el.pincode);
                          setCity(el.city);

                          // setting curID to element id on which users click
                          setCurId(el.id);
                        }}
                      >
                        <BiPencil className="text-2xl" />
                      </button>
                      <button
                        onClick={() => {
                          // LOGIC TO DELETE DATA
                          setData((lst) => {
                            const data1 = [...lst];

                            const index = data1.findIndex(
                              (element) => element.id === el.id
                            );
                            data1.splice(index, 1);

                            return data1;
                          });
                        }}
                      >
                        <BiTrash className="text-2xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
