import { convertFileToBase64 } from "./convertFile";
import op from "../../assets/images/background.jpg";
import { ChangeEvent, useState } from "react";

export const FifthUserForm = () => {
  const [showImg, setShowImg] = useState(op);

  const changeDp = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;

    const img = (await convertFileToBase64(file[0])) as { base64: string };

    setShowImg(img.base64);
  };

  return (
    <>
      <div className="w-1/2 m-auto  p-5 mt-8">
        <form action="#">
          <div className="flex items-center gap-5 mt-6 w-full">
            <label htmlFor="First-name" className="w-1/2 flex flex-col gap-1">
              <span>First Name</span>
              <input type="text" className="border-b border-gray-700" />
            </label>
            <label htmlFor="Last-name" className="w-1/2 flex flex-col gap-1">
              <span>Last Name</span>
              <input type="text" className="border-b border-gray-700" />
            </label>
          </div>

          <div className="flex items-center gap-5 mt-6 w-full">
            <label htmlFor="Email" className="w-1/2 flex flex-col gap-1">
              <span> Email</span>
              <input type="text" className="border-b border-gray-700" />
            </label>
            <label htmlFor="Password" className="w-1/2 flex flex-col gap-1">
              <span>Password</span>
              <input type="text" className="border-b border-gray-700" />
            </label>
          </div>
          <div className="flex items-center gap-5 mt-6 w-full">
            <label
              htmlFor="Select-Image"
              className="w-full justify-between flex gap-1"
            >
              <input
                type="file"
                name=""
                onChange={changeDp}
                id="Select-Image"
                className="hidden"
              />
              <span>Select Image</span>
              <img src={showImg} alt="" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
