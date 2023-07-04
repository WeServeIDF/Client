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
        <p style={{fontWeight:'bold', marginRight:'2px'}}>בחר יום:</p>
        <select style={{height:'fit-content', width:'fit-content', marginTop:'17px', padding:'2px', borderRadius:'7px'}}>
          <option value="Sunday">ראשון</option>
          <option value="Monday">שני</option>
          <option value="Tuesday">שלישי</option>
          <option value="Wednesday">רביעי</option>
          <option value="Thursday">חמישי</option>
        </select>
        <p style={{fontWeight:'bold'}}>בחר רשת:</p>
        <select style={{height:'fit-content', width:'fit-content', marginTop:'17px', padding:'2px', borderRadius:'7px'}}>
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
        <p style={{fontWeight:'bold'}}>בחר בסיס:</p>
        <select style={{height:'fit-content', width:'fit-content', marginTop:'17px', padding:'2px', borderRadius:'7px'}}>
          <option value="Dontcare">הכל</option>
          <option value="Lotem">לוטם</option>
          <option value="108AF">108 חא</option>
          <option value="Shalishoot">שלישות ר"ג</option>
        </select>

        <button style={{width: 'fit-content',height:'fit-content', padding: '10px 20px', marginTop:'7px', marginRight:'20px', borderRadius:'10px'}} onClick={()=>{props.onSearchRequest()}}>חפש</button>
      </div>
    </div>
  );
}
