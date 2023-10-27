
import "../App.css";
import { Paper, TextField, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// const access = { username: "test", password: "test" };

export const Login = (props) => {

  const navigate = useNavigate();
  const [credential, setCredential] = useState({ username: "", password: "" })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const {username, password} = credential;
    await axios.post('http://localhost:3001/validatePassword', {username,password} )
    .then(res=>{
      if(res.data.validation){
        alert('LogIn Success!')
        navigate('home')
        props.obj.setLoggedIn(true);
      }
      else{
        alert('Error! Not Valid Credentials')
        props.obj.setLoggedIn(false);
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <Paper
        style={{
          textAlign: "center",
          padding: "5px",
          margin: "5% auto",
          width: "50%",
        }}
      >
        <Typography variant="h6" component={"i"}>
          Login Page for testing.
        </Typography>
        <Stack spacing={'1rem'} style={{ width: "50%", margin: "5% auto", padding: "5px" }}>
          <TextField
            label={"Username"}
            value={credential.username}
            onChange={(e) => {
              setCredential({
                ...credential,
                username: e.target.value,
              });
            }}
          ></TextField>
         
          <TextField
            label={"Password"}
            value={credential.password}
            type={"password"}
            onChange={(e) => {
              setCredential({
                ...credential,
                password: e.target.value,
              });
            }}
          ></TextField>
         
          <Button type="submit">Sing In</Button>
        </Stack>
      </Paper>
    </form>
  );
};
