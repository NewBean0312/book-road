import React from "react";
import { Button, TextField } from "@mui/material";
import LoginActions from "./LoginActions";
import "../styles/Login.scss";


const LoginContainer:React.FC = () => {
  return (
    <div className="login-container">
      <TextField
        id="standard-basic"
        label="이메일을 입력해 주세요."
        variant="standard"
        className="login-field"
      />
      <TextField
        id="standard-basic"
        label="비밀번호를 입력해 주세요."
        variant="standard"
        className="login-field"
      />
      <Button variant="contained" className="login-btn">
        로그인
      </Button>
      <LoginActions />
    </div>
  );
};

export default LoginContainer;
