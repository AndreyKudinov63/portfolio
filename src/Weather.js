import React, { Component } from "react";
//import "bootswatch/dist/lux/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.css";
//import "./App.css";

import {Navbar, NavLink, Nav, Container, Row, Col, Button}  from "react-bootstrap";


const PLACES = [
  { name: "Самара", zip: "Samara" , lang: "ru"},
  { name: "Москва", zip: "Moscow" , lang: "ru"},
  { name: "Лондон", zip: "London" , lang: "en"},
  { name: "Токио", zip: "Tokio" , lang: "ja"}
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const lang = this.props.lang;
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=" +
      lang;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div bg="white">Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} />
        </h1>
        <p>Температура: {weatherData.main.temp}°</p>
        <p>Максимальная: {weatherData.main.temp_max}°</p>
        <p>Минимальная: {weatherData.main.temp_min}°</p>
        <p>Ветер: {weatherData.wind.speed} км/ч</p>
      </div>
    );
  }
}

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 3
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Города</h3>
              <Nav
                className="flex-column nav-pills nav-stacked"               
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavLink key={index} eventKey={index}>
                    {place.name}
                  </NavLink>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
                 <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} lang={PLACES[activePlace].lang}/>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Weather;