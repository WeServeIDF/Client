import React from "react";
import './FoundStationCard.css'

export type FoundStationCardProps = {
    timeRange: string;
    base: string;
    buildingName: string;
    officeNumber: number;
    locationDetails: string;
    contactName: string;
    contactPhone: string;
}

export function FoundStationCard(props: FoundStationCardProps): JSX.Element {

    return <div className="found-station-card--container">
        <p>{props.timeRange}</p>
        <p>בסיס {props.base} בניין {props.buildingName} משרד מספר {props.officeNumber}</p>
        <p>איך להגיע: {props.locationDetails}</p>
        <p>פרטי איש קשר: {props.contactName} {props.contactPhone}</p>
    </div>
}