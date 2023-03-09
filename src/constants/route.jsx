import HomeComp from "../components/home/home.comp";
import Onboarding from "../components/onboarding/onboarding";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.Page";

export const PRIVATE_ROUTES = [
  {
    path: "/",
    component: <HomeComp />
  }
];
export const PUBLIC_ROUTES = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/signup",
    component: <SignupPage />,
  },
  {
    path: "/onboarding",
    component: <Onboarding />,
  },
];
