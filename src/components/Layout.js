import { Outlet } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";

export default function Layout(props) {
  return (
    <div>
      <CustomNavbar isLoggedIn={props.isLoggedIn} />
      <Outlet />
    </div>
  );
}
