import React from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

function Header() {
  return (
    <header>
      <div className="title">
        <h1>
          <SupervisedUserCircleIcon />
          User Diary
        </h1>
      </div>
    </header>
  );
}

export default Header;
