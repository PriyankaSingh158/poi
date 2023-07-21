import { FC } from "react";
import { useForm } from "react-hook-form";
interface FormFields {
  state: string;
  city: string;
  district: string;
  pincode: string;
  address: string;
}

export const ContactInfoForm: FC<{
  previousFunc: () => void;
}> = ({ previousFunc }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      state: "",
      city: "",
      district: "",
      pincode: "",
      address: "",
    },
  });
  const submitHandler = (data: FormFields) => {
    console.log(data);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold ">Add New Leader</h2>
          <form
            className="flex flex-col gap-2 mt-7"
            noValidate
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex flex-col gap-5 mt-5 border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h3 className="absolute text-3xl font-thin top-[-6%] left-4 px-3 bg-white">
                Contact Information
              </h3>

              <div className="relative flex flex-col mt-8">
                <h4 className="text-xl z-20 self-center bg-white px-3">
                  Permanent Address
                </h4>
                <span className="w-full h-[1px] left-0 bg-gray-300 top-1/2 absolute z-10 block" />
              </div>

              <div className="w-full flex gap-5">
                <label
                  htmlFor="Enteraddress"
                  className="w-1/2 flex flex-col gap-1 "
                >
                  <span>
                    Enter Your Address
                    <strong className="text-red-600">*</strong>
                  </span>
                  <textarea className="w-full h-full border flex border-gray-400  px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none" />
                </label>

                <div className="flex w-1/2 gap-5">
                  <div className=" w-full flex gap-2 rounded-md flex-col border-gray-200 z-30 bg-white ">
                    <label
                      htmlFor="Enterstate"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter State <strong className="text-red-600">*</strong>
                      </span>
                      <select
                        {...register("state", {
                          required: {
                            value: true,
                            message: "Enter state  ",
                          },
                        })}
                        className="w-full border flex border-gray-400  px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      >
                        {errors.state && (
                          <span className="text-red-500">
                            {errors.state.message}
                          </span>
                        )}

                        <option value="Assam">Assam</option>
                      </select>
                    </label>
                    <label
                      htmlFor="Entercity"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter City <strong className="text-red-600">*</strong>
                      </span>

                      <input
                        {...register("city", {
                          required: {
                            value: true,
                            message: "City is required ",
                          },
                        })}
                        type="text"
                        id="Entercity"
                        className="w-full border flex border-gray-400  px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                      {errors.city && (
                        <span className="text-red-500">
                          {errors.city.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="w-full flex gap-2 flex-col rounded-md border-gray-200 z-30 bg-white ">
                    <label
                      htmlFor="Enterdistrict"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter District
                        <strong className="text-red-600">*</strong>
                      </span>

                      <input
                        {...register("district", {
                          required: {
                            value: true,
                            message: " District required ",
                          },
                        })}
                        type="text"
                        id="Enterdistrict"
                        className="w-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                      {errors.district && (
                        <span className="text-red-500">
                          {errors.district.message}
                        </span>
                      )}
                    </label>

                    <label
                      htmlFor="Enterpincode"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter Pincode
                        <strong className="text-red-600">*</strong>
                      </span>
                      <input
                        {...register("pincode", {
                          required: {
                            value: true,
                            message: "Pincode is required ",
                          },
                        })}
                        type="text"
                        id="EnterPincode"
                        className="w-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                      {errors.pincode && (
                        <span className="text-red-500">
                          {errors.pincode.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col mt-8">
                <h4 className="text-xl z-20 self-center bg-white px-3">
                  Present Address
                </h4>
                <span className="w-full h-[1px] left-0 bg-gray-300 top-1/2 absolute z-10 block" />
              </div>
              <div className="w-full flex gap-5">
                <label
                  htmlFor="Enteraddress"
                  className="w-1/2 flex flex-col gap-1"
                >
                  <span>
                    Enter Your Address
                    <strong className="text-red-600">*</strong>
                  </span>
                  <textarea
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address required",
                      },
                    })}
                    className="w-full h-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                  />
                  {errors.address && (
                    <span className="text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>

                <div className="flex w-1/2 gap-5">
                  <div className=" w-full flex gap-2 rounded-md flex-col border-gray-200 z-30 bg-white ">
                    <label
                      htmlFor="Enterstate"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter State <strong className="text-red-600">*</strong>
                      </span>
                      <select className="w-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none">
                        <option value="Assam">Assam</option>
                      </select>
                    </label>

                    <label
                      htmlFor="Entercity"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter City <strong className="text-red-600">*</strong>
                      </span>
                      <input
                        type="text"
                        id="Entercity"
                        className="w-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                    </label>
                  </div>

                  <div className="w-full flex gap-2 flex-col rounded-md border-gray-200 z-30 bg-white ">
                    <label
                      htmlFor="Enterdistrict"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter District
                        <strong className="text-red-600">*</strong>
                      </span>
                      <input
                        type="text"
                        id="Enterdistrict"
                        className="w-full border flex border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                    </label>

                    <label
                      htmlFor="Enterpincode"
                      className="w-full flex flex-col gap-1"
                    >
                      <span>
                        Enter Pincode
                        <strong className="text-red-600">*</strong>
                      </span>
                      <input
                        type="text"
                        id="EnterPincode"
                        className="w-full border flex border-gray-400 text-1 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all resize-none"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-end flex items-center gap-3">
              <button
                onClick={previousFunc}
                className="py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                Previous
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
