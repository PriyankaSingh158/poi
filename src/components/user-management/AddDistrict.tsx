import { FC, useState, useId } from "react";
import { ConnectToAPI } from "../../utils/utility";

export const AddDistrict: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [heading, setHeading] = useState("Add District");
  const [formData, setFormData] = useState({ statename: "", districtname: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
        p: "0",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error sending data to the database:", error);
      });
  };

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // variables to store and manipulate
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [status, setStatus] = useState("");

  // Array to show data in a table
  const [data, setData] = useState<
    {
      districtId: string;
      districtName: string;
      stateName: string;
      stateId: string;
      status: string;
      createdDate: string;
    }[]
  >([]);
  const fetchData = async () => {
    try {
      const body = JSON.stringify({
        eventID: "0005",
        addInfo: {
          page: 1,
          pageSize: 10,
        },
      });

      console.log(body);
      const jsondata = await ConnectToAPI(
        "http://210.210.210.31:30700/district",
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
      <div className="">
        <button
          onClick={openModal}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add district
        </button>

        {/* Conditional showing form */}
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
                // onSubmit={(e) => {
                // e.preventDefault();
                // setData((lst) => {
                //   const data1 = [...lst];
                //   data1.push({
                //     state,
                //     status,
                //   });
                //   return data1;
                // });
                // closeModal();
                // setDistrict("");
                // setState("");
                // setStatus("");
                // }}
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
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>
                      District name <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      type="text"
                      id="Districtname"
                      className="w-full border border-gray-400 text-1 px-3 py-1 rounded"
                    />
                  </label>
                  <label htmlFor="Status" className="w-1/3 flex flex-col gap-1">
                    <span>Status</span>
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      name=""
                      id=""
                      value={status}
                      className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="">Select Status</option>
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
                  <button
                    onClick={() => {
                      openModal();
                    }}
                    type="submit"
                    className="py-2 px-4 bg-blue-500 rounded-md text-white"
                  >
                    ADD DISTRICT
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
                <th className="border">District Name</th>
                <th className="border">Status</th>
                <th className="border">State Name</th>
                <th className="border">Created Date</th>
                <th className="border">action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.districtName}</td>
                  <td className="border text-center">{el.status}</td>
                  <td className="border text-center">{el.stateName}</td>
                  <td className="border text-center">{el.createdDate}</td>
                  {/* <td
                    // className="border text-center cursor-pointer"
                    // onClick={() => {
                    //   openModal(); // shows form
                    //   setHeading("Edit District"); // change heading
                    //   setDistrict(el.districtId);
                    //   setState(el.stateId);
                    //   setStatus(el.status);
                    //   setStatus(el.districtName);
                    //   setStatus(el.stateName);
                    //   setStatus(el.createdDate);
                    // }}
                  >
                    edit
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={fetchData}
          className="py-1 px-5 capitalize font-semibold bg-cyan-500 text-white rounded-full"
        >
          click to fetch data
        </button>
      </div>
    </>
  );
};
