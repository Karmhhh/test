import { Outlet, Link } from "react-router-dom";
// import Navbar from "./navbar";
import logo from "../logo.svg";
import "../App.css";
import { Stack, Typography } from "@mui/material";

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stack direction={'row'} spacing={'2rem'}>
          <Link to="/login/home" style={{ color: "white" }}>
            <Typography component={"i"}>Go To HomePage.</Typography>
          </Link>
         
          <Link to="/login" style={{ color: "white" }}>
            <Typography component={"i"}>Go To Login.</Typography>
          </Link>
          {/* <Button onClick={()=>{}} style={{ color: "white" }}>
            <Typography component={"i"}>Logout.</Typography>
          </Button> */}
        </Stack>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
