import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
        <header>
          <img src={NavMember} alt={""} />
          <p>홍길동님</p>
          {/* <button>로그인하기</button> */}
        </header>
    </>
  );
};

export default Test;
