import { FC } from "react";
import { useForm } from "react-hook-form";

interface FormFields {
  username: string;
  password: string;
  firstname: string;
}

export const AddLeader: FC<{
  nextfunc: () => void;
  previousFunc: () => void;
}> = ({ nextfunc, previousFunc }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    // setting default values
    defaultValues: {
      username: "",
      password: "",
      firstname: "",
    },
  }); // for validation and form handling using react-hook-form

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
            <div className="flex gap-5 mt-5 border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h3 className="absolute text-3xl font-thin top-[-17%] left-4 px-3 bg-white ">
                Basic Information
              </h3>
              <label htmlFor="Username" className="w-1/3 flex flex-col gap-1">
                <span>
                  Username <strong className="text-red-600">*</strong>
                </span>
                <input
                  // Register our input field with react-hook-form for giving it control of our form
                  {...register("username", {
                    // Option 1
                    required: {
                      value: true,
                      message: "username is required",
                    },

                    // Option 2
                    // required: "username is required"
                  })}
                  type="text"
                  id="Addnewleader"
                  className="w-full border px-3 py-1 rounded-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                />

                {/* ADDING Error message */}
                {errors.username && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </label>
              <label htmlFor="LeaderType" className="w-1/3 flex flex-col gap-1">
                <span>
                  Leader Type <strong className="text-red-600">*</strong>
                </span>
                <select
                  name="text"
                  id="LeaderType"
                  className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                >
                  <option value="Selectstatus">Select Leader Type</option>
                </select>
              </label>
              <label htmlFor="Password" className="w-1/3 flex flex-col gap-1">
                <span>
                  Password <strong className="text-red-600">*</strong>
                </span>
                <input
                  {...register("password", {
                    // Option 1
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message: "please enter a strong password",
                    },
                  })}
                  type="text"
                  id="Password"
                  className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mt-10 border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
              <h3 className="absolute text-3xl font-thin top-[-6%] left-4 px-3 bg-white">
                Personal Info
              </h3>

              <div className="flex gap-3 mt-5">
                <label
                  htmlFor="FirstName"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    First Name <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "required",
                      },
                      //custom validation
                      validate: {
                        notEnough(val) {
                          return (
                            val.length > 5 ||
                            "Please enter a 5 character long name"
                          );
                        },
                      },
                    })}
                    type="text"
                    id="FirstName"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-point"
                  ></input>
                  {errors.firstname && (
                    <span className="text-red-500">
                      {errors.firstname.message}
                    </span>
                  )}
                </label>
                <label
                  htmlFor="Middlename"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>Middle Name</span>
                  <input
                    type="text"
                    id="MiddleName"
                    className="w-full border px-3 py-1 rounded-md  self-center border-gray-400 text-gray-900 bg-white cursor-point"
                  ></input>
                </label>
                <label htmlFor="LastName" className="w-1/3 flex flex-col gap-1">
                  <span>
                    Last Name <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="MiddleName"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-point"
                  ></input>
                </label>
              </div>

              <div className="flex gap-3 mt-5">
                <label
                  htmlFor="Father's Name"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    Father's Name <strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="FathersName"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-point"
                  ></input>
                </label>
                <label
                  htmlFor="MothersName"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    Mother's Name<strong className="text-red-600">*</strong>
                  </span>
                  <input
                    type="text"
                    id="MothersName"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-point"
                  ></input>
                </label>

                <label htmlFor="Gender" className="w-1/3 flex flex-col gap-1">
                  <span>
                    Gender<strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="Gender"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="SelectGender">Select Gender</option>
                  </select>
                </label>
              </div>
              <div className="flex gap-3 mt-5">
                <label
                  htmlFor="Profession"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    Profession<strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="Profession"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="SelectProfession">Select Profession </option>
                  </select>
                </label>
                <label
                  htmlFor="Qualifications"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    Qualifications <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="Qualifications"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="SelectQualifications">
                      Select Qualifications
                    </option>
                  </select>
                </label>
                <label
                  htmlFor="Maritalstatus"
                  className="w-1/3 flex flex-col gap-1"
                >
                  <span>
                    Marital Status <strong className="text-red-600">*</strong>
                  </span>
                  <select
                    name="text"
                    id="MaritalStatus"
                    className="w-full border px-3 py-1 rounded-md text-md self-center border-gray-400 text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="SelectMaritalStatus">
                      Select Marital Status
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <button
              onClick={previousFunc}
              className="py-2 px-4 bg-blue-500 rounded-md text-white"
              type="button"
            >
              previous
            </button>
            <button
              onClick={nextfunc}
              className="py-2 px-4 bg-blue-500 rounded-md text-white"
              type="button"
            >
              next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
