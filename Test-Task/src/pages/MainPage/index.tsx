import Map from "../../components/Map";
import Sidebar from "../../components/Sidebar";
import Controls from "../../components/Controls";

const MainPage = () => {
  return (
    <>
      <Map />
      <Controls>
        <Sidebar />
      </Controls>
    </>
  );
};

export default MainPage;
