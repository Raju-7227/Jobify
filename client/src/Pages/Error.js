import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import page_not_found_img from "./not-found.svg";
//import Wrappers from the Wrapper file
import { Wrapper } from "../../src/assets/wrappers/Error_Page_Wrapper";

function Error() {
  return (
    <>
      <Wrapper>
        <img src={page_not_found_img} alt="not-found-img"></img>
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link className="error_link" to="/">
          Back Home
        </Link>
      </Wrapper>
    </>
  );
}

export default Error;
