import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// import { ComplaintForm } from "./components/practice/ComplaintForm";
// import { AddNewLetter } from "./components/user-management/AddNewLetter";
// import { AddAssembly } from "./components/user-management/AddAssembly";
// import { AddDistrict } from "./components/user-management/AddDistrict";
// import { AddNewStaff } from "./components/user-management/AddNewStaff";
// import { LoginLayout } from "./components/user-management/LoginLayout";
// import { AddNewStaff } from "./components/user-management/AddNewStaff";
// import { EditStaff } from "./components/user-management/EditStaff";
import { EditProfile } from "./components/user-management/EditProfile";
import { LoginLayout } from "./components/user-management/LoginLayout";
// import MyRegisteration from "./components/practice/MyRegisteration";

// import LoginForm from "./components/practice/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EditProfile />,
  },
]);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
