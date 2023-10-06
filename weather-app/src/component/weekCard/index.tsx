import React, { ReactNode } from "react";
import image from "../../assets/image/b.png";
import imag2 from "../../assets/image/Group 290.png";

interface props {
  day: string;
  temp1: string;
  temp2: string;
  img?: ReactNode;
  report: string;
}

const WeekCard = ({ day, temp1, temp2, img, report }: props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "4px",
          maxWidth: "120px",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#fff" }}>{day}</div>
        {img}
        <div style={{ color: "#fff" }}>
          {temp1} •
          <span style={{ color: " rgba(255, 255, 255, 0.52)" }}>{temp2}</span>
        </div>
        <div style={{ color: " rgba(255, 255, 255, 0.52)" }}>{report}</div>
      </div>
    </div>
  );
};

export default WeekCard;
