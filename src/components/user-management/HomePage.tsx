import { FC } from "react";
import { AiOutlineKey } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <>
      <section className="w-11/12 max-[500px]:w-[95%] m-auto mt-10 py-5 px-6 max-lg:w-[95%] flex flex-col gap-8">
        <article className="w-full border flex flex-col gap-14 items-center shadow-md rounded-md py-8 px-14 max-lg:px-5 text-cyan-500 bg-cyan-50 border-cyan-300">
          <h2 className="text-4xl uppercase font-thin text-center flex flex-col items-center justify-center gap-5 text-cyan-900">
            <AiOutlineKey className="text-6xl " />
            core management
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to={"core-management/leader-designation"}
              className="shortcut_link"
            >
              manage designation
            </Link>

            <Link
              to={"core-management/leader-profession"}
              className="shortcut_link"
            >
              manage profession
            </Link>

            <Link to="core-management/manage-party" className="shortcut_link">
              manage party
            </Link>

            <Link
              to="core-management/manage-parliamentary"
              className="shortcut_link"
            >
              parliamentary constituency
            </Link>

            <Link
              to="core-management/manage-assembly"
              className="shortcut_link"
            >
              assembly constituency
            </Link>

            <Link to="core-management/manage-state" className="shortcut_link">
              manage state
            </Link>

            <Link
              to="core-management/manage-district"
              className="shortcut_link"
            >
              manage district
            </Link>

            <Link to="core-management/manage-city" className="shortcut_link">
              manage city
            </Link>
          </div>
        </article>

        <section className="grid grid-cols-3 max-[1491px]:grid-cols-2 max-[689px]:grid-cols-1 justify-center gap-8 w-full">
          <article className="border flex flex-col gap-14 items-center shadow-md rounded-md py-8 px-3 text-cyan-500 bg-cyan-50 border-cyan-300">
            <h2 className="text-4xl uppercase font-thin text-center flex flex-col items-center justify-center gap-5 text-cyan-900 px-14">
              <LuUser className="text-6xl " />
              user management
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="user-management/manage-users" className="shortcut_link">
                manage users
              </Link>

              <Link
                to={"user-management/manage-leaders"}
                className="shortcut_link"
              >
                manage leaders
              </Link>
            </div>
          </article>

          <article className="border flex flex-col gap-14 items-center shadow-md rounded-md py-8 px-3 text-cyan-500 bg-cyan-50 border-cyan-300">
            <h2 className="text-4xl uppercase font-thin text-center flex flex-col items-center justify-center gap-5 text-cyan-900 px-9">
              <FiSettings className="text-6xl" />
              office management
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="office-management/manage-employee"
                className="shortcut_link"
              >
                manage employees
              </Link>

              <Link
                to={"office-management/manage-letters"}
                className="shortcut_link"
              >
                manage letters
              </Link>
            </div>
          </article>

          <article className="border flex flex-col gap-14 items-center shadow-md rounded-md py-8 px-3 text-cyan-500 bg-cyan-50 border-cyan-300">
            <h2 className="text-4xl uppercase font-thin text-center flex flex-col items-center justify-center gap-5 text-cyan-900">
              <BiLockAlt className="text-6xl " />
              network management
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="network-management/manage-directory"
                className="shortcut_link"
              >
                manage directory
              </Link>

              <Link
                to={"network-management/manage-groups"}
                className="shortcut_link"
              >
                manage leaders
              </Link>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
