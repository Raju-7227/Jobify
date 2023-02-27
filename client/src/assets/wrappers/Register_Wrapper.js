import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 150px;

  .form {
    background-color: white;
    width: 500px;
    /* // border: 2px solid black; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-top: 7px solid #2cb1bc;
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    align-items: center;
    /* align-items: center; */
    margin-bottom: 70px;
  }
  .form:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .landing-logo {
    margin-left: 0px;
  }

  h3 {
    margin-top: 28px;
    margin-bottom: 18px;
  }
  .form-row {
    width: 82%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    /* border: 2px solid black; */
  }

  .form-label {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 18px;
    margin-bottom: 16px;
    margin-top: 20px;
  }

  .form-input {
    background-color: #f0f4f8;
    width: 98%;
    height: 34px;
    border-radius: 7px;
    /* padding: 5px; */
    border: none;
  }
  .form-input:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border: none;
    outline: none;
  }

  .btn-block {
    font-weight: bold;
    font-size: 18px;
    width: 82%;
    border-radius: 7px;
    /* height: 34px; */
    margin-top: 30px;
    background-color: #2cb1bc;
    padding: 7px;
    cursor: pointer;
    /* padding-bottom: 7px; */
  }

  .btn1 {
    background: transparent;
    border: none;
    font-weight: bold;
    color: #2cb1bc;
    font-size: 20px;
    cursor: pointer;
    /* margin-left: 1px; */
    margin-top: 24px;
  }

  p {
    // font-weight: bold;
    font-size: 17px;
    // margin-right: 18px;
  }

  @media (max-width: 700px) {
    h3 {
      margin-top: 75px;
      margin-left: -20px;
    }
  }
`;

export default Wrapper;
