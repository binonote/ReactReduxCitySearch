import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord; //Equal to: const lon = cityData.city.coord.lon; const lat = cityData.city.coord.lat;

    return (
      <tr key={city}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart color="orange" data={temps} /></td>
        <td><Chart color="red" data={pressures} /></td>
        <td><Chart color="blue" data={humidities} /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// const stateToProps = (state) => {
//   return {weather: state.weather};
// }

// const stateToProps = ({weather}) => {
//   return {weather};
// }

// const stateToProps = ({weather}) => ({weather});

// export default connect(stateToProps)(WeatherList);
export default connect( ({ weather }) => ({ weather }) )(WeatherList);
