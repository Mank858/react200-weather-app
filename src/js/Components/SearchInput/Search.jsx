import React from 'react';

import {
  updateSearch,
  getWeather,
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.updateSearch = this.updateSearch.bind(this)
    this.getWeather = this.getWeather.bind(this)
    this.getPresetWeather = this.getPresetWeather.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  updateSearch(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearch(value));
  }
  getWeather() {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { searchInput } = this.props;
    dispatch(getWeather(searchInput));
  }
  getPresetWeather(e) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    dispatch(getWeather(e.target.value));
  }

  handleKeyPress(e) {
    const { searchInput } = this.props;
    const { dispatch } = this.props;
    if (e.key == 'Enter' && searchInput != '') {
        dispatch(getWeather(searchInput))
      }
    }
  

  render() {
    const { searchInput } = this.props;
    return (
      <div>

        <div className="btn-group">
          <button className="btn btn-primary" type="button" value='san diego'
            onClick={this.getPresetWeather}>San Diego</button>
          <button className="btn btn-primary" type="button" value='new york'
            onClick={this.getPresetWeather}>New York</button>
          <button className="btn btn-primary" type="button" value='Washington DC.'
            onClick={this.getPresetWeather}>Washington DC.</button>
          <button className="btn btn-primary" type="button" value='London'
            onClick={this.getPresetWeather}>London</button>
          <button className="btn btn-primary" type="button" value='Tokyo'
            onClick={this.getPresetWeather}>Tokyo</button>
        </div>


        <div className='input-group search'>
          <input type="text" className='form-control' onKeyPress={this.handleKeyPress}
            value={searchInput} onChange={this.updateSearch} placeholder='Please enter a city here' />
          <div className="input-group-append">
            <button onClick={this.getWeather} className='btn btn-primary'>Go!</button>
          </div>

        </div>
      </div>
    );
  }
}