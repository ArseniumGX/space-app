import { styled } from "styled-components"

export const Title = styled.h2`
  color: #7b68e6;
  font-size: 32px;
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`
