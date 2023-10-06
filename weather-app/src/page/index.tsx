import React, { useEffect, useState } from "react";
import "./weather.css";
import image from "../assets/image/Group 290.png";
import image1 from "../assets/image/b.png";
import axios from "axios";
import WeekCard from "../component/weekCard";
import DataCard from "../component/dataCard";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://weatherapi-com.p.rapidapi.com/current.json",
          {
            params: { q: "53.1,-0.13" },
            headers: {
              "X-RapidAPI-Key":
                "a8e4bb4acamsh186edb9bcc597edp11268cjsn4c1f32da0bd2",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(weatherData);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #09234D 100%, #124D8F 0%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="left">
          <div>
            <div style={{ fontSize: "16px", color: "#fff" }}>location</div>
            <div
              style={{ fontSize: "16px", color: " rgba(255, 255, 255, 0.52)" }}
            >
              Mostly Clear
            </div>
          </div>
          <img src={image} alt="weather" />
          <div>
            <div
              style={{
                fontSize: "75px",
                color: " #fff",
                fontWeight: 600,
              }}
            >
              37ºC
            </div>
            <div
              style={{
                fontSize: "18px",
                color: " rgba(255, 255, 255, 0.52)",
                fontWeight: 500,
              }}
            >
              Mostly Clear
            </div>
          </div>
        </div>
        <div className="right">
          <div className="weekly">
            <WeekCard
              day="Tuesday"
              temp1={"35º "}
              temp2={"22º"}
              img={<img src={image} alt="pic" height={56}  />}
              report="Clear"
            />
            <WeekCard
              day="Wednesday"
              temp1={"36º "}
              temp2={"22º"}
              img={<img src={image1} alt="pic" height={56}  />}

              report="Partly Cloudy"
            />
            <WeekCard
              day="Thursday"
              temp1={"37º "}
              temp2={"22º"}
              img={<img src={image1} alt="pic" height={56}  />}

              report="Partly Cloudy"
            />
            <WeekCard
              day="Friday"
              temp1={"33º "}
              temp2={"22º"}
              img={<img src={image} alt="pic" height={56}  />}

              report="Clear"
            />
          </div>
          <div className="data">
            <DataCard data="Wind Speed" property="42" unit="km/h" />
            <DataCard data="Wind Direction" property="170" unit="NW" />
            <DataCard data="Humidity" property="43" unit="%" />
            <DataCard data="UV Index" property="4" unit="uv" />
            <DataCard data="Rain Chances" property="12" unit="%" />
            <DataCard data="Temperature" property="41" unit="ºC" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
