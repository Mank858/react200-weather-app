// Action Creators

import axios from 'axios';

export function updateSearch(searchInput) {
    return {
      type: 'UPDATE_SEARCH',
      payload: searchInput 
    };
  }

  export function getWeather(searchInput) {  
      return { 
        type: 'GET_WEATHER',
        payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=c6adb7d8eda1757c35ae0c736acd3b30`)
    }
  }
  