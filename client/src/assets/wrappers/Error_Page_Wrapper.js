import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 62%;
  }
  h3 {
    font-size: 32px;
  }
  p {
    margin-top: -10px;
  }

  .error_link {
    /* text-decoration: none; */
    color: #2cb1bc;
    font-size: 20px;
  }
`;

export { Wrapper };
