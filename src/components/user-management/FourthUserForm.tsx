export const FourthUserForm = () => {
  return (
    <>
      <div className="w-1/2 m-auto shadow-lg p-5 mt-8">
        <form action="#"></form>
        <div className="flex items-center gap-5 mt-6 w-full">
          <label htmlFor="Letter Type" className="w-1/3 flex flex-col gap-1">
            <span>
              <b>Letter Type</b> <strong className="text-red-600">*</strong>
            </span>
            <select
              id="Letter"
              className="w-full border border-gray-400 text-md px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
            >
              <option value="Letter">Letter</option>
            </select>
          </label>

          <label htmlFor="Date" className="w-1/3 flex flex-col gap-1">
            <span>
              <b>Date</b> <strong className="text-red-600">*</strong>
            </span>

            <input
              type="date"
              id="24.05.2022"
              placeholder="24.05.2022"
              className="w-full border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none"
            />
          </label>
          <label htmlFor="Template" className="w-1/3 flex flex-col gap-1">
            <span>
              <b>Template</b> <strong className="text-red-600">*</strong>
            </span>
            <select
              name="mohib"
              className="w-full border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
            >
              <option value="mohib">mohib</option>
            </select>
          </label>
        </div>
        <div className="flex items-center gap-5 mt-6">
          <label htmlFor="From" className="w-1/2 flex flex-col gap-1">
            <span>
              <b> From</b>
              <strong className="text-red-600">*</strong>
            </span>
            <textarea
              className="w-1/2 border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
              rows={5}
            />
          </label>

          <label htmlFor="Subject" className="w-1/2 flex flex-col gap-1">
            <span>
              <b>Subject</b> <strong className="text-red-600">*</strong>
            </span>
            <textarea
              className=" flex w-1/2 border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
              rows={5}
            />
          </label>
        </div>
        <div className="flex items-center gap-5 mt-6">
          <label htmlFor="Reference" className="w-1/2 flex flex-col gap-1">
            <span>
              <b>Reference</b> <strong className="text-red-600">*</strong>
            </span>
            <textarea
              className=" flex w-1/2 border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
              rows={5}
            />
          </label>
          <div className="">
            <label htmlFor="Honer" className="w-full flex flex-col gap-1">
              <span>
                <b>Honer</b> <strong className="text-red-600">*</strong>
              </span>
              <select
                id="Honer"
                name="Select Honer"
                className="border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
              >
                <option value="Select Honer">Select Honer</option>
              </select>
            </label>
            <label htmlFor="To" className="w-full flex flex-col gap-1">
              <span>
                <b>To</b>
              </span>
              <select
                id="To"
                name="Select Designation"
                className="flex border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
              >
                <option value="Select Designation">Select Designation</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-6">
          <label htmlFor="File Code" className="w-1/2 flex flex-col gap-1">
            <span>
              <b>File Code</b>
              <strong className="text-red-600">*</strong>
            </span>
            <select
              id="File Code"
              name="Select File Code"
              className=" flex w-1/4 border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
            >
              <option value="Select File Code">Select File Code</option>
            </select>
          </label>
          <label htmlFor="Contact" className="w-1/2 flex flex-col gap-1">
            <span>
              <b>Contact</b> <strong className="text-red-600">*</strong>
            </span>
            <input
              type="text"
              className="w-1/2 border-gray-600 text-l px-3 py-2 rounded-md border focus:bg-gray-100 outline-none transition-all "
            />
          </label>
          <label htmlFor="Envelope Type" className="w-1/2 flex flex-col gap-1">
            <span>
              <b>Envelope Type</b> <strong className="text-red-600">*</strong>
            </span>
            <select
              id="Envelope Type"
              name="Envelope Type"
              className=" flex w-1/2 border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
            >
              <option value="PH">PH</option>
            </select>
          </label>
        </div>
        <div className="ml-auto w-max p-2 rounded-none">
          <button className="py-1 px-3 bg-cyan-500 box-border text-white rounded border">
            Preview Letter
          </button>
          <button className="py-1 px-3 bg-blue-400 text-white box-border rounded border">
            Save Letter
          </button>
          <button className="py-1 px-3 bg-blue-400 text-white box-border rounded border">
            Print
          </button>
        </div>
      </div>
    </>
  );
};
