import {
  Container,
  EmailContainer,
  Label,
  AppWrapper,
  CalendarContainer,
  CalednaryDay,
  CalendarDate,
  CameraContainer,
  MapContainer,
  MapImg,
  PhotosContainer,
  PhotosImg,
  ClockContainer,
} from "./index.style";
import EmailIcon from "../../svg/EmailIcon.svg";
import CameraIcon from "../../svg/CameraIcon.svg";
import ClockIcon from "../../svg/ClockIcon.svg";

const AppsMenu = () => {
  return (
    <Container>
      <AppWrapper>
        <EmailContainer>
          <EmailIcon />
        </EmailContainer>
        <Label>E-Mail</Label>
      </AppWrapper>

      <AppWrapper>
        <CalendarContainer>
          <CalednaryDay>Tuesday</CalednaryDay>
          <CalendarDate>12</CalendarDate>
        </CalendarContainer>
        <Label>Calendar</Label>
      </AppWrapper>

      <AppWrapper>
        <PhotosContainer>
          <PhotosImg src="/img/applephoto.png" alt="apple maps" />
        </PhotosContainer>
        <Label>Maps</Label>
      </AppWrapper>

      <AppWrapper>
        <CameraContainer>
          <CameraIcon />
        </CameraContainer>
        <Label>Camera</Label>
      </AppWrapper>

      <AppWrapper>
        <MapContainer>
          <MapImg src="/img/applemaps.png" alt="apple maps" />
        </MapContainer>
        <Label>Maps</Label>
      </AppWrapper>

      <AppWrapper>
        <ClockContainer>
          <ClockIcon />
        </ClockContainer>
        <Label>Clock</Label>
      </AppWrapper>
    </Container>
  );
};

export default AppsMenu;
