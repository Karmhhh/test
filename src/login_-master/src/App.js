import { useState } from "react";
import { Login } from "./Components/login";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";

const Home = () => {
  return <div style={{textAlign:'center'}}><h5>You logged, this is the home page.</h5></div> ;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/login/home" element={loggedIn? <Home/> : <div style={{textAlign:'center'}}><h6> LogIn first to see this page. </h6></div>} />
          <Route path="login" element={<Login obj={{loggedIn, setLoggedIn}}></Login>} />
          </Route>
      </Routes>
  );
}

export default App;
