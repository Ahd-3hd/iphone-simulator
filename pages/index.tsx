import Outerframe from "../components/Outerframe";
import StatusBar from "../components/StatusBar";
import Dock from "../components/Dock";
import AppsMenu from "../components/AppsMenu";
export default function Home() {
  return (
    <Outerframe>
      <StatusBar />
      <AppsMenu />
      <Dock />
    </Outerframe>
  );
}
