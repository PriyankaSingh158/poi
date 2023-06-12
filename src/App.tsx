import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import { ThirdUserForm } from "./components/user-management/ThirdUserForm";
// import { SecondUserForm } from "./components/user-management/SecondUserForm";
// import { ThirdUserForm } from "./components/user-management/ThirdUserForm";
// import { AddNewCity } from "./components/user-management/AddNewCity";
// import { AddDistrict1 } from "./components/user-management/AddDistrict1";
// import { AddNewCity } from "./components/user-management/AddNewCity";
// import { AddDistrict1 } from "./components/user-management/AddDistrict1";
// import { Groups } from "./components/user-management/Groups";
// import { ManageUser } from "./components/user-management/ManageUser";
import { LoginForm } from "./components/user-management/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
]);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
