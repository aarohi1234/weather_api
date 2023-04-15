import React from "react";
import "../styles/WeatherDetail.css";
import { BsThermometerSun } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

const WeatherDetail = ({ setData, data }) => {
  return (
    <Box  w= "25rem"
   bgColor={"white"}
    p= "0.75rem">
      <h2 className="h2-text">
        {" "}
        <Button onClick={() => setData()}>🔙</Button> 
        Weather App
      </h2>
      <hr className="hr-text" />
      <Box  bgColor=" transparent"
  display= "flex"
  justify-content="center"
        alignItems="center"
        
  p= "0.2rem 0">
        <Image
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          alt="png"
          bgColor={"transparent"}
          w= "200px"
         ml={"86"}
        />
      </Box>
      <div className="weather-details">
        <Heading textAlign={"center"} bgColor={"white"}>{data.main.temp}° C</Heading>
        <Text>{data?.weather[0].description}</Text>
        <Text>
          {data?.name} , {data?.sys.country}
        </Text>
      </div>
      <div className="details">
        <div className="left">
          <BsThermometerSun className="icons" />
          <div>
            <span className="span-class">{data?.main.feels_like}° C</span>
            <Box>Feels like</Box>
          </div>
        </div>
        <div className="right">
          <WiHumidity className="icons" />
          <div>
            <span className="span">{data?.main.humidity}° C</span>
            <Box>Humidity</Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default WeatherDetail;
