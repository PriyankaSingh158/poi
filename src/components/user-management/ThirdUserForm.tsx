import { BsImage } from "react-icons/bs";
import { convertFileToBase64 } from "./convertFile";
import { ChangeEvent, useState } from "react";

export const ThirdUserForm = () => {
  const [showImg, setShowImg] = useState(""); // useState(value) function return an array containing two values first the value passed while calling useState and second a function which is used to set the value of first field

  const [partyHead, setPartyHead] = useState("Add party"); // Example not for image purpose

  const changeDp = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;

    const img = (await convertFileToBase64(file[0])) as { base64: string };

    setShowImg(img.base64);
  };

  return (
    <>
      <div className="">
        <h1
          onClick={() => {
            setPartyHead("priyanka");
          }}
        >
          <b>{partyHead}</b>
        </h1>
        <form action="#">
          <div className="flex items-center gap-5 mt-6">
            <label htmlFor="partyname" className="w-1/2 flex flex-col gap-1">
              <span>
                Party Name<strong className="text-red-600">*</strong>
              </span>
              <input
                type="text"
                id="partyname"
                className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
              />
            </label>
            <label htmlFor="Status" className="w-1/2  flex flex-col gap-1">
              <span>
                Status <strong className="text-red-600">*</strong>
              </span>
              <select
                id="Status"
                className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
              >
                <option value="">none</option>
                <option value="0">active</option>
                <option value="1">deactive</option>
              </select>
            </label>
          </div>
          <div>
            <label
              htmlFor="founderdetails"
              className="w-full flex flex-col gap-1"
            >
              <span>
                Founder Details <strong className="text-red-600">*</strong>
              </span>
              <textarea
                className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                rows={5}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="partylogo"
              className="w-full flex  py-3 px-3  gap-2"
            >
              <span>
                Party Logo <strong className="text-red-600">*</strong>
                <BsImage className="text-2xl" />
                <img
                  src={showImg}
                  alt=""
                  className="w-28 aspect-square object-cover object-center bg-red-600"
                />
              </span>
              <input
                type="file"
                id="partylogo"
                onChange={changeDp}
                className="hidden"
              />
            </label>
          </div>
          <div className="ml-auto w-max p-2 ">
            <button
              type="button"
              className="py-1 px-2 bg-cyan-500 box-border text-white"
            >
              CLOSE
            </button>
            <button
              type="submit"
              className="py-1 px-2 bg-blue-400 text-white box-border rounded-sm border"
            >
              ADD PARTY
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
