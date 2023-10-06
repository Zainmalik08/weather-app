import React from "react";
import image from "../../assets/image/wind.png";

interface props {
  data: string;
  property: string;
  unit: string;
}

const DataCard = ({ data, property, unit }: props) => {
  return (
    <div>
      <div
        style={{
          padding: "28px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          height: "163px",
          width: "189px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "#fff",alignContent:"center", display:"flex" ,columnGap:"4px" }}>
          <img src={image} height={22} width={22} alt="vector" />
          {data}
        </div>
        <div style={{ color: "#fff", fontSize: "34px", fontWeight: 600 }}>
          {property}
          <span
            style={{
              color: " rgba(255, 255, 255, 0.52)",
              fontWeight: 400,
              fontSize: "24px",
            }}
          >
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
