import { useForm } from "react-hook-form";
import { FC } from "react";

interface FormFields {
  username: string;
  password: string;
  firstname: string;
  Lastname: string;
  date: string;
  martialStatus: string;
}

export const AddLeader1: FC<{
  nextfunc: () => void;
  previousFunc: () => void;
}> = ({ nextfunc, previousFunc }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    // setting default values
    defaultValues: {
      username: "",
      password: "",
      Lastname: "",
      firstname: "",
      date: "",
      martialStatus: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data: FormFields) => {
    console.log(data);
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full backdrop-blur-[2px] h-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold "> Add New Leader </h2>
          <button
            type="button"
            className=" top-6 right-6 hover:bg-gray-100 enable_transition active:scale-100 py-1 px-3 text-md font-semibold lowercase border border-gray-400 rounded-md absolute"
          >
            esc
          </button>
          <form
            className="flex flex-col gap-2 mt-7"
            noValidate
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex gap-5 mt-5 grid-cols-3 border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h3 className="absolute text-2xl font-thin top-[-6%] left-4 px-3 bg-white">
                Personal Information
              </h3>

              <div className="grid gap-5 grid-cols-3 w-full">
                <label htmlFor="Firstname" className="flex flex-col gap-1">
                  <span>
                    First Name
                    <strong className="text-red-600"> * </strong>
                  </span>
                  <input
                    {...register("firstname", {
                      // Option 1
                      required: {
                        value: true,
                        message: "firstname is required",
                      },
                    })}
                    type="text"
                    id="Firstname"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                    pattern="[A-Za-z]"
                  />
                  {errors.firstname && (
                    <span className="text-red-500">
                      {errors.firstname.message}
                    </span>
                  )}
                </label>

                <label htmlFor="Middlename" className="flex flex-col gap-1">
                  <span> Middle Name </span>
                  <input
                    type="text"
                    id="Middlename"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  />
                </label>

                <label htmlFor="Lastname" className="flex flex-col gap-1">
                  <span>
                    Last Name <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    {...register("Lastname", {
                      required: {
                        value: true,
                        message: "Lastname is required",
                      },
                    })}
                    type="text"
                    id="Lastname"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  />

                  {errors.Lastname && (
                    <span className="text-red-500">
                      {errors.Lastname.message}
                    </span>
                  )}
                </label>

                <label htmlFor="Selectgender" className="flex flex-col gap-1">
                  <span>
                    Select Gender <strong className="text-red-600"> * </strong>
                  </span>
                  <input
                    type="text"
                    id="selectgender"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  />
                </label>

                <label htmlFor="dateofbirth" className="flex flex-col gap-1">
                  <span>
                    Date Of Birth <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    id="dob"
                    {...register("date", {
                      required: "Date of Birth is required",
                      validate: {
                        notEligible(val) {
                          const curDate = new Date();
                          const userDate = new Date(val);

                          let day = curDate.getDate() - userDate.getDate();
                          let month = curDate.getMonth() - userDate.getMonth();
                          let year =
                            curDate.getFullYear() - userDate.getFullYear();

                          const daysInCurMonth = new Date(
                            curDate.getFullYear(),
                            curDate.getMonth() - 1,
                            0
                          ).getDate();

                          if (day < 0) {
                            month -= 1;
                            day = daysInCurMonth - -day;
                          }

                          if (month < 0) {
                            month = 12 - -month;
                            year -= 1;
                          }
                          return (
                            year >= 21 || // calculating age acc. to given input
                            "Age must be at least 21 years old"
                          );
                        },
                      },
                    })}
                    type="date"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  />
                  <span className="text-red-500">{errors.date?.message}</span>
                </label>
                <label
                  htmlFor="SelectQualifications"
                  className="flex flex-col gap-1"
                >
                  <span>
                    Select Qualifications
                    <strong className="text-red-600"> * </strong>
                  </span>
                  <select
                    name="text"
                    id="selectqualifications"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="SelectQualifications">
                      Select Qualification
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                  </select>
                </label>

                <label htmlFor="martialStatus" className="flex flex-col gap-1">
                  <span>
                    Select Marital Status
                    <strong className="text-red-600"> * </strong>
                  </span>
                  <select
                    id="martialStatus"
                    {...register("martialStatus")}
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="married">Married </option>
                    <option value="unmarried">Unmarried </option>
                  </select>
                </label>

                {watch("martialStatus") === "married" && (
                  <>
                    <label htmlFor="spousename" className="flex flex-col gap-1">
                      <span>
                        Enter Spouse Name
                        <strong className="text-red-600">*</strong>
                      </span>
                      <input
                        type="text"
                        id="spousename"
                        className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                      ></input>
                    </label>

                    <label
                      htmlFor="Noofdaughter"
                      className="flex flex-col gap-1"
                    >
                      <span>Enter No Of Daughter</span>
                      <input
                        type="text"
                        id="noofdaughter"
                        className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                      ></input>
                    </label>

                    <label htmlFor="Noofson" className="flex flex-col gap-1">
                      <span>Enter No Of Sons</span>
                      <input
                        type="text"
                        id="noofson"
                        className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                      ></input>
                    </label>
                  </>
                )}
                <label
                  htmlFor="selectprofession"
                  className="flex flex-col gap-1"
                >
                  <span>
                    Select Profession
                    <strong className="text-red-600"> * </strong>
                  </span>
                  <select
                    name="text"
                    id="selectprofession"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="selectprofession">Select Profession</option>
                  </select>
                </label>

                <label htmlFor="sourceofincome" className="flex flex-col gap-1">
                  <span>Enter Source Of Income</span>
                  <input
                    type="text"
                    id="sourceofincome"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  ></input>
                </label>

                <label htmlFor="criminalcases" className="flex flex-col gap-1">
                  <span>Enter Criminal Cases</span>
                  <input
                    type="text"
                    id="criminalcases"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  ></input>
                </label>
              </div>
            </div>
            <div className="self-end flex items-center gap-3">
              <button
                type="button"
                onClick={previousFunc}
                className=" py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                previous
              </button>
              <button
                type="button"
                onClick={nextfunc}
                className=" py-2 px-4 bg-blue-500 rounded-md text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
