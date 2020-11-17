import styled from "styled-components";

export const ButtonPulseContainer = styled.button`
  background-color: #fff;
  color: #777;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  border: 1px solid grey;
  border-radius: 100px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 0;
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
