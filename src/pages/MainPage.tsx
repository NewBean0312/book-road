import React from 'react';
import Header from "../components/common/Header";

import "../styles/Main.scss";
import LoginContainer from '../components/LoginContainer';

const MainPage:React.FC = () => {
  return (
    <div className='container'>
        <Header />
        <LoginContainer />
    </div>
  )
}

export default MainPage