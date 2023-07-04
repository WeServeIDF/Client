import React from "react";

export type SearchHeaderProps = {
  onSearchRequest: ()=>void
}

export function SearchHeader(props: SearchHeaderProps): JSX.Element {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "20%",
        backgroundColor: "beige",
        zIndex: "1",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          direction: "rtl",
          margin: '5px'
        }}
      >
        <p>בחר יום</p>
        <select>
          <option value="Sunday">ראשון</option>
          <option value="Monday">שני</option>
          <option value="Tuesday">שלישי</option>
          <option value="Wednesday">רביעי</option>
          <option value="Thursday">חמישי</option>
        </select>
        <p>בחר רשת</p>
        <select>
          <option value="Black">בלמ"ס</option>
          <option value="Army">סודי</option>
          <option value="TS">סד"ב</option>
        </select>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          direction: "rtl",
          margin: '5px'
        }}
      >
        <p>בחר בסיס</p>
        <select>
          <option value="Dontcare">הכל</option>
          <option value="Lotem">לוטם</option>
          <option value="108AF">108 חא</option>
          <option value="Shalishoot">שלישות ר"ג</option>
        </select>
        <button style={{width: '70px'}} onClick={()=>{props.onSearchRequest()}}>חפש</button>
      </div>
    </div>
  );
}
