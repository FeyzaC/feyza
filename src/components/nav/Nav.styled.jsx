import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  background-color: pink;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: purple;
`;
