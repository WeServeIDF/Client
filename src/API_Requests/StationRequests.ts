import axios from "axios";
import { StationDTO } from "../types/stationDTO";

export async function GetHardcodedStationsList(): Promise<StationDTO[]>{
    console.log("test")
    const serverResponse = axios.get<StationDTO[]>('http://localhost:3000/station/test');
    return (await serverResponse).data
}