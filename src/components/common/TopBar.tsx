import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="arrow-icon"
        onClick={() => navigate(-1)}
      />
      <header>회원가입</header>
    </div>
  );
};

export default TopBar;
