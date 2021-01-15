import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 30px;
  padding: 0 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.p`
  margin: 0;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  height: 10px;
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin: 0 0.5rem;
  }
`;

export const Icon = styled.div`
  > svg {
    fill: #fff;
    height: 10px;
  }
`;
