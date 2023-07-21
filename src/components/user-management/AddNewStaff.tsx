import { FC, useState, useEffect } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useForm } from "react-hook-form";

interface FormFields {
  fullname: string;
  email: string;
  date: string;
  phonenumber: string;
  username: string;
  password: string;
  officeaddress: string;
}
export const AddNewStaff: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    // setting default values
    defaultValues: {
      fullname: "",
      email: "",
      date: "",
      phonenumber: "",
      username: "",
      password: "",
      officeaddress: "",
    },
    mode: "onChange",
  }); // for validation and form handling using react-hook-form

  const [heading, setHeading] = useState("Add New Staff");
  const [curId, setCurId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [officeaddress, setofficeaddress] = useState("");

  const [data, setData] = useState<
    {
      fullname: string;
      email: string;
      date: string;
      phonenumber: string;
      username: string;
      password: string;
      officeaddress: string;
      id: string;
    }[]
  >([]);
  //   const fetchData = async () => {
  useEffect(() => {
    const staffData = localStorage.getItem("staffData");
    if (staffData) {
      setData(JSON.parse(staffData));
    }
  }, []);

  const submitHandler = () => {
    setData((lst) => {
      const data1 = [...lst];

      const index = data1.findIndex((el) => el.id === curId);

      if (index < 0)
        data1.push({
          fullname,
          date,
          email,
          phonenumber,
          username,
          password,
          officeaddress,

          // Uploadimage,
          id: Math.random().toFixed(5),
        });
      else {
        data1.splice(index, 1, {
          fullname,
          date,
          email,
          phonenumber,
          username,
          password,
          officeaddress,

          id: curId,
        });
      }
      const convertedData = JSON.stringify(data1);
      localStorage.clear();
      localStorage.setItem("staffData", convertedData);
      return data1;
    });

    setfullname("");
    setdate("");
    setemail("");
    setphonenumber("");
    setusername("");
    setpassword("");
    setofficeaddress("");

    alert("data submitted successfully.");
    closeModal();
  };

  return (
    <>
      <div className="">
        <button
          onClick={() => {
            openModal();
            setHeading("Add New Staff");
            setfullname("");
            setemail("");
            setdate("");
            setphonenumber("");
            setusername("");
            setpassword("");
            setofficeaddress("");

            setCurId("");
          }}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add New Staff
        </button>
        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full mr-0">
            <div
              className="bg-gray-700 opacity-20 h-screen w-screen absolute top-0 left-0 z-20"
              onClick={closeModal}
            />
            <div className="w-2/5 mt-3 m-auto shadow-md border rounded-md border-gray-200 py-6 px-7 z-30 bg-white relative ">
              <h2 className="text-2xl font-bold ">{heading}</h2>
              <div className="w-full h-[1px] bg-gray-200" />

              <form
                className="flex flex-col gap-2 mt-7"
                noValidate
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="fullname"
                    className="w-1/2 font-normal flex flex-col gap-1"
                  >
                    <span>
                      Full Name <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      {...register("fullname", {
                        // Option 1
                        required: {
                          value: true,
                          message: "name is required",
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
                      onChange={(e) => setfullname(e.target.value)}
                      value={fullname}
                      type="text"
                      id="fullname"
                      placeholder=""
                      className="w-full border border-gray-400 text-l px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                    {errors.fullname && (
                      <span className="text-red-500">
                        {errors.fullname.message}
                      </span>
                    )}
                  </label>
                  <label
                    htmlFor="Email"
                    className="w-1/2 font-normal flex flex-col gap-1"
                  >
                    <span>
                      Email <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is required",
                        },
                      })}
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      type="text"
                      id="email"
                      placeholder=""
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="flex items-center gap-5">
                  <label
                    htmlFor="dob"
                    className="w-1/2 font-normal flex flex-col gap-1 "
                  >
                    <span>
                      Date Of Birth <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      {...register("date", {
                        required: "Date of Birth is required",
                        validate: {
                          notEligible(val) {
                            const curDate = new Date();
                            const userDate = new Date(val);

                            let day = curDate.getDate() - userDate.getDate();
                            let month =
                              curDate.getMonth() - userDate.getMonth();
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
                              year >= 21 || "Age must be at least 21 years old"
                            );
                          },
                        },
                      })}
                      onChange={(e) => setdate(e.target.value)}
                      value={date}
                      type="date"
                      id="dob"
                      placeholder=""
                      className="w-full border border-gray-400 text-1 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                    <span className="text-red-500">{errors.date?.message}</span>
                  </label>
                  <label
                    htmlFor="phno"
                    className="w-1/2 font-normal flex flex-col gap-1"
                  >
                    <span>
                      Phone No <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      onChange={(e) => setphonenumber(e.target.value)}
                      value={phonenumber}
                      type="number"
                      id="phno"
                      placeholder=""
                      className="w-full border border-gray-400 text-1 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="username"
                    className="w-1/2 font-normal flex flex-col gap-1"
                  >
                    <span>
                      Username <strong className="text-red-600">*</strong>
                    </span>
                    <input
                      {...register("username", {
                        required: {
                          value: true,
                          message: "username is required",
                        },
                      })}
                      onChange={(e) => setusername(e.target.value)}
                      value={username}
                      type="text"
                      id="username"
                      placeholder=""
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                    {errors.username && (
                      <span className="text-red-500">
                        {errors.username.message}
                      </span>
                    )}
                  </label>
                  <label
                    htmlFor="password"
                    className="w-1/2 font-normal flex flex-col gap-1"
                  >
                    <span>
                      Password<strong className="text-red-600">*</strong>
                    </span>
                    <input
                      {...register("password", {
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
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      type="password"
                      id="password"
                      placeholder=""
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                      // <i className="bi bi-eye-slash" />
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="officeaddress"
                    className="w-1/2 font-normal flex flex-col gap-1 "
                  >
                    <span>
                      Office Address <strong className="text-red-600">*</strong>
                    </span>
                    <textarea
                      {...register("officeaddress", {
                        required: {
                          value: true,
                          message: "address is required",
                        },
                      })}
                      onChange={(e) => setofficeaddress(e.target.value)}
                      value={officeaddress}
                      id="officeaddress"
                      placeholder=""
                      className="w-full border border-gray-400 px-3 py-2 rounded-md focus:bg-gray-100 outline-none transition-all placeholder:text-gray-400"
                    />
                    {errors.officeaddress && (
                      <span className="text-red-500">
                        {errors.officeaddress?.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="self-end flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="py-2 px-4 bg-orange-300 rounded-md text-orange-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-gray-300 rounded-md text-gray-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8 w-1/2 border-black bg-white text-gray-950 z-30 m-auto p-5 shadow">
          <h2 className="text-2xl font-semibold">User Input Data</h2>
          <table className="w-full flex-col border border-black mt-10">
            <thead>
              <tr>
                <th className="border">#</th>
                <th className="border">Full Name</th>
                <th className="border">Email</th>
                <th className="border">Date Of Birth</th>
                <th className="border">Phone Number</th>
                <th className="border">Username</th>
                <th className="border">Password</th>
                <th className="border">Office Address</th>
                <th className="border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((el, index) => (
                <tr key={Math.random()}>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{el.fullname}</td>
                  <td className="border text-center">{el.email}</td>
                  <td className="border text-center:=">{el.date}</td>
                  <td className="border text-center">{el.phonenumber}</td>
                  <td className="border text-center">{el.username}</td>
                  <td className="border text-center">{el.password}</td>
                  <td className="border text-center">{el.officeaddress}</td>

                  <td className="border  bg-gray-400 text-center cursor-pointer">
                    <div className="flex gap-1 pl-2">
                      <button
                        onClick={() => {
                          openModal();
                          setHeading("Add New Staff");
                          setfullname(el.fullname);
                          setemail(el.email);
                          setdate(el.date);
                          setphonenumber(el.phonenumber);
                          setusername(el.username);
                          setpassword(el.password);
                          setpassword(el.officeaddress);
                          setCurId(el.id);
                        }}
                      >
                        <BiPencil className="text-2xl" />
                      </button>
                      <button
                        onClick={() => {
                          // LOGIC TO DELETE DATA
                          setData((lst) => {
                            const data1 = [...lst];

                            const index = data1.findIndex(
                              (element) => element.id === el.id
                            );
                            data1.splice(index, 1);
                            localStorage.clear();
                            localStorage.setItem(
                              "staffdata",
                              JSON.stringify(data1)
                            );
                            return data1;
                          });
                        }}
                      >
                        <BiTrash className="text-2xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <button
          onClick={}
          className="py-1 px-5 capitalize font-semibold bg-cyan-500 text-white rounded-full"
        >
          click to fetch data
        </button> */}
      </div>
    </>
  );
};
