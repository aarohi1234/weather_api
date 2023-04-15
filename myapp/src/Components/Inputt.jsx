import React, {  useState } from "react";
import "../styles/WeatherDetail.css";
import WeatherDetail from "./Weather";
import { Box, Button, Input } from "@chakra-ui/react";

const Inputt = () => {
  const [data, setData] = useState();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({
    lon: 0,
    lat: 0,
  });

  const getData = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === "404") {
          return alert("Not Found");
        }
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      getData(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d3a22377b3ea8e505f4fa0afb6644224&units=metric`
      );
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
      const crd = pos.coords;
      setLocation({ lat: crd.latitude, lon: crd.longitude });
      getData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=d3a22377b3ea8e505f4fa0afb6644224&units=metric`
      );
    }

    function error(err) {
      alert(err.message);
    }
  };

  return (
    <div className="main">
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      {data == undefined ? (
        <Box w={"30rem"} bgColor={"white"} p={"2rem"}>
          <h2 className="h2-text">Weather App</h2>
          <hr className="hr-text" />
          <Input
            mr={"2rem"}
            w={"100%"}
            p={"0.65rem 0rem"}
            border={"1px solid lightgray"}
            textAlign={"centre"}
            type="text"
            placeholder="Enter City Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={handleSubmit}
          />
          <hr className="hr-text" data-content="or" />
          <Button
            w="100%"
            mt="2rem"
            p="0.75rem "
            border="none"
            color={"white"}
            bgColor={"grey"}
            onClick={getLocation}>
            Get Device Location
          </Button>
        </Box>
      ) : (
        <WeatherDetail setData={setData} data={data} />
      )}
    </div>
  );
};

export default Inputt;
