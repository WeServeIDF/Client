import axios from "axios";
import { StationDTO } from "../types/stationDTO";

export async function GetHardcodedStationsList(): Promise<StationDTO[]>{
    const serverResponse = axios.get<StationDTO[]>('http://localhost:4000/station/test');
    return (await serverResponse).data
}