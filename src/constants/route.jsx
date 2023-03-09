import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.Page";

export const PRIVATE_ROUTES = [];
export const PUBLIC_ROUTES = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/signup",
    component: <SignupPage />,
  },
];
