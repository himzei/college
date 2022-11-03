import { Box } from "@chakra-ui/react";

import { Map, MapMarker } from "react-kakao-maps-sdk";
const { kakao } = window;

export default function MapKakao() {
  const address = "대구 중구 국채보상로 123길 16";
  let geocoder = new kakao.maps.services.Geocoder();

  console.log(geocoder.addressSearch(address));

  // geocoder.addressSearch(address, function (result, status) {
  //   console.log(result, status);
  //   // if (status === kakao.maps.services.Status.OK) {
  //   //   var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  //   // }
  // });

  // useEffect(() => {
  //   // 주소로 좌표를 검색합니다
  //   geocoder.addressSearch(
  //     "제주특별자치도 제주시 첨단로 242",
  //     function (result, status) {
  //       // 정상적으로 검색이 완료됐으면
  //       if (status === kakao.maps.services.Status.OK) {
  //         var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

  //         // 결과값으로 받은 위치를 마커로 표시합니다
  //         var marker = new kakao.maps.Marker({
  //           map: map,
  //           position: coords,
  //         });

  //         // 인포윈도우로 장소에 대한 설명을 표시합니다
  //         var infowindow = new kakao.maps.InfoWindow({
  //           content:
  //             '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
  //         });
  //         infowindow.open(map, marker);

  //         // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  //         map.setCenter(coords);
  //       }
  //     }
  //   );
  // }, [map, geocoder]);

  return (
    <Box w="full" h={96} display="flex" justifyContent="center" my={16}>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Box>
  );
}
