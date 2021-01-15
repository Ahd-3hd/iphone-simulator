import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 870px;
  border: 1.4rem solid #313131;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 2rem;
  position: relative;
`;

export const TopNotch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0.4rem);
  height: 30px;
  width: 50%;
  background: #313131;
  margin: 0 auto;
  border-radius: 0 0 1.3rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotchSpeaker = styled.div`
  width: 60%;
  height: 5px;
  background: #5f5f5f;
  border-radius: 5px;
`;

export const NotchCamera = styled.div`
  width: 5px;
  height: 5px;
  background: #5f5f5f;
  border-radius: 5px;
  margin-left: 0.5rem;
`;

export const Background = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 104%;
  height: 102%;
  position: absolute;
  top: -5px;
  left: 0;
  z-index: -1;
`;
