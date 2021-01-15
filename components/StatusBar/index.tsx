import { Container, Time, IconsContainer, Icon } from "./index.style";
import CellularIcon from "../../svg/CellularIcon.svg";
import WifiIcon from "../../svg/WifiIcon.svg";
import BatteryIcon from "../../svg/BatteryIcon.svg";

const StatusBar = () => {
  return (
    <Container>
      <Time>9:41</Time>
      <IconsContainer>
        <Icon>
          <CellularIcon />
        </Icon>
        <Icon>
          <WifiIcon />
        </Icon>
        <Icon>
          <BatteryIcon />
        </Icon>
      </IconsContainer>
    </Container>
  );
};

export default StatusBar;
