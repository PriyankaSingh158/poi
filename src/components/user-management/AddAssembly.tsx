import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export const AddAssembly = () => {
  const [heading, setHeading] = useState("Add City");
  const [curId, setCurId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [statename, setStatename] = useState("");
  const [parliamentaryconstituency, setParliamentaryconstituency] =
    useState("");
  const [assemblyconstituency, setAssemblyconstituency] = useState("");
  const [status, setStatus] = useState("");

  const [data, setData] = useState<
    {
      statename: string;
      parliamentaryconstituency: string;
      assemblyconstituency: string;
      status: string;
      id: string;
    }[]
  >([]);
  return (
    <>
      <div className="">
        <button
          onClick={() => {
            openModal();
            setHeading("Add Assembly Constituency");
            setStatename("");
            setParliamentaryconstituency("");
            setStatus("");
            setAssemblyconstituency("");

            setCurId("");
          }}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add Assembly
        </button>

        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full">
            <div
              className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20"
              onClick={closeModal}
            />
            <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h2 className="text-2xl font-bold ">{heading}</h2>
              <form
                className="flex flex-col gap-2 mt-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setData((lst) => {
                    const data1 = [...lst];

                    const index = data1.findIndex((el) => el.id === curId);

                    if (index < 0)
                      data1.push({
                        assemblyconstituency,
                        parliamentaryconstituency,
                        statename,
                        status,
                        id: Math.random().toFixed(5),
                      });
                    else {
                      data1.splice(index, 1, {
                        assemblyconstituency,
                        statename,
                        parliamentaryconstituency,
                        status,
                        id: curId,
                      });
                    }
                    return data1;
                  });

                  closeModal();
                  setParliamentaryconstituency("");
                  setAssemblyconstituency("");
                  setStatename("");
                  setStatus("");
                }}
              >
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="Statename"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>
                      State Name <strong className="text-red-600">*</strong>
                    </span>
                    <select
                      onChange={(e) => setStatename(e.target.value)}
                      value={statename}
                      name="statename"
                      id="statename"
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="Selectstate">Select State</option>
                    </select>
                  </label>
                  <label
                    htmlFor="Parliamentaryconstituency"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>
                      Parliamentary Constituency
                      <strong className="text-red-600">*</strong>
                    </span>
                    <select
                      onChange={(e) =>
                        setParliamentaryconstituency(e.target.value)
                      }
                      value={parliamentaryconstituency}
                      name=""
                      id="parliamentaryconstituency"
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="Selectconstituency">
                        Select Constituency
                      </option>
                    </select>
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="Assemblyconstituency"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>
                      Assembly Constituency
                      <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      onChange={(e) => setAssemblyconstituency(e.target.value)}
                      value={assemblyconstituency}
                      type="text"
                      id="assemblyconstituency"
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    ></input>
                  </label>
                  <label htmlFor="Status" className="w-1/2 flex flex-col gap-1">
                    <span> Status</span>

                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      value={status}
                      name=""
                      id="status"
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="1">active</option>
                      <option value="0">deactive</option>
                    </select>
                  </label>
                </div>
                <div className="w-full h-px bg-slate-200  my-5" />
                <div className="self-end flex items-center gap-3">
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className="py-2 px-4 bg-cyan-500 rounded-md text-white"
                  >
                    CLOSE
                  </button>
                  <button className="py-2 px-4 bg-blue-500 rounded-md text-white">
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
                <th className="border">Parliamentary constituency</th>
                <th className="border">Assembly constituency</th>
                <th className="border">Status</th>
                <th className="border">actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.statename}</td>
                  <td className="border text-center">
                    {el.parliamentaryconstituency}
                  </td>
                  <td className="border text-center:=">
                    {el.assemblyconstituency}
                  </td>
                  <td className="border text-center">{el.status}</td>

                  <td className="border text-center cursor-pointer">
                    <div className="flex gap-1 pl-2">
                      <button
                        onClick={() => {
                          openModal();
                          setHeading("Add Parliamentary Constituency");
                          setStatename(el.statename);
                          setParliamentaryconstituency(
                            el.parliamentaryconstituency
                          );
                          setAssemblyconstituency(el.assemblyconstituency);
                          setStatus(el.status);
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
