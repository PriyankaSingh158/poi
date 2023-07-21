import { FC, useState, useEffect } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { ConnectToAPI } from "../../utils/utility";
import { useForm } from "react-hook-form";

interface FormFields {
  Complaintraisedby: string;
  Location: string;
  Issueraisedate: string;
  Itemname: string;
  Modelno: string;
  Invoiceno: string;
  Underamc: string;
  Fault: string;
}

// interface ComplaintFormProps {}
export const ComplaintForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    // setting default values
    defaultValues: {
      Complaintraisedby: "",
      Location: "",
      Issueraisedate: "",
      Itemname: "",
      Modelno: "",
      Invoiceno: "",
      Underamc: "",
      Fault: "",
    },
  }); // for validation and form handling using react-hook-form

  const submitHandler = (data: FormFields) => {
    console.log(data);
  };
  //   const [] = useState(false);
  const [heading, setHeading] = useState("Raise Your Complaint");
  const [curId, setCurId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [Complaintraisedby, setComplaintraisedby] = useState("");
  const [Location, setLocation] = useState("");
  const [Issueraisedate, setIssueraisedate] = useState("");
  const [Itemname, setItemname] = useState("");
  const [Modelno, setModelno] = useState("");
  const [Invoiceno, setInvoiceno] = useState("");
  const [Underamc, setUnderamc] = useState("");
  const [Fault, setFault] = useState("");
  //   const [Uploadimage, setUploadimage] = useState("");

  const [data, setData] = useState<
    {
      Complaintraisedby: string;
      Location: string;
      Issueraisedate: string;
      Itemname: string;
      Modelno: string;
      Invoiceno: string;
      Underamc: string;
      Fault: string;
      //   Uploadimage: string;
      id: string;
    }[]
  >([]);
  const fetchData = async () => {
    try {
      const body = JSON.stringify({
        eventID: "1004",
        addInfo: {
          id: "6476ea9b14110d43633d5cc7",
        },
      });

      console.log(body);
      const jsondata = await ConnectToAPI(
        "https://dev-api.sourceinfosys.in/doc/supportStaff",
        body
      );

      console.log(jsondata);

      //
      // setData(jsondata.rMessage);
    } catch (error) {
      console.error(error);
    }
  };

  //   Below function will only run when app load first time or reloads
  useEffect(() => {
    const complainData = localStorage.getItem("complainData"); // extracting data out of localstorage || this will either return some string (if data exists) or null (if not data is present)

    // checking data exists or not
    if (complainData) {
      // if data exists then we convert it back to array of object and store it into data variable
      setData(JSON.parse(complainData));
    }

    // if there is no data then nothing will happens
  }, []);

  return (
    <>
      <div className="">
        <button
          onClick={() => {
            openModal();
            setHeading("Raise Your Complaint");
            setComplaintraisedby("");
            setLocation("");
            setIssueraisedate("");
            setItemname("");
            setModelno("");
            setInvoiceno("");
            setUnderamc("");
            setFault("");
            // setUploadimage("");

            setCurId("");
          }}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Raise Your Complaint
        </button>
        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full mr-0">
            <div
              className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20"
              onClick={closeModal}
            />
            <div className="w-full mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative ">
              <h2 className=" text-xl font-medium ">{heading}</h2>
              <div className="w-full h-[1px] bg-gray-200" />

              <form
                noValidate
                // onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col gap-2 mt-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setData((lst) => {
                    const data1 = [...lst];

                    const index = data1.findIndex((el) => el.id === curId);

                    if (index < 0)
                      data1.push({
                        Complaintraisedby,
                        Location,
                        Issueraisedate,
                        Itemname,
                        Modelno,
                        Invoiceno,
                        Underamc,
                        Fault,
                        // Uploadimage,
                        id: Math.random().toFixed(5),
                      });
                    else {
                      data1.splice(index, 1, {
                        Complaintraisedby,
                        Location,
                        Issueraisedate,
                        Itemname,
                        Modelno,
                        Invoiceno,
                        Underamc,
                        Fault,
                        // Uploadimage,
                        id: curId,
                      });
                    }

                    // Below logic is to store data in local storage
                    // Converting data stored in string because we can't store objects or arrays in localstorage
                    const convertedData = JSON.stringify(data1); // this will convert the object or arrays in JSON string
                    localStorage.clear(); // clearing local storage on every form submittion either adding or editing
                    localStorage.setItem("complainData", convertedData); // creating a field named complainData in localstorage which we can use to access data from localstorage when our website load for first time or reloads
                    return data1;
                  });

                  closeModal();
                  setComplaintraisedby("");
                  setLocation("");
                  setIssueraisedate("");
                  setItemname("");
                  setModelno("");
                  setInvoiceno("");
                  setUnderamc("");
                  setFault("");
                }}
              >
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="complaintby"
                    className="w-full flex flex-col gap-1"
                  >
                    <span>Complaint Raised By </span>
                    <input
                      onChange={(e) => setComplaintraisedby(e.target.value)}
                      value={Complaintraisedby}
                      type="text"
                      id="complaintby"
                      placeholder=" Enter Customer Name"
                      className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>
                  <label
                    htmlFor="location"
                    className="w-full flex flex-col gap-1"
                  >
                    <span> Location </span>
                    <input
                      onChange={(e) => setLocation(e.target.value)}
                      value={Location}
                      type="text"
                      id="location"
                      placeholder=" Enter Location"
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="issueraise"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>Issue Raise Date</span>
                    <input
                      onChange={(e) => setIssueraisedate(e.target.value)}
                      value={Issueraisedate}
                      type="date"
                      id="issueraise"
                      placeholder="dd-mm-yy"
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>
                  <label
                    htmlFor="itemname"
                    className="w-1/2 flex flex-col gap-1"
                  >
                    <span>Item Name</span>
                    <input
                      onChange={(e) => setItemname(e.target.value)}
                      value={Itemname}
                      type="text"
                      id="itemname"
                      placeholder="Item Name "
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>
                </div>

                <div className="flex items-center gap-5">
                  <label
                    htmlFor="modelno"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>Model No</span>
                    <input
                      onChange={(e) => setModelno(e.target.value)}
                      value={Modelno}
                      type="number"
                      id="modelno"
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>

                  <label
                    htmlFor="invoiceno"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>Invoice No</span>
                    <input
                      onChange={(e) => setInvoiceno(e.target.value)}
                      value={Invoiceno}
                      type="text"
                      id="invoiceno"
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>

                  <label
                    htmlFor="underamc"
                    className="w-1/3 flex flex-col gap-1"
                  >
                    <span>Under AMC</span>
                    <input
                      onChange={(e) => setUnderamc(e.target.value)}
                      value={Underamc}
                      type="text"
                      id="underamc"
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus: bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label htmlFor="fault" className="w-full flex flex-col gap-1">
                    <span>Fault/Issue </span>
                    <input
                      onChange={(e) => setFault(e.target.value)}
                      value={Fault}
                      type="text"
                      id="fault"
                      className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-500"
                    />
                  </label>

                  {/* <label
                    htmlFor="image"
                    className="w-full flex gap-3 cursor-default"
                  >
                    <span> Upload Image </span>
                    <div className="w-full border border-gray-400 text-1 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all">
                      <input
                        onChange={(e) => setUploadimage(e.target.value)}
                        type="file"
                        id="image"
                      />
                    </div>
                  </label> */}
                </div>

                <div className="self-start flex items-center gap-2">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 rounded-md text-white"
                  >
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
                <th className="border">Complaint Raised By</th>
                <th className="border">Location</th>
                <th className="border">Issue Raise Date</th>
                <th className="border">Item Name</th>
                <th className="border">Model No</th>
                <th className="border">Invoice No</th>
                <th className="border">Under AMC</th>
                <th className="border">Fault/Issue</th>
                <th className="border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((el, index) => (
                <tr key={Math.random()}>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.Complaintraisedby}</td>
                  <td className="border text-center">{el.Location}</td>
                  <td className="border text-center:=">{el.Issueraisedate}</td>
                  <td className="border text-center">{el.Itemname}</td>
                  <td className="border text-center">{el.Modelno}</td>
                  <td className="border text-center">{el.Invoiceno}</td>
                  <td className="border text-center">{el.Underamc}</td>
                  <td className="border text-center">{el.Fault}</td>

                  <td className="border text-center cursor-pointer">
                    <div className="flex gap-1 pl-2">
                      <button
                        onClick={() => {
                          openModal();
                          setHeading("Raise Your Complaint");
                          setComplaintraisedby(el.Complaintraisedby);
                          setLocation(el.Location);
                          setIssueraisedate(el.Issueraisedate);
                          setItemname(el.Itemname);
                          setModelno(el.Modelno);
                          setInvoiceno(el.Invoiceno);
                          setUnderamc(el.Underamc);
                          setFault(el.Fault);
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

                            // in order to delete data from localstorage when we click on delete btn we have to update the localstorage to

                            localStorage.clear(); // first we clear the localstorage
                            // then we store updated data NOTE: name provided here should be same as the name provided in onSubmit() function
                            localStorage.setItem(
                              "complainData",
                              JSON.stringify(data1)
                            );
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
