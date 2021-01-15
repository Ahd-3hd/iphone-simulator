import {
  Container,
  TopNotch,
  NotchSpeaker,
  NotchCamera,
  Background,
} from "./index.style";

const Outerframe = ({ children }) => {
  return (
    <Container>
      <TopNotch>
        <NotchSpeaker />
        <NotchCamera />
      </TopNotch>
      {children}
      <Background img="/img/wallpaper.jpg" />
    </Container>
  );
};

export default Outerframe;
