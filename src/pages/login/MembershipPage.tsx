import React from "react";
import TopBar from "../../components/common/TopBar";
import { Button, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "../../styles/Main.scss";
import "../../styles/Membership.scss";

const MembershipPage: React.FC = () => {
  return (
    <>
      <TopBar />
      <form className="membership-container">
        <div className="membership-input">
          <TextField
            id="standard-basic"
            label="이메일을 입력해 주세요."
            variant="standard"
            className="text-field"
          />
          <Button variant="contained" className="btn">
            중복확인
          </Button>
        </div>
        <div className="membership-input">
          <TextField
            id="standard-basic"
            label="비밀번호를 입력해 주세요."
            variant="standard"
            className="text-field"
          />
        </div>
        <div className="membership-input">
          <TextField
            id="standard-basic"
            label="비밀번호를 확인"
            variant="standard"
            className="text-field"
          />
        </div>
        <div className="membership-input">
          <TextField
            id="standard-basic"
            label="닉네임을 입력해 주세요."
            variant="standard"
            className="text-field"
          />
        </div>
        <div className="membership-input">
          <TextField
            id="standard-basic"
            label="학교명을 입력해 주세요."
            variant="standard"
            className="text-field"
          />
        </div>
        <FormControl className="sex-radio">
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="여성" />
            <FormControlLabel value="male" control={<Radio />} label="남성" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" className="submit-btn">
          중복확인
        </Button>
      </form>
    </>
  );
};

export default MembershipPage;
