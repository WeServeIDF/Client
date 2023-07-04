import React, { useEffect, useState } from "react";
import { GetHardcodedStationsList } from "../../API_Requests/StationRequests";
import { StationDTO } from "../../types/stationDTO";
import { Map } from "./components/Map/Map";
import { SearchHeader } from "./components/SearchHeader/SearchHeader";
import SwipeableEdgeDrawer from "./components/SwipeableEdgeDrawer/SwipeableEdgeDrawer";

function SearchPage() {
  const [stationsList, setStationsList] = useState<StationDTO[]>();
  return (
    <div className="App">
      <SearchHeader onSearchRequest={onSearchRequest}/>
      <Map />
      {stationsList && <SwipeableEdgeDrawer stations={stationsList}/>}
    </div>
  );

function onSearchRequest(){
  GetHardcodedStationsList().then((res) => {
    setStationsList(res);
  })
}
}
export default SearchPage;
