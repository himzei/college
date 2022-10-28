import Business from "./Business";
import MainSlider from "./MainSlider";
import Outline from "./Outline";
import Process from "./Process";

function App() {
  return (
    <>
      {/* 메인 슬라이더 */}
      <MainSlider />

      {/* 개요 */}
      <Outline />

      {/* 메인 비즈니스 */}
      <Business />

      {/* 진행과정 */}
      <Process />
    </>
  );
}

export default App;
