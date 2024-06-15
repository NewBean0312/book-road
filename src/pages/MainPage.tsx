import React from "react";
import Header from "../components/common/Header";
import LoginContainer from "../components/LoginContainer";

import "../styles/Main.scss";

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <LoginContainer />
    </div>
  );
};

export default MainPage;
