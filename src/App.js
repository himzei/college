import Business from "./Business";
import Consult from "./Consult";
import MainSlider from "./MainSlider";
import MapKakao from "./MapKakao";

import Outline from "./Outline";
import Portfolio from "./Portfolio";
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

      {/* 진행사진 */}
      <Portfolio />

      {/* 상담신청하기 */}
      <Consult />

      {/* 카카오지도 */}
      <MapKakao />
    </>
  );
}

export default App;
