import { useState, useEffect, ChangeEvent } from "react";
export const AddNewPnr = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setData(inputValue);
    // Store data in local storage
    localStorage.setItem("myData", inputValue);
  };
  return (
    <>
      <div className=" bg-blue-200 relative top-0 left-0 z-10 w-full" />
      <div className="w-[90%] border bg-white m-auto my-10 overflow-hidden rounded-md shadow-md">
        <h2 className=" bg-gray-900 text-xl font-bold text-white py-2 px-4">
          ADD NEW PNR
        </h2>
        <div className="flex flex-col gap-5 mt-10 w-1/2 p-5">
          <label htmlFor="IDNo." className="w-full flex gap-5 items-center">
            <span>
              <b>I.D.No.</b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="text"
              id="id-no"
              name="id-no"
              className="border-gray-600 gap-5 px-2 py-1  border focus:bg-gray-100 outline-none transition-all"
            />
          </label>
          <div className="w-full h-[1px] bg-gray-200" />
          <label htmlFor="Location" className="w-full flex gap-5 items-center">
            <span>
              <b>Location</b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <select className="border flex border-gray-400  px-3 py-1  focus:bg-gray-100 outline-none transition-all resize-none">
              <option value="select location"> Select Location </option>
            </select>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />
          <label htmlFor="To" className="w-full flex gap-5 items-center">
            <span>
              <b>To </b> <strong className="text-gray-900"> * </strong>
            </span>
            <select className="border flex border-gray-400 px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none">
              <option value="selectto"> Select To </option>
            </select>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label htmlFor="category" className="w-full flex gap-3 items-center">
            <span>
              <b> Category </b> <strong className="text-gray-900"> * </strong>
            </span>
            <input type="radio" id="familymember" name="familymember" />
            <span> FAMILY MEMBER </span>
            <input
              type="radio"
              id="closeacquaintance"
              name="closeacquaintance"
            />
            <span> CLOSE ACQUAINTANCE </span>
            <input type="radio" id="guest" name="guest" />
            <span>GUEST</span>
            <input type="radio" id="important" name="important" />
            <span>IMPORTANT</span>
            <input type="radio" id="closerelatives" name="closerelatives" />
            <span>CLOSE RELATIVES</span>
            <input type="radio" id="partyleader" name="partyleader" />
            <span>PARTY LEADER</span>
            <input type="radio" id="closefriend" name="closefriend" />
            <span>CLOSE FRIEND</span>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="date"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Date </b> <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="date"
              id="date"
              name="date"
              className="border flex border-gray-400  px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none"
            />
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="pnr"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b> PNR </b> <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="number"
              id="pnr"
              name="pnr"
              className="border flex border-gray-400  px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none"
            />
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="trainnumber"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Train Number </b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="number"
              id="trainnumber"
              name="trainnumber"
              className="border flex border-gray-400 px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none"
            />
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="dateofjourney"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Date Of Journey </b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="date"
              id="date"
              name="date"
              className="border flex border-gray-400  px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none"
            />
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="sector"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Sector</b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <span> From</span>
            <input
              type="text"
              id="sector"
              name="from"
              className="border  border-gray-900"
            />
            <span>To</span>
            <input
              type="text"
              id="sector"
              name="to"
              className="border  border-gray-900"
            />
          </label>
          <div className="self-end flex items-center gap-3">
            <button className=" flex gap-2 py-2 px-4 bg-blue-500  text-white">
              Preview
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="class"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Class </b> <strong className="text-gray-900"> * </strong>
            </span>
            <select className="border flex border-gray-400  px-3 py-1  focus:bg-gray-100 outline-none transition-all resize-none">
              <option value="selecttrainclass"> Select Train Class </option>
            </select>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="passengername"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Passenger Name </b>
              <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="text"
              id="passengername"
              name="passengername"
              className="border border-gray-700"
            ></input>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="mobileno"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Mobile No </b> <strong className="text-gray-900"> * </strong>
            </span>
            <input
              type="text"
              id="mobileno"
              name="mobileno"
              className="border border-gray-700"
            ></input>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />
          <label
            htmlFor="ticketstatus"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b> Ticket Status </b>
            </span>
            <input
              type="text"
              id="ticketstatus"
              name="ticketstatus"
              className="border border-gray-700"
            ></input>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />
          <label
            htmlFor="ticketnumber"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Ticket Number</b>
            </span>
            <input
              type="number"
              id="ticketnumber"
              name="ticketname"
              className="border border-gray-700"
            ></input>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="referencename"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b> Reference Name </b>
            </span>
            <input
              type="text"
              id="referencename"
              name="referencename"
              className="border border-gray-700"
            ></input>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="signedby"
            className="w-full bg-gray-400 flex gap-5 items-center"
          >
            <span>
              <b> Signed By </b>
            </span>
            <select className="border flex border-gray-400  px-3 py-1  focus:bg-gray-100 outline-none transition-all resize-none">
              <option value="none"> none </option>
            </select>
          </label>
          <div className="w-full h-[1px] bg-gray-200" />

          <label
            htmlFor="digitalsignature"
            className="w-full flex gap-5 rounded-md items-center"
          >
            <span>
              <b>Digital Signature </b>
            </span>
            <select className="border flex border-gray-400 px-3 py-1 focus:bg-gray-100 outline-none transition-all resize-none">
              <option value="No"> No </option>
            </select>
          </label>

          <div className="w-full h-[1px] bg-gray-200" />
        </div>
        <div>
          <input type="text" value={data} onChange={handleDataChange} />
        </div>
      </div>
    </>
  );
};
