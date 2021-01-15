import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 1rem;
  height: 70px;
  background: rgba(255, 255, 255, 0.5);
  width: 90%;
  border-radius: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 55px;
  height: 55px;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    height: 30px;
    fill: #fff;
  }
`;

export const SafariIcon = styled.div`
  background: #fff;
  width: 55px;
  height: 55px;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SafariImg = styled.img`
  height: 50px;
`;
