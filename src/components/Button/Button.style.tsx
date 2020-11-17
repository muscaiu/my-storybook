import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: ${(props) => props.theme.typography.size.level7};
  border: 0;
  border-radius: 5px;
  text-align: center;
  transition: all 0.5s ease-out;
  color: ${(props) => props.theme.colors.grey7};
  &:focus {
    outline: 0;
  }

  &.primary {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.grey7};
    color: ${(props) => props.theme.colors.white};
  }

  &.white {
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.grey3};
  }

  &.large {
    padding: 8px 24px;
    height: 52px;
  }

  &.medium {
    padding: 8px 20px;
    height: 48px;
  }

  &.small {
    height: 40px;
  }

  &:hover {
    box-shadow: ${(props) => props.theme.elevations.level1};
  }
`;
