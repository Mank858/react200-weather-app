import { connect } from 'react-redux'
import CityWeather from './CityWeather'

function mapStoreToProps(store) {
    return {
      searchInput: store.search.searchInput,
      searchedCity: store.search.searchedCity,
      lat: store.search.lat,
      lon: store.search.lon,
      Hightemp: store.search.Hightemp,
      temp: store.search.temp,
      pressure: store.search.pressure,
      humidity: store.search.humidity,
      Lowtemp: store.search.Lowtemp,
      Hightemp: store.search.Hightemp,
      Wind: store.search.Wind,
      icon: store.search.icon
    };
  }
  
  export default connect(mapStoreToProps)(CityWeather);