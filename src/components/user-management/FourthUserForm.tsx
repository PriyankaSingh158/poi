import { useForm } from "react-hook-form";
import { FC, useState } from "react";

interface FormFields {
  lettertype: string;
  date: string;
  template: string;
  name: string;
  from: string;
  subject: string;
  reference: string;
  honor: string;
  to: string;
  filecode: string;
  contact: string;
  envelopetype: string;
}

export const FourthUserForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    // setting default values
    defaultValues: {
      name: "",
      subject: "",
    },
  });

  const submitHandler = (data: FormFields) => {
    console.log(data);

    setData((lst) => {
      const data1 = [...lst];
      data1.push({
        ...data,
      });
      console.log(data1);

      return data1;
    });
    closeModal();
  };

  const [heading, setHeading] = useState("LetterType");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // Array to show data in a table
  const [data, setData] = useState<
    {
      lettertype: string;
      date: string;
      template: string;
      name: string;
      from: string;
      subject: string;
      reference: string;
      honor: string;
      to: string;
      filecode: string;
      contact: string;
      envelopetype: string;
    }[]
  >([]);
  return (
    <>
      <div className="">
        <button
          onClick={openModal}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Letter Type
        </button>

        {showModal && (
          <div className="w-1/2 m-auto shadow-lg p-5 mt-8">
            <h2 className="text-2xl font-bold ">{heading}</h2>
            <form noValidate onSubmit={handleSubmit(submitHandler)}>
              <div className="flex items-center gap-5 mt-6 w-full">
                <label
                  htmlFor="Letter Type"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    <b>Letter Type</b>
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    id="Letter"
                    {...register("lettertype", {
                      required: "Letter type is required",
                    })}
                    className="w-full border border-gray-400 text-md px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all"
                  >
                    <option value="Letter">Letter</option>
                    <option value="envelope">envelope</option>
                  </select>
                  {errors.lettertype && (
                    <span className="text-red-500">
                      {errors.lettertype.message}
                    </span>
                  )}
                </label>
                <label htmlFor="Date" className="w-1/3 flex flex-col gap-1">
                  <span>
                    <b>Date</b> <strong className="text-red-600">*</strong>
                  </span>

                  <input
                    {...register("date", {
                      required: "Date is required",
                    })}
                    type="date"
                    id="24.05.2022"
                    placeholder="24.05.2022"
                    className="w-full border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none"
                  />
                  {errors.date && (
                    <span className="text-red-500">{errors.date.message}</span>
                  )}
                </label>
                <label htmlFor="Template" className="w-1/3 flex flex-col gap-1">
                  <span>
                    <b>Template</b> <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    {...register("template")}
                    id="name"
                    className="w-full border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
                  >
                    <option value="selecttemplate">select template</option>
                    <option value="priyanka">priyanka</option>
                    <option value="abc">abc</option>
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
                    {...register("from")}
                    className="w-1/2 border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                    rows={5}
                  />
                </label>

                <label htmlFor="Subject" className="w-1/2 flex flex-col gap-1">
                  <span>
                    <b>Subject</b> <strong className="text-red-600">*</strong>
                  </span>
                  <textarea
                    {...register("subject", {
                      // Option 1
                      required: {
                        value: true,
                        message: "Subject is required",
                      },
                    })}
                    className=" flex w-1/2 border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                    rows={5}
                  />
                  {errors.subject && (
                    <span className="text-red-500">
                      {errors.subject.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <label
                  htmlFor="Reference"
                  className="w-1/2 flex flex-col gap-1"
                >
                  <span>
                    <b>Reference</b> <strong className="text-red-600">*</strong>
                  </span>
                  <textarea
                    {...register("reference")}
                    className=" flex w-1/2 border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                    rows={5}
                  />
                </label>
                <div className="">
                  <label htmlFor="Honor" className="w-full flex flex-col gap-1">
                    <span>
                      <b>Honor</b> <strong className="text-red-600">*</strong>
                    </span>
                    <select
                      {...register("honor")}
                      id="Honor"
                      name="Select Honor"
                      className="border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
                    >
                      <option value="Select Honor">Select Honer</option>
                      <option value="xyz">xyz</option>
                    </select>
                  </label>
                  <label htmlFor="To" className="w-full flex flex-col gap-1">
                    <span>
                      <b>To</b>
                    </span>
                    <select
                      {...register("to")}
                      id="To"
                      name="Select Designation"
                      className="flex border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
                    >
                      <option value="Select Designation">
                        Select Designation
                      </option>
                      <option value="SD">SD</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <label
                  htmlFor="File Code"
                  className="w-1/2 flex flex-col gap-1"
                >
                  <span>
                    <b>File Code</b>
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    {...register("filecode", {
                      // Option 1
                      required: {
                        value: true,
                        message: "Filecode is required",
                      },
                    })}
                    id="FileCode"
                    name="Select-File-Code"
                    className=" flex w-1/4 border border-gray-400  px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
                  >
                    <option value="Select File Code">Select File Code</option>
                    <option value="123">123</option>
                  </select>
                </label>
                <label htmlFor="Contact" className="w-1/2 flex flex-col gap-1">
                  <span>
                    <b>Contact</b> <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    {...register("contact", {
                      required: {
                        value: true,
                        message: "contact is required",
                      },
                    })}
                    type="number"
                    className="w-1/2 border-gray-600 text-l px-3 py-2 rounded-md border focus:bg-gray-100 outline-none transition-all "
                  />
                </label>
                <label
                  htmlFor="Envelope-Type"
                  className="w-1/2 flex flex-col gap-1"
                >
                  <span>
                    <b>Envelope Type</b>
                    <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    {...register("envelopetype")}
                    id="Envelope-Type"
                    name="Envelope-Type"
                    className=" flex w-1/2 border border-gray-400 text-l px-1 py-1 rounded-md focus:bg-gray-100 outline-none transition-all"
                  >
                    <option value="PH">PH</option>
                    <option value="DH">DH</option>
                  </select>
                </label>
              </div>
              <div className="ml-auto w-max p-2 rounded-none">
                <button
                  type="button"
                  onClick={() => closeModal()}
                  className="py-1 px-3 bg-blue-400 text-white box-border rounded border"
                >
                  close letter
                </button>
                <button
                  type="submit"
                  className="py-1 px-3 bg-cyan-500 box-border text-white rounded border"
                >
                  Preview Letter
                </button>
                <button
                  type="submit"
                  className="py-1 px-3 bg-blue-400 text-white box-border rounded border"
                >
                  Print
                </button>
              </div>
            </form>
          </div>
        )}
        <table className="w-full border mt-10">
          <thead>
            <tr>
              <th className="border">#</th>
              <th className="border">LetterType</th>
              <th className="border">Date</th>
              <th className="border">Tempelate</th>
              {/* <th className="border">Name</th> */}
              <th className="border">From</th>
              <th className="border">Subject</th>
              <th className="border">Reference</th>
              <th className="border">Honor</th>
              <th className="border">To</th>
              <th className="border">FileCode</th>
              <th className="border">Contact</th>
              <th className="border">EnvelopeType</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index + el.date}>
                <td className="border text-center">{index + 1}</td>
                <td className="border text-center">{el.lettertype}</td>
                <td className="border text-center">{el.date}</td>
                <td className="border text-center">{el.template}</td>
                {/* <td className="border text-center">{el.name}</td> */}
                <td className="border text-center">{el.from}</td>
                <td className="border text-center">{el.subject}</td>
                <td className="border text-center">{el.reference}</td>
                <td className="border text-center">{el.honor}</td>
                <td className="border text-center">{el.to}</td>
                <td className="border text-center">{el.filecode}</td>
                <td className="border text-center">{el.contact}</td>
                <td className="border text-center">{el.envelopetype}</td>
                <td
                  className="border text-center cursor-pointer"
                  onClick={() => {
                    openModal(); // shows form
                    setHeading("edit Letter"); // change heading
                  }}
                >
                  edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
