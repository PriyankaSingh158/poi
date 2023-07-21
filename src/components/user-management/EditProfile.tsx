import { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface FormFields {
  displayname: string;
  username: string;
  email: string;
  contactnumber: string;
  dateofbirth: string;
  about: string;
  bloodgroup: string;
  workandexperience: string;
  education: string;
  hobbies: string;
  designation: string;
  country: string;
}

export const EditProfile: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      displayname: "",
      username: "",
      email: "",
      contactnumber: "",
      dateofbirth: "",
      about: "",
      bloodgroup: "",
      workandexperience: "",
      education: "",
      hobbies: "",
      designation: "",
      country: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data: FormFields) => {
    console.log(data);

    alert("profile edited successfully");
  };

  return (
    <>
      <div className="bg-gray-700 top-0 left-0 z-10 w-full">
        <div className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20" />
        <div className="w-1/2 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <form
            onSubmit={handleSubmit(submitHandler)}
            noValidate
            className="flex flex-col gap-2 mt-7"
          >
            <label
              htmlFor="displayname"
              className="w-full font-semibold flex flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Display Name<strong className="text-red-600">*</strong>
              </span>
              {errors.displayname && (
                <span className="text-red-500">
                  {errors.displayname.message}
                </span>
              )}
              <input
                {...register("displayname", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="name"
                placeholder=""
                className="w-full border px-3 py-3 rounded border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>
            <label
              htmlFor="username"
              className="w-full font-semibold flex flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                User Name<strong className="text-red-600">*</strong>
              </span>
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
              <input
                {...register("username", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="name"
                placeholder=""
                className="w-full border  px-3 py-3  rounded border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
              <label
                htmlFor="email"
                className="w-full font-semibold flex flex-col gap-2"
              >
                <span className="capitalize font[-500]">
                  Email<strong className="text-red-600">*</strong>
                </span>
                {errors.email && (
                  <span className="text-red-500">{errors.email?.message}</span>
                )}
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    pattern: {
                      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Please provide a valid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full border px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
                ></input>
              </label>
            </label>
            <label
              htmlFor="contactnumber"
              className="w-full font-semibold flex flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Contact Number<strong className="text-red-600">*</strong>
              </span>
              <span className="text-red-500">
                {errors.contactnumber?.message}
              </span>

              <input
                {...register("contactnumber", {
                  required: {
                    value: true,
                    message: "field is required",
                  },
                })}
                type="number"
                id="contact"
                className="w-full border num  px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="date"
              className="w-full font-semibold flex flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Date Of Birth <strong className="text-red-600">*</strong>
              </span>

              {errors.dateofbirth && (
                <span className="text-red-500">
                  {errors.dateofbirth.message}
                </span>
              )}

              <input
                {...register("dateofbirth", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="date"
                id="dob"
                className="w-full border num  px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="about"
              className="w-full flex  font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                About <strong className="text-red-600">*</strong>
              </span>
              {errors.about && (
                <span className="text-red-500">{errors.about.message}</span>
              )}
              <textarea
                {...register("about", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                className="w-full border px-3 py-6 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></textarea>
            </label>

            <label
              htmlFor="bloodgroup"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Blood Group <strong className="text-red-600">*</strong>
              </span>
              {errors.bloodgroup && (
                <span className="text-red-500">
                  {errors.bloodgroup.message}
                </span>
              )}
              <input
                {...register("bloodgroup", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="bloodgroup"
                className="w-full border  px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="workandexperience"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Work and Experience <strong className="text-red-600">*</strong>
              </span>
              {errors.workandexperience && (
                <span className="text-red-500">
                  {errors.workandexperience.message}
                </span>
              )}
              <input
                {...register("workandexperience", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="work"
                className="w-full border px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="Education"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Education <strong className="text-red-600">*</strong>
              </span>
              {errors.education && (
                <span className="text-red-500">{errors.education.message}</span>
              )}
              <input
                {...register("education", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="education"
                className="w-full border px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="Hobbies"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">
                Hobbies <strong className="text-red-600">*</strong>
              </span>
              {errors.hobbies && (
                <span className="text-red-500">{errors.hobbies.message}</span>
              )}
              <input
                {...register("hobbies", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                type="text"
                id="hobbies"
                className="w-full border  px-3 py-3 rounded   border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all"
              ></input>
            </label>

            <label
              htmlFor="designation"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">Designation</span>
              <input
                type="text"
                id="designation"
                placeholder="Minister Of Power (I/C)"
                className="w-full border px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all "
              ></input>
            </label>

            <label
              htmlFor="country"
              className="w-full flex font-semibold flex-col gap-2"
            >
              <span className="capitalize font[-500]">Country</span>
              <input
                type="text"
                id="country"
                placeholder="India"
                className="w-full border px-3 py-3 rounded  border-zinc-200 bg-zinc-50 outline-none focus:bg-zinc-100 focus:border-zinc-300 transition-all "
              ></input>
            </label>

            <div className="self-end flex items-center gap-2">
              <button
                type="button"
                className="py-2 px-4 bg-orange-200 rounded-full  text-orange-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-gray-300 rounded-full text-gray-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
