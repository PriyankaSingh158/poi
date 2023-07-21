import { useState } from "react";
// import { ReactToPrint } from "react-to-print";
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

export const AddNewLetter = () => {
  const handlePrint = () => {
    window.print();
  };

  const [formData, setFormData] = useState({
    location: "",
    lettertype: "",
    pagesize: "",
    language: "",
    date: "",
    IDNo: "",
    filenumber: "",
    to: "",
    subject: "",
    reference: "",
    contactno: "",
    envelopetype: "",
    application: "",
    view: "",
    view1: "",
    view2: "",
    view3: "",
    view4: "",
    view5: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    console.log(formData);
  };

  return (
    <>
      <div className=" bg-white relative top-0 left-0 z-10 w-full">
        <div className="w-[90%] border bg-white m-auto my-10 overflow-hidden rounded-md shadow-md">
          <h2 className=" bg-gray-900 text-xl font-bold text-white py-2 px-4">
            ADD NEW LETTER
          </h2>
          <div className="border border-gray-800 flex w-full">
            <div className="flex flex-col gap-5 mt-10 w-1/2 p-5">
              <label
                htmlFor="yourlocation"
                className="w-full flex gap-5 items-center"
              >
                <span>Your Location </span>
                <select className="border flex border-gray-400  px-3 py-1 rounded-md focus:bg-gray-100 outline-none transition-all resize-none">
                  <option value="Delhi"> Delhi </option>
                  <option value="Delhi"> Bombay </option>
                  <option value="Delhi"> Chennai </option>
                </select>
              </label>

              <div className="w-full h-[1px] bg-gray-200" />

              <label htmlFor="lettertype" className="w-full flex gap-2">
                <span>
                  Letter Type <strong className="text-gray-900">*</strong>
                </span>
                <input type="radio" id="DoLetter" name="Lettertype" />
                <label htmlFor="doletter"> DO LETTER </label>
                <input
                  type="radio"
                  id="Letter"
                  name="Lettertype"
                  value="Letter"
                />
                <label htmlFor="letter"> LETTER </label>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label htmlFor="pagesize" className="w-full flex gap-2">
                <span>
                  Page Size <strong className="text-gray-900">*</strong>
                </span>
                <input type="radio" id="A4" name="pagesize" />
                <span>A4</span>
                <input type="radio" id="A5" name="pagesize" value="A5" />
                <span>A5</span>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label htmlFor="Language" className="w-full flex gap-2">
                <span>
                  Language <strong className="text-gray-900">*</strong>
                </span>
                <input type="radio" id="hindi" name="language" />
                <span>Hindi</span>
                <input
                  type="radio"
                  id="english"
                  name="language"
                  value="english"
                />
                <span>English</span>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label
                htmlFor="date"
                className="w-full flex gap-5 rounded-md items-center"
              >
                <span>
                  Date <strong className="text-gray-900">*</strong>
                </span>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border flex border-gray-400  px-3 py-1 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                />
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label
                htmlFor="id-no"
                className="w-full flex gap-5rounded-md items-center"
              >
                <span>
                  I.D.NO.<strong className="text-gray-900">*</strong>
                </span>
                <input
                  type="text"
                  id="id-no"
                  name="id-no"
                  className="border-gray-600  gap-5 px-2 py-1 rounded-md border focus:bg-gray-100 outline-none transition-all "
                />
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label
                htmlFor="filenumber"
                className="w-full flex gap-5 items-center"
              >
                <span>File Number</span>
                <select className=" border flex border-gray-400  px-3 py-1 rounded-md focus:bg-gray-100 outline-none transition-all resize-none">
                  <option value="A-1"> A-1 </option>
                </select>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />

              <label htmlFor="from" className="w-full flex gap-5 items-center">
                <span>
                  From <strong className="text-gray-900">*</strong>
                </span>
                <textarea
                  name="from"
                  id="from"
                  cols={3}
                  rows={2}
                  className="flex w-1/2  border border-gray-600"
                ></textarea>
              </label>

              <div className="self-end flex items-center gap-3">
                <button className=" flex gap-2 py-2 px-4 bg-blue-500  text-white">
                  Preview
                  <i className="bi bi-arrow-right"> </i>
                </button>
              </div>

              <div className="w-full h-[1px] bg-gray-200" />
              <label htmlFor="to" className="w-full flex gap-5 items-center">
                <span>
                  To <strong className="text-gray-900">*</strong>
                </span>
                <select className=" border flex border-gray-400  px-3 py-1 rounded-md focus:bg-gray-100 outline-none transition-all resize-none">
                  <option value="stateminister">
                    State Minister Agriculture GOI
                  </option>
                </select>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label
                htmlFor="subject"
                className="w-full flex gap-5 items-center"
              >
                <span>
                  Subject <strong className="text-gray-900"> * </strong>
                </span>
                <textarea
                  name="subject"
                  id="subject"
                  cols={3}
                  rows={2}
                  className="flex w-1/2  border border-gray-600"
                ></textarea>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />
              <label
                htmlFor="reference"
                className="w-full flex gap-5 items-center"
              >
                <span> Reference </span>
                <textarea
                  name="reference"
                  id="reference"
                  cols={3}
                  rows={2}
                  className="flex w-1/2  border border-gray-600"
                ></textarea>
              </label>
              <label
                htmlFor="contact"
                className="w-full flex gap-5 items-center"
              >
                <span>Contact no</span>
                <input
                  type="number"
                  id="contact"
                  name="number"
                  className="border-gray-600  gap-5 px-2 py-2  border focus:bg-gray-100 outline-none transition-all "
                ></input>
              </label>
              <div className="w-full h-[1px] bg-gray-200" />

              <label htmlFor="Envelopetype" className="w-full flex gap-2">
                <span> Envelope Type </span>

                <input type="radio" id="PH" name="PH" value="PH" />
                <span> PH </span>
                <input type="radio" id="NCSE" name="NCSE" value="NCSE" />
                <span> NCSE</span>
                <input type="radio" id="Byhand" name="Byhand" value="Byhand" />
                <span> BY HAND </span>
                <input type="radio" id="Bypost" name="Bypost" value="Bypost" />
                <span> BY POST </span>
              </label>

              <label htmlFor="file1" className="flex gap-3 cursor-default">
                <span> Application </span>
                <input type="file" id="file1" />
              </label>

              <label htmlFor="file2" className="flex gap-3 cursor-default">
                <span>View</span>
                <input type="file" id="file2" />
              </label>

              <label htmlFor="file3" className="flex gap-3 cursor-default">
                <span>View1</span>
                <input type="file" id="file3" />
              </label>

              <label htmlFor="file4" className="flex gap-3 cursor-default">
                <span>View2</span>
                <input type="file" id="file4" />
              </label>

              <label htmlFor="file5" className="flex gap-3 cursor-default">
                <span>View3</span>
                <input type="file" id="file5" />
              </label>

              <label htmlFor="file6" className="flex gap-3 cursor-default">
                <span>View4</span>
                <input type="file" id="file6" />
              </label>

              <label htmlFor="file7" className="flex gap-3 cursor-default">
                <span>View5</span>
                <input type="file" id="file7" />
              </label>
            </div>
            <div className="flex flex-col">
              <div className="flex-grow flex items-center justify-center bg-gray-500">
                <div className="bg-white w-[80%] h-[80%] shadow-md"></div>
              </div>
              <div className=" p-2 self-end flex flex-row items-center gap-3">
                <button
                  className="py-2 px-4 bg-blue-500 rounded-md text-white"
                  onClick={handleSave}
                >
                  SAVE LETTER
                </button>

                <button
                  className=" flex gap-2 py-2 px-4 bg-blue-500 rounded-md text-white"
                  onClick={handleSave}
                >
                  RESET
                  <i className="bi bi-arrow-clockwise"></i>
                </button>

                <button
                  className="flex gap-2 py-2 px-4 bg-blue-500 rounded-md text-white space-x-1"
                  onClick={handlePrint}
                >
                  PRINT LETTER
                  <i className="bi bi-printer "></i>
                </button>

                <button
                  className="flex gap-2 py-2 px-4 bg-blue-500 rounded-md text-white space-x-1"
                  onClick={handlePrint}
                >
                  PRINT ENVELOPE
                  <i className="bi bi-printer "></i>
                </button>

                <button
                  className="flex gap-2 py-2 px-4 bg-blue-500 rounded-md text-white space-x-1"
                  onClick={handlePrint}
                >
                  ENVELOPE COPY
                  <i className="bi bi-printer "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
