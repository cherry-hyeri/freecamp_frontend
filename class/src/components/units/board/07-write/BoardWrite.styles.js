import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props) => props.rrr};
  color: ${(props) => {
    return props.qqq;
  }};
  background-color: ${(props) => (props.zzz ? "yellow" : "default")};
  // 의미 없는 소괄호는 생략 가능!!
`;
