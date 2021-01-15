import { Container, IconContainer, SafariIcon, SafariImg } from "./index.style";
import CallIcon from "../../svg/CallIcon.svg";
import MessageIcon from "../../svg/MessageIcon.svg";
import ItunesIcon from "../../svg/ItunesIcon.svg";
const Dock = () => {
  return (
    <Container>
      <IconContainer background="#19B428">
        <CallIcon />
      </IconContainer>
      <SafariIcon>
        <SafariImg src="/img/safari.svg" />
      </SafariIcon>
      <IconContainer background="#19B428">
        <MessageIcon />
      </IconContainer>
      <IconContainer background="#fff">
        <ItunesIcon />
      </IconContainer>
    </Container>
  );
};

export default Dock;
