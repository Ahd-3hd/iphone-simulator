import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-template-rows: 85px;
  grid-gap: 1rem;
  padding: 0.5rem;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const EmailContainer = styled.div`
  background: linear-gradient(180deg, #3780ee 0%, #88b3f3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  margin-bottom: 0.5rem;
  > svg {
    fill: #fff;
    height: 30px;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 0 2px rgba(0, 0, 0, 1);
`;

export const CalendarContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const CalednaryDay = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: #dc1212;
`;
export const CalendarDate = styled.p`
  margin: 0;
  font-size: 1.7rem;
  color: #404040;
`;

export const CameraContainer = styled.div`
  background: linear-gradient(180deg, #ededed 0%, #a3a3a3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  margin-bottom: 0.5rem;
  > svg {
    height: 30px;
    fill: #333333;
  }
`;

export const MapContainer = styled.div``;
export const MapImg = styled.img`
  width: 100%;
`;

export const PhotosContainer = styled.div``;
export const PhotosImg = styled.img`
  width: 100%;
`;

export const ClockContainer = styled.div`
  background: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  margin-bottom: 0.5rem;
  > svg {
    height: 50px;
  }
`;
