import React from 'react'
import { Link } from 'react-router-dom';

const LoginActions:React.FC = () => {
  return (
    <div className='login-actions'>
      <Link to={``} className='login-action-link'>게스트로 로그인</Link>
      <div></div>
      <Link to={``} className='login-action-link'>비밀번호 찾기</Link>
      <Link to={`/login/membership`} className='login-action-link'>회원가입</Link>
    </div>
  )
}

export default LoginActions;