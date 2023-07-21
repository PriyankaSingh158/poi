// import { BiPencil, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { ConnectToAPI } from "../../utils/utility";

export const AddParliamentry = () => {
  const [heading, setHeading] = useState("Add City");
  const [curId, setCurId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [statename, setStatename] = useState("");
  const [parliamentaryconstituency, setParliamentaryconstituency] =
    useState("");
  const [status, setStatus] = useState("");

  const [data, setData] = useState<
    {
      parliamentary: [];
      stateId: string;
      stateName: string;
    }[]
  >([]);

  const fetchData = async () => {
    try {
      const body = JSON.stringify({
        eventID: "0005",
        addInfo: {
          page: 1,
          pageSize: 5,
        },
      });

      console.log(body);
      const jsondata = await ConnectToAPI(
        "http://210.210.210.31:30700/parliamentary",
        body
      );

      console.log(jsondata);

      //
      setData(jsondata.Data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={fetchData}
        className="py-1 px-5 capitalize font-semibold bg-cyan-500 text-white rounded-full"
      >
        click to fetch data
      </button>
      <div className="">
        <button
          onClick={() => {
            openModal();
            setHeading("Add Parliamentary Constituency"); // change heading of form
            setStatename("");
            setStatus("");
            setParliamentaryconstituency("");

            setCurId(""); // updated CurID to empty for edit purpose
          }}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add Parliamentary
        </button>
        {/* Conditional showing form */}
        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full">
            <div
              className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20"
              onClick={closeModal}
            />
            <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h2 className="text-2xl font-bold ">{heading} </h2>
              <form
                className="flex flex-col gap-2 mt-7"
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   setData((lst) => {
                //     const data1 = [...lst];

                //     const index = data1.findIndex((el) => el.id === curId);

                //     if (index < 0)
                //       data1.push({
                //         parliamentaryconstituency,
                //         statename,
                //         status,
                //         id: Math.random().toFixed(5),
                //       });
                //     else {
                //       data1.splice(index, 1, {
                //         parliamentaryconstituency,
                //         statename,
                //         status,
                //         id: curId,
                //       });
                //     }
                //     return data1;
                //   });

                //   closeModal();
                //   setParliamentaryconstituency("");
                //   setStatename("");
                //   setStatus("");
                // }}
              >
                <div className="flex item-center gap-5">
                  <label
                    htmlFor="Statename"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>
                      State name<strong className="text-red-600">*</strong>
                    </span>
                    <select
                      onChange={(e) => setStatename(e.target.value)}
                      name=""
                      id="statename"
                      value={statename}
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="Selectstate">Select state</option>
                      <option value="kolkata">kolkata</option>
                      <option value="chennai">chennai</option>
                    </select>
                  </label>
                  <label
                    htmlFor="Parliamentaryconstituency"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>
                      Parliamentary Constituency
                      <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      value={parliamentaryconstituency}
                      onChange={(e) =>
                        setParliamentaryconstituency(e.target.value)
                      }
                      type="text"
                      id="parliamentaryconstituency"
                      className="w-full border border-gray-400 text-1 px-3 py-2 rounded"
                    ></input>
                  </label>
                  <label htmlFor="Status" className="w-1/3 flex flex-col gap-1">
                    <span>Status</span>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      name=""
                      id=""
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="Selectstatus">Select Status</option>
                      <option value="active">Active</option>
                      <option value="deactive">Deactive</option>
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
                <th className="border"> State Name</th>
                <th className="border"> Parliamentary Constituency</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr key={el.stateId}>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.stateName}</td>
                  <td className="border text-center">[dewfreg]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
