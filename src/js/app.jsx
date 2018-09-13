import React from 'react';

import Search from './Components/SearchInput';
import CityWeather from './Components/CityWeather';
import History from './Components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className="jumbotron">
          <h1 className="display-4">Origin Weather Application</h1>
          <p className="p">Always know if you'll need an umbrella!</p>
        </div>

        <Search />

        <div className='row'>
          <div className='col-md-6'>
            <CityWeather />
          </div>

          <div className='col-md-6'>
            <History />
          </div>
        </div>

      </div>
    );
  }
}
