import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { LuLock } from "react-icons/lu";
// import { AiOutlineKey } from "react-icons/ai";
import { HiMail, HiPhone, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { FaPhone, FaUser, FaLock } from "react-icons/fa6";
import op from "../../assets/images/background.jpg";

interface FormFields {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
}
export const LeaderRegisterForm: FC<{ hideRegisterForm: () => void }> = ({
  hideRegisterForm,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      phonenumber: " ",
      password: "",
    },
    mode: "onChange",
  });

  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => setShowModal(false);
  // const openModal = () => setShowModal(true);
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [phonenumber, setphonenumber] = useState("");

  // const [data,setData] = useState<
  // {
  //   name:string;
  //   email:string;
  //   phonenumber:string;
  //   password:string,
  //   id:string;

  // }[]
  // >([]);

  // const submiHandler = () => {
  //   setData((1st)) => {
  //     const data1=[...1st];

  //   }
  //   setname("");
  //   setemail("");
  //   setphonenumber("");
  //   setpassword("");
  //   alert("Register Successfully.");
  //   closeModal();
  // };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
        className="text-sky-800 w-max m-auto mt-10 rounded-xl shadow-xl bg-sky-50 flex flex-col items-center py-9 px-7 gap-5 font-[500] max-[500px]:px-4 max-lg:w-full"
      >
        <h3 className="hidden capitalize text-[2rem] font-[300] mt-4 max-lg:text-center max-lg:block">
          Welcome to the Politician of India
        </h3>
        <h2 className="uppercase font-[200] text-6xl flex flex-col items-center gap-2 max-lg:hidden">
          <HiUserAdd className="text-6xl" />
          REGISTER
        </h2>
        <p className="text-center text-sm">
          Sign Up And Connect With The Leaders & Emerging Leaders Around The
          India.
        </p>
        <div
          className=" w-full  flex justify-between px-4
          "
        >
          <label htmlFor="leader">
            <input type="radio" id="text" name="leader" value="leader"></input>
            <span>Leader</span>
          </label>

          <label htmlFor="emergingleader">
            <input
              type="radio"
              id="text"
              name="leader"
              value="emergingleader"
            ></input>
            <span>Emerging Leader</span>
          </label>

          <label htmlFor="citizen">
            <input type="radio" id="text" name="leader" value="citizen"></input>
            <span>Citizen</span>
          </label>
        </div>

        <section className="px-4 w-full mt-5 max-[500px]:px-0">
          <div className="w-full bg-sky-100 flex flex-col overflow-hidden rounded-lg shadow-md">
            <label
              htmlFor="username"
              className="w-full relative flex flex-col border-b border-sky-200"
            >
              <input
                placeholder=""
                type="text"
                className={
                  "w-full pt-10 pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent text-sm"
                }
                id="username"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },

                  validate: {
                    notEnough(val) {
                      return (
                        val.length > 5 || "Please enter a 5 character long name"
                      );
                    },
                  },
                })}
              />

              <BiUser className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
              <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md capitalize">
                Name
              </span>
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>

            <label
              htmlFor="email"
              className="w-full relative flex flex-col border-b border-sky-200"
            >
              <input
                placeholder=" "
                type="email"
                className={
                  "w-full pt-10 pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent text-sm"
                }
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <HiMail className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
              <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md capitalize">
                Email
              </span>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>

            <label
              htmlFor="phone"
              className="w-full relative flex flex-col border-b border-sky-200"
            >
              <input
                placeholder=""
                type="number"
                pattern="[0-9]{10}"
                className={
                  "w-full pt-10 num pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent text-sm"
                }
                id="phoneno"
                {...register("phonenumber", {
                  required: "phonenumber is required",
                  validate: {
                    checkLength(val) {
                      return (
                        val.length === 10 || "Phonenumber must be 10 digits"
                      );
                    },
                  },
                })}
              />
              <HiPhone className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
              <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md capitalize">
                (+91) Phone Number
              </span>
              <span className="text-red-500">
                {errors.phonenumber?.message}
              </span>
            </label>

            <label
              htmlFor="Password"
              className="w-full relative flex flex-col border-b border-sky-200"
            >
              <input
                placeholder=""
                type="password"
                className={
                  "w-full pt-10 pb-5 pl-16 text-md outline-none focusEvent transition-all bg-transparent text-sm"
                }
                id="password"
                {...register("password", {
                  required: "password is required",
                  validate: {
                    checkLength(val) {
                      return (
                        val.length >= 8 || "Password must be 8 character long"
                      );
                    },
                  },
                })}
              />

              <LuLock className="text-3xl absolute top-1/2 left-5 translate-y-[-50%] text-sky-800" />
              <span className="ml-16 absolute transition-all top-7 translate-y-[-50%] font-semibold text-md capitalize">
                Password
              </span>

              <span className="text-red-500">{errors.password?.message}</span>
            </label>
          </div>

          <button
            type="submit"
            className="py-2 px-6 font-semibold bg-sky-800 text-sky-50 rounded-full mt-8"
          >
            Register
          </button>
          <p className="mt-5">
            Already registered?
            <button onClick={hideRegisterForm} className="underline">
              Login
            </button>
          </p>
        </section>
      </form>
    </>
  );
};
